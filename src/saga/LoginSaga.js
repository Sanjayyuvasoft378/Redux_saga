import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUESTED,
  GET_DATA,
  GET_FAILURE,
  GET_DATA_REQUEST,
} from "../redux/action/Type";

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

export const GetData = () => {
  const Token = localStorage.getItem("token");
  return axios.get("https://react-rails-api-demo.herokuapp.com/api/v1/posts/", {
    headers: { Authorization: `Bearer ${Token}` },
  });
};
function* GetUser(action) {
  try {
    const response = yield call(GetData, action.payload);
    console.log("getuser", response.data);
    yield put({ type: GET_DATA, message: response.data });
  } catch (E) {
    yield put({ type: GET_FAILURE });
  }
}
function* FetchUser(action) {
  try {
    const response = yield call(GetAPI, action.payload);
    console.log("response hai ye",response.data); 
    localStorage.setItem("user-info", JSON.stringify(response.data));
    localStorage.setItem("token",(response.data.token));
    yield put({ type: LOGIN_SUCCESS, user: response.data });
  } catch (E) {
    yield put({ type: LOGIN_FAILURE, error: E.message });
  }
}
function* userSaga() {
  yield takeEvery(LOGIN_REQUESTED, FetchUser);
  yield takeEvery(GET_DATA_REQUEST, GetUser);
}
export default userSaga;
