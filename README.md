# Dynamic Loading for Angular 4+ Modules and Components WITH NGRX Store and Effects

# Setup

-Make sure to install @ngrx/store and @ngrx/effects from npm if you wish to plug in the State management features.
-Run npm install --save 4sure/dynamic-loader
-Include 'DynamicLoaderModule' in main App Module.
- Include 'dynamicModuleReducer' in the ActionReducerMap for the 'StoreModule.forRoot()' function.
-Include 'ModulesEffect' in the 'EffectsModule.forRoot()' function.
- Import and include 'ModuleLoaderService' in the providers array of your App Module.

## Usage

-Create your directives and make sure each one of them implements 'GenericHostDirective'.
-Inject 'ViewContainerRef' from angular/core into the constructor of each of your directives as normal.

-Create a ViewChild reference of your directive in the component where it will be used.
-Place the directive on the DOM Element / Host
-Dispatch Actions as this:
   * this.store.dispatch(new moduleActions.LoadDyamicModule({module: TwoModule, host: this.host})); *


### Component

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


### Template

<div>
  <button (click)="loadOne()">Load One</button>
  <button (click)="loadTwo()">Load Two</button>
</div>

<ng-template show-me></ng-template>

<div talk-now></div>