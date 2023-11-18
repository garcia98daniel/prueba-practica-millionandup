import {all, fork} from 'redux-saga/effects';
//
import currencySagas from './currency/sagas';

function* IndexSagas() {
    yield all([
        fork(currencySagas),
    ]);
}
export default IndexSagas