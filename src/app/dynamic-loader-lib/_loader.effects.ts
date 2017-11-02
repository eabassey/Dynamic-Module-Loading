import { Actions, Effect } from '@ngrx/effects';
import * as fromApp from './_loader.actions';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { ModuleLoaderService } from './module-loader.service';
import { LoadDyamicModule } from './_loader.actions';

@Injectable()
export class ModulesEffect {

    constructor(private actions: Actions, private moduleLoaderService: ModuleLoaderService){}

    @Effect({dispatch: false}) load$ = this.actions.ofType<fromApp.LoadDyamicModule>(fromApp.LOAD_DYNAMIC_MODULE)
                                            .map(action => {
                                                const host = action.payload.host;
                                                this.moduleLoaderService.loadModule(action.payload.module, host);
                                            });
}