import { Component, NgModuleRef, Compiler, Injector, ComponentFactory, ViewContainerRef, ViewChild, NgModule } from '@angular/core';
import { OneModule } from './one/one.module';
import { BaseComponent } from './BaseComponent';
import { DynamicDirective } from './dynamic.directive';
import { BaseTwoComponent } from './two/base-two.component';
import { TwoModule } from './two/two.module';
import { State } from './reducers';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  
  moduleArray = [
    { name: 'Load One', module: OneModule },
    { name: 'Load two', module: TwoModule }
  ]
  
   @ViewChild(DynamicDirective) host: DynamicDirective;

  constructor(private compiler: Compiler){}

  loadModule(module: any) {
    //get reference to the factory for creating module with its components
    const moduleWithComponentFactories = this.compiler.compileModuleAndAllComponentsAsync(module);

    //access the factory (can get either component or module factory)
    moduleWithComponentFactories.then(factory => {

      //access component factory
       const componentFactories = factory.componentFactories;
       
       //reference viewContainerRef of directive
       const viewContainerRef = this.host.viewContainerRef;
       
      //clear existing components
       viewContainerRef.clear();

       //loop through each component factory to create components
        componentFactories.forEach(factory => {
        viewContainerRef.createComponent(factory);
      })
    });
  }

  /// For store
  loadOne() {
   
  }

  loadTwo() {

  }

}
