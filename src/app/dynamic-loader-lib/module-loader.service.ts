import { Injectable, Compiler, ViewChild, Directive } from '@angular/core';
import { ModuleLoaderState } from './_loader.reducer';
import { Store } from '@ngrx/store';
import { GenericHostDirective } from './generic-host.directive';


@Injectable()
export class ModuleLoaderService {


    constructor(
              private compiler: Compiler, 
              private store: Store<ModuleLoaderState>
              ){}

    loadModule(module: any, host: GenericHostDirective) {
        //get reference to the factory for creating module with its components
        const moduleWithComponentFactories = this.compiler.compileModuleAndAllComponentsAsync(module);
    
        //access the factory (can get either component or module factory)
        moduleWithComponentFactories.then(factory => {
    
          //access component factory
           const componentFactories = factory.componentFactories;
           
           //reference viewContainerRef of directive
           const viewContainerRef = host.viewContainerRef;
           
          //clear existing components
           viewContainerRef.clear();
    
           //loop through each component factory to create components
            componentFactories.forEach(factory => {
            viewContainerRef.createComponent(factory);
          })
        });
      }
}