import axios from "axios";
import { useParams } from "react-router-dom";
import { call, put, takeEvery } from "redux-saga/effects";
import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUESTED,
  GET_DATA,
  GET_FAILURE,
  GET_DATA_REQUEST,
  ADD_NEW_POST,
  ADD_POST,
  UPT_POST,
  DLT_POST,
  GET_POST_BY_ID,
  SINGLE_POST,
  SINGLE_POST_FAILURE,
} from "../redux/action/Type";


function AddApi(data) {
  const token = localStorage.getItem('token')
  const user_id = localStorage.getItem('user_id')
  const body = {
   "post":{
      "title":data.title,
      "description":data.description,
      "user_id":user_id
    }
  }
  console.log("body",body);
  return axios.post('https://react-rails-api-demo.herokuapp.com/api/v1/posts',body,{headers:{Authorization:`${token}`}})
}

function UptAPI(id,data) {
  console.log("4534",id,data);
  const token = localStorage.getItem('token')
  const user_id = localStorage.getItem('user_id')

  const body = {
    "post":{
       "title":data.title,
       "description":data.description,
       "user_id":user_id
     }
   }
  
  return axios.put(`https://react-rails-api-demo.herokuapp.com/api/v1/posts/${id}`,body,{ headers:{ Authorization:`${token}`} })
}
function* UptPostData(action) { 
  console.log("acion234234",action);
  try {
    const response = yield call(UptAPI, action.payload,action.id);
    console.log(response.data)
    yield put({ type:UPT_POST, user: response.data });
  } catch (E) {
    yield put({ type: "ERROR", error: E.message });
  }}

function DeleteAPI(id) {
  const token = localStorage.getItem('token')
  return axios.delete(`https://react-rails-api-demo.herokuapp.com/api/v1/posts/${id}`,{headers: {Authorization:`${token}`} })
}

function* DeletePostData(action) {
  try {
    const response = yield call(DeleteAPI, action.payload);
    console.log(response.data);
    yield put({ type: "DELETE", payload : response.data });
  } catch (E) {
    yield put({ type: "ERROR", error:E.message });
}
}



function* AddPostData(action) {
  try {
    const response = yield call(AddApi, action.payload);
    console.log(response.data)
    yield put({ type: ADD_POST, user: response.data });
  } catch (E) {
    yield put({ type: "ERROR", error: E.message });
  }}

function GetAPI(data) {
  const body = {
    user: {
      email: data.email,
      password: data.password,
    },
  };
  return axios.request({
    method: "post",
    url: "https://react-rails-api-demo.herokuapp.com/api/v1/signin",
    data: body,
  });
}

export const SinglePostApi = (id) =>{
const token = localStorage.getItem('token');
console.log("id and token checked",id, token);
return axios.get(`https://react-rails-api-demo.herokuapp.com/api/v1/posts/${id}`,{headers:{Authorization:`${token}`}})
};


export const GetData = () => {
  const Token = localStorage.getItem("token");
  console.log("object111",Token);
  return axios.get("https://react-rails-api-demo.herokuapp.com/api/v1/posts", { headers: { Authorization: `Bearer ${Token}` }});
};

function* singlepostdata(action) {
  try{
    const response_data = yield call(SinglePostApi, action.payload);
    console.log("single post hai",response_data);
    yield put({ type:SINGLE_POST, payload:response_data.data})
  } catch(e) {
    yield put({type:"ERROR", error:e.message})
  }
}
function* GetUser(action) {
  console.log(67,action);
  try {
    const response = yield call(GetData, action.payload);
    console.log("getuser", response.data);
    yield put({ type: GET_DATA, payload : response.data });
  } catch (E) {
    yield put({ type: GET_FAILURE, error:E.message });
  }
}
function* FetchUser(action) {
  try {
    const response = yield call(GetAPI, action.payload);
    localStorage.setItem("user-info", JSON.stringify(response.data));
    localStorage.setItem("token",(response.data.token));
    localStorage.setItem("user_id",JSON.stringify(response.data.user.id));
    yield put({ type: LOGIN_SUCCESS, user: response.data });
  } catch (E) {
    yield put({ type: LOGIN_FAILURE, error: E.message });
  }
}



function* userSaga() {
  yield takeEvery(LOGIN_REQUESTED, FetchUser);
  yield takeEvery(GET_DATA_REQUEST, GetUser);
  yield takeEvery(ADD_NEW_POST, AddPostData);
  yield takeEvery(UPT_POST, UptPostData);
  yield takeEvery(DLT_POST, DeletePostData);
  yield takeEvery(GET_POST_BY_ID, singlepostdata);
}
export default userSaga;
