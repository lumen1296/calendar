import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  dataCalendar = {
    meses: [{
      nombre: 'Enero',
      numero: 1
    }, {
      nombre: 'Febrero',
      numero: 2
    }, {
      nombre: 'Marzo',
      numero: 1
    }, {
      nombre: 'Abril',
      numero: 4
    }, {
      nombre: 'Mayo',
      numero: 5
    }, {
      nombre: 'Junio',
      numero: 6
    }, {
      nombre: 'Julio',
      numero: 7
    }, {
      nombre: 'Agosto',
      numero: 8
    }, {
      nombre: 'Septiembre',
      numero: 9
    }, {
      nombre: 'Octubre',
      numero: 10
    }, {
      nombre: 'Noviembre',
      numero: 11
    }, {
      nombre: 'Diciembre',
      numero: 12
    }],
    semana: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  };


  selected = [];

  constructor() { }



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
                'MM-DD-YYYY')).substring(0, 3)
            });
          }
        } else {
          for (let i = dayPrevMonth; i <= endPrevMonth; i++) {
            result.push({
              day: i,
              current: false,
              name: String(moment(('0' + Number(input - 1)).slice(-2) + '-' + ('0' + i).slice(-2) + '-' + year,
                'MM-DD-YYYY')).substring(0, 3)
            });
          }
        }
      }
      const days = startDay.daysInMonth();
      for (let i = 0; i < days; i++) {
        result.push({
          day: i + 1,
          current: true,
          name: String(moment(('0' + input).slice(-2) + '-' + ('0' + Number(i + 1)).slice(-2) + '-' + year, 'MM-DD-YYYY')).substring(0, 3)
        });
      }

      const endNextWeek = endDay.clone().day(7).date();
      for (let i = 1; i < endNextWeek; i++) {
        result.push({
          day: i,
          current: false,
          name: String(moment(('0' + Number(input + 1)).slice(-2) + '-' + ('0' + i).slice(-2) + '-' + year, 'MM-DD-YYYY')).substring(0, 3)
        });
      }

      return result;
    }
  }

  ngOnInit(): void {
  }



}
