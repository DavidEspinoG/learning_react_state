import { actionTypes } from "./UseReducer";
const reducer = (state, action) => {
    switch (action.type){
        case actionTypes.error: 
            return {
                ...state, 
                error: true,
                loading: false
            }
        case actionTypes.check: 
            return {
                ...state, 
                loading: true, 
                error: false
            }
        case actionTypes.confirm: 
            return {
                ...state, 
                loading: false, 
                confirmed: true,
            }
        case actionTypes.delete: 
            return {
                ...state, 
                deleted: true
            }
        case actionTypes.reset: 
            return {
                ...state, 
                confirmed: false, 
                value: '',
                deleted: false
            }
        case actionTypes.write: 
            return {
                ...state, 
                value: action.payload, 
                error: false,
            }
        default: 
            return {
                ...state
            }
    }
}
export { reducer }