import {LOGIN_SUCCESS,LOGIN_FAILURE, GET_DATA, GET_FAILURE, GET_DATA_REQUEST}  from '../action/Type';
const userData = {
    user :[],
    dashboard:[]
}
const LoginReducer = (state=userData,action) => {
    switch(action.type){
        case LOGIN_SUCCESS:
            return {
                ...state,
            loading:false,
            error:null,
            user : action.user
            }

        case LOGIN_FAILURE:
            return {
                ...state,
                loading:false,
                error:action.error
            }
        
        case GET_DATA:
            return {
                ...state,
                loading:false,
                dashboard:action.payload
            }
        case GET_FAILURE:
            return {
                ...state,
                loading:false,
                error:action.error

            }
        // case GET_DATA_REQUEST:
        //     return {
        //         ...state,
        //         loading:false
        //     }
            default:
                return state;
        }
    }
export default LoginReducer

