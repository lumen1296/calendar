import { reminderActions } from '../actions';
import { Reminder } from '../models/reminder.model';


export interface ReminderState {
    reminder: Reminder[];
    error?: any;
}

const estadoInicial: ReminderState = {
    reminder: []
};

export function ReminderReducer(state = estadoInicial, action: reminderActions.ReminderActionsUnion): ReminderState {
    switch (action.type) {
        case reminderActions.ReminderActionTypes.saveReminder:
            return {
                ...state, reminder: [...action.payload]
            };
        default:
            return state;
    }
}
