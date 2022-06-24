import {LOGIN_SUCCESS,LOGIN_FAILURE, GET_DATA, 
    GET_FAILURE,UPT_POST, ADD_POST, DLT_POST, SINGLE_POST} 
     from '../action/Type';
const userData = {
    user :[],
    dashboard:[]
}
const LoginReducer = (state=userData,action) => {
    console.log("ddsssdd",state);
    switch(action.type){
        case LOGIN_SUCCESS:
            return {
                ...state,
            user : action.user
            }

        case LOGIN_FAILURE:
            return {
                ...state,
                error:action.error
            }
        
        case GET_DATA:
            return {
                ...state,
                dashboard:action.payload
            }
        case GET_FAILURE:
            return {
                ...state,
                error:action.error

            }

        case ADD_POST:
            return {
                ...state,
                user:action.payload                
            }
        case UPT_POST:
            return {
                ...state,
                user:action.payload
            }

        case DLT_POST:
            return {
                ...state,
                user:action.paylpad
            }
        case "DELETE":
            return {
                ...state,
                user:action.payload
            }

        case SINGLE_POST:
            return {
                ...state,
                dashboard:action.payload
            }
        // case SINGLE_POST:
        //     return {
        //         ...state,
        //         dashboard:action.payload
        //     }
            default:
                return state;
        }
    }
export default LoginReducer

