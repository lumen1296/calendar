import { Action } from '@ngrx/store';
import { Reminder } from '../models/reminder.model';


export enum ReminderActionTypes {
    saveReminder = '[Calendar] Add reminder',
}


export class SaveReminder implements Action {
    readonly type = ReminderActionTypes.saveReminder;
    constructor(public payload: Reminder[]) { }
}


export type ReminderActionsUnion =
    SaveReminder;

