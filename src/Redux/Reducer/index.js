import { ADD_DATA } from '../constants';
const initial_state={
    text:''
}
export function rootReducer ( state = initial_state, action ) {
    switch ( action.type ) {
        case ADD_DATA :
            state.text = action.text
            return {...state}
        default:
            return {...state}
    }        
}