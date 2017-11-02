import { Component, NgModuleRef, Compiler, Injector, ComponentFactory, ViewContainerRef, ViewChild, NgModule } from '@angular/core';
import { OneModule } from './one/one.module';
import { DynamicDirective } from './dynamic.directive';
import { BaseTwoComponent } from './two/base-two.component';
import { TwoModule } from './two/two.module';
//import { State } from './reducers';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/map';
import * as fromApp from './reducers';
import * as moduleActions from './actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
   @ViewChild(DynamicDirective) host: DynamicDirective;

  constructor(
          private compiler: Compiler, 
          private store: Store<fromApp.State>
        ){}
  

  loadOne() {
   this.store.dispatch(new moduleActions.LoadDyamicModule({module: OneModule, host: this.host}));
  }

  loadTwo() {
    this.store.dispatch(new moduleActions.LoadDyamicModule({module: TwoModule, host: this.host}));
  }

}


