import * as appReducer from '@redux/app.reducers';
import { createSelector, ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromReminder from './reminder.reducer';


export interface ReminderState {
    reminder: fromReminder.ReminderState;
}

export interface State extends appReducer.AppState {
    REMINDER: ReminderState;
}

export const reminderReducers: ActionReducerMap<ReminderState> = {
    reminder: fromReminder.ReminderReducer
};

export const selectReminderState = createFeatureSelector<State, ReminderState>('REMINDER');


export const selectReminder = createSelector(
    selectReminderState,
    (state: ReminderState) => state.reminder
);
