import * as fromApp from './actions';
import { OneModule } from './one/one.module';
import { NgModule } from '@angular/core';
import { BaseDynamicModule } from './base-dynamic.module';

export interface State {
 module: BaseDynamicModule;
 host: any;
}


export const dynamicModuleReducers = {
 mod: reducer
}

const initialState: State = {
    module: null,
    host: null
}


export function reducer (state: State = initialState, action: fromApp.LoadDyamicModule): State {
    switch (action.type) {

        default:
        return state;
    }
}