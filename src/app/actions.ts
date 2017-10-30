import { Action } from "@ngrx/store";



export const LOAD_ONE = '[Module] Load One';
export const LOAD_TWO = '[Module] Load Two';


export class LoadOne implements Action {
    readonly type = LOAD_ONE;
    constructor(public payload: { name: string, module: any }){}
}

export class LoadTwo implements Action {
    readonly type = LOAD_TWO;
    constructor(public payload: { name: string, module: any }){}
}



export type Actions = LoadOne | LoadTwo;
