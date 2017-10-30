import { NgModule } from '@angular/core';
import { OneSecondComponent } from './one-second/one-second.component';
import { OneFirstComponent } from './one-first/one-first.component';


@NgModule({
    declarations: [ OneSecondComponent, OneFirstComponent],
    imports: [],
    entryComponents: [OneSecondComponent, OneFirstComponent]
})
export class OneModule {

}