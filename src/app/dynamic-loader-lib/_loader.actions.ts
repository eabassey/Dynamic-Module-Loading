import { Action } from '@ngrx/store';
import { BaseDynamicModule } from './base-dynamic.module';
import { ModulePayload } from './module-payload.model';


export const LOAD_DYNAMIC_MODULE = 'Load Dynamic Module';

export class LoadDyamicModule implements Action {
    readonly type: string = LOAD_DYNAMIC_MODULE ;
    constructor(public payload: ModulePayload){}
}


