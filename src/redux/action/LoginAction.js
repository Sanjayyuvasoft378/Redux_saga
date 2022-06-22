import { GET_DATA, LOGIN_REQUESTED} from './Type.js'
export const GetLogin = (data) => {
    console.log("Login Action Called",data);

return {
    type:LOGIN_REQUESTED,
    payload:data
}
}

export const GetData = () =>{
return {
    type: GET_DATA,
}
}

