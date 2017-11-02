import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import{ EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { OneModule } from './one/one.module';
import { TwoModule } from './two/two.module';
import { DynamicDirective } from './dynamic.directive';
import * as fromApp from './reducers';
import { ModulesEffect } from './effects';
import { ModuleLoaderService } from './module-loader.service';




@NgModule({
  declarations: [
    AppComponent,
    DynamicDirective
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(fromApp.dynamicModuleReducers),
    EffectsModule.forRoot([ModulesEffect])
  ],
  providers: [ModuleLoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
