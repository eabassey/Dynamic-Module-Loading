import * as ModuleActions from './actions';

export interface State {
    name: string;
    module: any;
}

const initialState: State = {
    name: 'Waiting...',
    module: null
}


export function reducer(state = initialState, action: ModuleActions.Actions) {
    switch(action.type) {
        
        case ModuleActions.LOAD_ONE: {
            return {...state, name: action.payload.name, module: action.payload.module }
        }
        
        case ModuleActions.LOAD_TWO: {
            return {...state, name: action.payload.name, module: action.payload.module }
        }

        default:
        return state;
    }
}