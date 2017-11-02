import { Action } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { GenericHostDirective } from './dynamic.directive';
import { BaseDynamicModule } from './base-dynamic.module';


export const LOAD_DYNAMIC_MODULE = 'Load Dynamic Module';




export class LoadDyamicModule implements Action {
    readonly type: string = LOAD_DYNAMIC_MODULE ;
    constructor(public payload: {module: BaseDynamicModule, host: GenericHostDirective}){}
}


