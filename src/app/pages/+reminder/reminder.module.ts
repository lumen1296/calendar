import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { ReminderComponent } from './reminder/reminder.component';
import { FormsModule } from '@angular/forms';
import { reminderReducers } from '@redux/reminder/reducers';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { ForeCastService } from './services/forecast.service';
import { HttpClientModule } from '@angular/common/http';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  declarations: [ReminderComponent],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature('REMINDER', reminderReducers),
    NgxMaterialTimepickerModule,
    HttpClientModule,
    MatExpansionModule,
  ],
  providers: [ForeCastService],
  exports: [ReminderComponent]
})
export class ReminderModule { }
