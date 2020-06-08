import { Component, OnInit, Output, EventEmitter, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { reminderActions } from '@redux/reminder/actions';
import * as fromReminderReducer from '@redux/reminder/reducers';
import { Reminder } from '@redux/reminder/models/reminder.model';
import { ForeCastService } from '../services/forecast.service';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.css']
})
export class ReminderComponent implements OnInit, OnDestroy {
  @Output() closeModal = new EventEmitter<boolean>();
  @Input() date: string;

  subscription: Subscription;
  constructor(private store: Store<fromReminderReducer.State>, private forecastService: ForeCastService) { }
  panelOpenState = false;
  reminder: Reminder = {
    date: '',
    title: '',
    color: {
      color: '',
      name: ''
    },
    city: '',
    time: '',
    foreCast: '',
  };


  actualreminder: Reminder = {
    date: '',
    title: '',
    color: {
      color: '',
      name: ''
    },
    city: '',
    time: '',
    foreCast: '',
  };


  reminders: Reminder[] = [
    { ...this.reminder }
  ];

  actualReminders: Reminder[];

  foreCast = 'None';


  public defaultColors = [

    {
      color: 'red',
      name: 'Red'
    },
    {
      color: 'green',
      name: 'Green'
    },
    {
      color: 'yellow',
      name: 'Yellow'
    },
    {
      color: 'rgb(47, 116, 181)',
      name: 'Default'
    },
  ];

  public defaultCity = [
    'Bogota',
    'Medellin',
    'Cali',
    'Cartagena',
    'None'
  ];

  citySelected = 'None';


  colorSelected = {
    color: 'rgb(47, 116, 181)',
    name: 'Default'
  };


  sendMessage() {
    this.closeModal.emit(false);
  }


  ngOnInit(): void {
    this.actualReminders=[];
    this.subscription = this.store.pipe(select(fromReminderReducer.selectReminder)).subscribe(res => {
      if (res && res.reminder) {
        this.reminders = res.reminder;
      }
    });
    this.listActualReminder();
  }

  listActualReminder() {
    this.actualReminders = [...this.reminders];
    this.actualReminders = this.actualReminders.filter((item) => item.date === this.date);
  }

  getForecast() {
    this.forecastService.getForest(this.citySelected, this.date).subscribe((data: any) => {
      this.foreCast = data.data.current_condition[0].weatherDesc[0].value;
    });
  }

  getForecastActual() {
    this.forecastService.getForest(this.citySelected, this.date).subscribe((data: any) => {
      this.actualreminder.foreCast = data.data.current_condition[0].weatherDesc[0].value;
    });
  }

  addReminder() {
    const remin = [...this.reminders];
    this.reminder.city = this.citySelected;
    this.reminder.color = this.colorSelected;
    this.reminder.date = this.date;
    this.reminder.foreCast = this.foreCast;
    remin.push(this.reminder);
    this.store.dispatch(new reminderActions.SaveReminder(remin));
  }

  updateActualReminder(reminder: Reminder){

    this.actualreminder = {...reminder};
  }

  editTitle(event){
    this.actualreminder.title = event;
  }

  modifyReminder(reminder: Reminder) {
    const remin = [...this.reminders];
    const index = remin.findIndex(item => item.date === this.date &&  item.title === reminder.title );
    remin[index] = reminder;
    this.store.dispatch(new reminderActions.SaveReminder(remin));
  }




  ngOnDestroy() {
    this.subscription.unsubscribe();
  }



}
