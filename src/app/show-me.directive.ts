import { Directive, ViewContainerRef } from '@angular/core';
import { GenericHostDirective } from './dynamic-loader-lib/generic-host.directive';




    

@Directive({
    selector: '[show-me]'
})
export class ShowMeDirective implements GenericHostDirective {
    constructor(public viewContainerRef: ViewContainerRef){ }
}
    


