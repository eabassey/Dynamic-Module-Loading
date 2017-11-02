import { NgModule } from '@angular/core';
import { ModuleLoaderService } from './module-loader.service';
import { EffectsModule } from '@ngrx/effects';
import { ModulesEffect } from './_loader.effects';
import { StoreModule } from '@ngrx/store';
import { dynamicModuleReducer } from './_loader.reducer';


@NgModule({
    declarations:[],
    imports: [],
    providers: []
})
export class DynamicLoaderModule {

}