import { NgModule } from '@angular/core';
import { TwoFirstComponent } from './two-first/two-first.component';
import { TwoSecondComponent } from './two-second/two-second.component';

@NgModule({
    declarations: [TwoFirstComponent, TwoSecondComponent],
    imports: [],
    //entryComponents: [TwoFirstComponent, TwoSecondComponent]
})
export class TwoModule {

}