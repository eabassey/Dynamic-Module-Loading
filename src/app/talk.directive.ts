import { Directive, ViewContainerRef } from '@angular/core';
import { GenericHostDirective } from './dynamic-loader-lib/generic-host.directive';


@Directive({
    selector: '[talk-now]'
})
export class TalkDirective implements GenericHostDirective {
    constructor(public viewContainerRef: ViewContainerRef){ }
}
   