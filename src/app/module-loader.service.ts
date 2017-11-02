import { Injectable, Compiler, ViewChild, Directive } from '@angular/core';
import { DynamicDirective, GenericHostDirective } from './dynamic.directive';
import { OneModule } from './one/one.module';
import { TwoModule } from './two/two.module';
import { State } from './reducers';
import { Store } from '@ngrx/store';


@Injectable()
export class ModuleLoaderService {

   // @ViewChild(DynamicDirective) host: DynamicDirective;
    
    // modulesToLoad: any = {
    //     'oneModule': OneModule,
    //     'twoModule': TwoModule
    //   };
    constructor(private compiler: Compiler, private store: Store<State>){}



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

    // dispatchModuleDynamically<T>(module, host) {
    //     this.store.dispatch(new(): T)
    // }
}