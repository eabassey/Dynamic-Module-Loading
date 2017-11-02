import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import{ EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import {dynamicModuleReducer} from './dynamic-loader-lib/_loader.reducer';
import { ModuleLoaderService } from './dynamic-loader-lib/module-loader.service';
import { ModulesEffect } from './dynamic-loader-lib/_loader.effects';
import { DynamicLoaderModule } from './dynamic-loader-lib/dynamic-loader.module';
import { ShowMeDirective } from './show-me.directive';
import { TalkDirective } from './talk.directive';







@NgModule({
  declarations: [
    AppComponent,
    ShowMeDirective,
    TalkDirective
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(dynamicModuleReducer), 
    EffectsModule.forRoot([ModulesEffect]),
   DynamicLoaderModule
  ],
  providers: [ModuleLoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
