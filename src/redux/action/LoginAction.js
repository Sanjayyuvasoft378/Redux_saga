import { LOGIN_REQUESTED, GET_DATA_REQUEST, ADD_NEW_POST, UPT_POST, DLT_POST, GET_POST_BY_ID} from './Type.js'
export const GetLogin = (data) => {
    console.log("Login Action Called",data);

return {
    type:LOGIN_REQUESTED,
    payload:data
}
}
export const GetData = () =>{
return {
    type: GET_DATA_REQUEST,
}
}
export const AddPost = (data) =>{
    console.log("add action",data);
    return {
        type:ADD_NEW_POST,
        payload:data


    }
}
export const UpdatePost = (data,id) => {
    console.log("update post ",data,id);
    return {
        type:UPT_POST,
        payload: data,id
    }
}

export const deletePost = (id) =>{
    return {
        type:DLT_POST,
        payload : id
        
    }
}

export const getbyid = (id) => {
    console.log("getbyiudhai",id);
    return {
        type:GET_POST_BY_ID,
        payload:id
    }
}



