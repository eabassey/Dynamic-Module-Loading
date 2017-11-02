import * as fromApp from './_loader.actions';
import { BaseDynamicModule } from './base-dynamic.module';
import { GenericHostDirective } from './generic-host.directive';


export interface ModuleLoaderState {
 module: BaseDynamicModule;
 host: GenericHostDirective;
}


const initialState: ModuleLoaderState = {
    module: null,
    host: null
}


export function dynamicModuleReducer (state: ModuleLoaderState = initialState, action: fromApp.LoadDyamicModule): ModuleLoaderState {
    switch (action.type) {

        default:
        return state;
    }
}