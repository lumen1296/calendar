import {
    ActionReducerMap,
    createSelector,
    createFeatureSelector,
    ActionReducer,
    MetaReducer,
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromRouter from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';


export interface AppState {
    router: fromRouter.RouterReducerState;
}

export const appReducers: ActionReducerMap<AppState> = {
    router: fromRouter.routerReducer
};


export function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
    return (state: AppState, action: any): any => {
        const result = reducer(state, action);
        console.groupCollapsed(action.type);
        console.log('prev state', state);
        console.log('action', action);
        console.log('next state', result);
        console.groupEnd();

        return result;
    };
}


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [logger, storeFreeze] : [];



export const getStateRouter = createFeatureSelector<AppState>('router');
export const getRouter = createSelector(
    getStateRouter,
    (state: any) => {
        if (state) {
            return state;
        } else {
            return null;
        }
    }
);
