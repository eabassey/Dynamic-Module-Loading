import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromApp from './actions';
import { AppComponent } from './app.component';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { ModuleLoaderService } from './module-loader.service';
import { LoadDyamicModule } from './actions';

@Injectable()
export class ModulesEffect {

    constructor(private actions: Actions, private moduleLoaderService: ModuleLoaderService){}

    @Effect({dispatch: false}) load$ = this.actions.ofType<fromApp.LoadDyamicModule>(fromApp.LOAD_DYNAMIC_MODULE)
                                            .map(action => {
                                                const host = action.payload.host;
                                                this.moduleLoaderService.loadModule(action.payload.module, host);
                                            });
}