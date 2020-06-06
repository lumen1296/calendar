import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar/calendar.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


const CalendarRoutes = [
  { path: '', pathMatch: 'full', redirectTo: 'calendar'},
  { path: '', component: CalendarComponent }
];

@NgModule({
  declarations: [CalendarComponent],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(CalendarRoutes)
  ]
})
export class CalendarModule { }
