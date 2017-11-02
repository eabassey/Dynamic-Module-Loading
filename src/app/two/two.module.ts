import { NgModule } from '@angular/core';
import { TwoFirstComponent } from './two-first/two-first.component';
import { TwoSecondComponent } from './two-second/two-second.component';
import { BaseDynamicModule } from '../dynamic-loader-lib/base-dynamic.module';


@NgModule({
    declarations: [TwoFirstComponent, TwoSecondComponent],
    imports: []
})
export class TwoModule implements BaseDynamicModule{

}