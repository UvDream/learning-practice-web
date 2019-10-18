/*
 * @Author: wangzhongjie
 * @Date: 2019-08-13 14:53:00
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-08-13 15:07:16
 * @Description:sagas
 * @Email: UvDream@163.com
 */
import { takeEvery, put } from "redux-saga/effects";
import { GET_MY_LIST } from "./actionTypes";
import axios from "axios";
import { getListAction } from "./actionCreates";
function* mySagas() {
  yield takeEvery(GET_MY_LIST, getList);
}
function* getList() {
  //   axios
  //     .get(
  //       "https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList"
  //     )
  //     .then(res => {
  //       const data = res.data;
  //       const action = getListAction(data);
  //       put(action);
  //     });
  const res = yield axios.get(
    "https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList"
  );
  const action = getListAction(res.data);
  yield put(action);
}
export default mySagas;
