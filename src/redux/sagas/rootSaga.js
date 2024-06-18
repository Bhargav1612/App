// // src/redux/sagas/index.js
// import { all } from 'redux-saga/effects';
// import authSaga from './authSaga';

// export default function* rootSaga() {
//   yield all([
//     authSaga(),
  
//   ]);
// }
import { all } from 'redux-saga/effects';
import authSaga from './authSaga';

export default function* rootSaga() {
  yield all([
    authSaga(),
  ]);
}
