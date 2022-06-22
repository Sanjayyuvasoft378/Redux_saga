import  { all } from 'redux-saga/effects'
import userSaga from './LoginSaga'
export default function* RootSaga() {
    yield all([
        userSaga()
    ])
}