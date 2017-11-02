import { BaseDynamicModule } from './base-dynamic.module';
import { GenericHostDirective } from './generic-host.directive';



export interface ModulePayload {
    module:BaseDynamicModule; 
    host: GenericHostDirective;
}


