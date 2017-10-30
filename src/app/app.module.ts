import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { OneModule } from './one/one.module';
import { TwoModule } from './two/two.module';
import { DynamicDirective } from './dynamic.directive';
import { reducer } from './reducers';

@NgModule({
  declarations: [
    AppComponent,
    DynamicDirective
  ],
  imports: [
    OneModule,
    TwoModule,
    BrowserModule,
    StoreModule.forRoot(reducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
