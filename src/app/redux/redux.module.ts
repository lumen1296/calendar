import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'; 
import { appReducers } from './app.reducers';





@NgModule({
  imports: [
    StoreModule.forRoot(appReducers),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      name: 'NgRx Calendar',
      maxAge: 25,
    }),
    EffectsModule.forRoot([]),
  ],
  declarations: []
})
export class ReduxModule { }

