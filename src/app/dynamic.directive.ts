import { Directive, ViewContainerRef } from '@angular/core';


export class GenericHostDirective {
    constructor(public viewContainerRef: ViewContainerRef){ }
}
    

@Directive({
    selector: '[show-me]'
})
export class DynamicDirective implements GenericHostDirective {
    constructor(public viewContainerRef: ViewContainerRef){ }
}
    


