import {call, all, put, takeEvery} from 'redux-saga/effects';
import {ROUTE_ENDPOINT} from "../../utils/route";
import {
    currencySuccess,
    currencyError,
    currencyFacebookSuccess,
    currencyFacebookError,
    currencyResetStates,
} from "./actions";
import {CURRENCY_REQUESTING} from "./constants";
import {clientSet} from "../../client/actions";
import {userGetSuccess} from "../user/actions";

const currencyUrl = `${ROUTE_ENDPOINT}/ticker/?id=80`;

const currencyApi = (values) => {
    let body = {
        email: values.email,
        password: values.password,
    };
    return fetch(`${currencyUrl}`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
        },
        body: JSON.stringify(body)
    })
        .then(response => {
            // console.log(response.status)
            if (response.status === 500)
                throw "Error interno del servidor";

            return response.json()
        })
        .then(json => {
        //   console.log(json)
          if(json.hasOwnProperty('errors')){
            throw json;
        }

        if (json.hasOwnProperty('token')){
            // console.log("token")
            return json;
        }
        throw json;
        }).catch((error) => {
            throw error;
        })
};

function* currencyFlow(action) {
    try {
        const {values} = action;
        const user = yield call(currencyApi, values);
            yield put(currencySuccess());
            yield put(userGetSuccess(user.data));
            yield put(clientSet(user.token));
            yield put(currencyResetStates());
        
    } catch (error) {
       
        // yield put(Error(error));
    }
}


function* currencyWatcher() {
    yield all([
        takeEvery(CURRENCY_REQUESTING, currencyFlow),
    ])
}

export default currencyWatcher;
