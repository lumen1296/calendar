import { Component, OnInit, OnDestroy } from '@angular/core';
import * as moment from 'moment';
import { Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as fromReminderReducer from '@redux/reminder/reducers';
import { Reminder } from '@redux/reminder/models/reminder.model';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  constructor(private store: Store<fromReminderReducer.State>) { }

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

  reminders: Reminder[] = [
    { ...this.reminder }
  ];

  modal = false;

  dataCalendar = {
    meses: [{
      nombre: 'January',
      numero: 1
    }, {
      nombre: 'February',
      numero: 2
    }, {
      nombre: 'March',
      numero: 1
    }, {
      nombre: 'April',
      numero: 4
    }, {
      nombre: 'May',
      numero: 5
    }, {
      nombre: 'June',
      numero: 6
    }, {
      nombre: 'July',
      numero: 7
    }, {
      nombre: 'August',
      numero: 8
    }, {
      nombre: 'September',
      numero: 9
    }, {
      nombre: 'October',
      numero: 10
    }, {
      nombre: 'November',
      numero: 11
    }, {
      nombre: 'December',
      numero: 12
    }],
    semana: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  };
  selected = '';
  date: any;

  showModal() {
    this.modal = true;
  }

  closeModal($event) {
    this.modal = $event;
  }


  drawCalendar(input) {
    if (input) {
      const result = [];
      const year = moment().year();
      const startDay = moment(input + '-' + '/01/' + '-' + year, 'MM-DD-YYYY');
      const endDay = startDay.clone().endOf('month');
      const dayPrevMonth = startDay.clone().day(0).date();
      const endPrevMonth = startDay.clone().day(0).endOf('month').date();
      if (endPrevMonth - dayPrevMonth < 7) {
        if (input === 1) {
          for (let i = dayPrevMonth; i <= endPrevMonth; i++) {
            result.push({
              day: i,
              current: false,
              name: String(moment(12 + '-' + ('0' + i).slice(-2) + '-' + Number(year - 1),
                'MM-DD-YYYY')).substring(0, 3),
              date: String(moment(12 + '-' + ('0' + i).slice(-2) + '-' + Number(year - 1), 'MM-DD-YYYY').format('YYYY-MM-DD'))
            });
          }
        } else {
          for (let i = dayPrevMonth; i <= endPrevMonth; i++) {
            result.push({
              day: i,
              current: false,
              name: String(moment(('0' + Number(input - 1)).slice(-2) + '-' + ('0' + i).slice(-2) + '-' + year,
                'MM-DD-YYYY')).substring(0, 3),
              date: String(moment(('0' + Number(input - 1)).slice(-2) + '-' + ('0' + i).slice(-2) + '-' + year,
                'MM-DD-YYYY').format('YYYY-MM-DD'))
            });
          }
        }
      }
      const days = startDay.daysInMonth();
      for (let i = 0; i < days; i++) {
        result.push({
          day: i + 1,
          current: true,
          name: String(moment(('0' + input).slice(-2) + '-' + ('0' + Number(i + 1)).slice(-2) + '-' + year, 'MM-DD-YYYY')).substring(0, 3),
          date: String(moment(('0' + input).slice(-2) + '-' + ('0' + Number(i + 1)).slice(-2) + '-' + year, 'MM-DD-YYYY').format('YYYY-MM-DD'))
        });
      }

      const endNextWeek = endDay.clone().day(7).date();
      for (let i = 1; i < endNextWeek; i++) {
        result.push({
          day: i,
          current: false,
          name: String(moment(('0' + Number(input + 1)).slice(-2) + '-' + ('0' + i).slice(-2) + '-' + year, 'MM-DD-YYYY')).substring(0, 3),
          date: String(moment(('0' + Number(input + 1)).slice(-2) + '-' + ('0' + i).slice(-2) + '-' + year, 'MM-DD-YYYY').format('YYYY-MM-DD'))
        });
      }

      return result;
    }
  }

  drawReminder(date: string): boolean {
    const dateFilter = this.reminders.filter((item) => item.date === date);
    return dateFilter.length > 0;
  }


  ngOnInit(): void {
    console.log(this.date);
    this.subscription = this.store.pipe(select(fromReminderReducer.selectReminder)).subscribe(res => {
      if (res && res.reminder) {
        this.reminders = res.reminder;
      }
    });
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
