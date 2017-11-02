import { NgModule } from '@angular/core';
import { OneSecondComponent } from './one-second/one-second.component';
import { OneFirstComponent } from './one-first/one-first.component';
import { BaseDynamicModule } from '../base-dynamic.module';


@NgModule({
    declarations: [ OneSecondComponent, OneFirstComponent],
    imports: [],
    entryComponents: []
})
export class OneModule implements BaseDynamicModule {

}