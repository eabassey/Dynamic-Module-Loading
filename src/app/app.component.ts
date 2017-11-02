import { Component, ViewContainerRef, ViewChild } from '@angular/core';
import { OneModule } from './one/one.module';
import { BaseTwoComponent } from './two/base-two.component';
import { TwoModule } from './two/two.module';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/map';
import * as fromModuleLoader from './dynamic-loader-lib/_loader.reducer';
import * as moduleActions from './dynamic-loader-lib/_loader.actions';
import { ShowMeDirective } from './show-me.directive';
import { TalkDirective } from './talk.directive';
import { ModulePayload } from './dynamic-loader-lib/module-payload.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
   @ViewChild(ShowMeDirective) host: ShowMeDirective;

   @ViewChild(TalkDirective) talkHost: TalkDirective;

  constructor(
          private store: Store<fromModuleLoader.ModuleLoaderState>
        ){}
  

  loadOne() {
   this.store.dispatch(new moduleActions.LoadDyamicModule({module: TwoModule, host: this.host}));
   this.store.dispatch(new moduleActions.LoadDyamicModule({module: OneModule, host: this.talkHost}));
  }

  loadTwo() {
    this.store.dispatch(new moduleActions.LoadDyamicModule({module: OneModule, host: this.host}));
    this.store.dispatch(new moduleActions.LoadDyamicModule({module: TwoModule, host: this.talkHost}));
  }


  

}


