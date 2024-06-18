// src/redux/sagas/applicationSaga.js
import { takeEvery, put } from 'redux-saga/effects';

function* submitApplication(action) {
  try {
    yield put({ type: 'SUBMIT_APPLICATION', payload: action.payload });
    // Display toast notification
    alert('Application submitted successfully!');
  } catch (error) {
    console.error(error);
  }
}

export default function* applicationSaga() {
  yield takeEvery('SUBMIT_APPLICATION_REQUEST', submitApplication);
}
