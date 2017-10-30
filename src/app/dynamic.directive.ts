import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[show-me]'
})
export class DynamicDirective {
    constructor(public viewContainerRef: ViewContainerRef){}
}