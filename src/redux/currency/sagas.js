import {call, all, put, takeEvery} from 'redux-saga/effects';
import {ROUTE_ENDPOINT} from "../../utils/route";
import {
    currencySuccess,
    currencyError,
    currencyResetStates,
} from "./actions";
import {CURRENCY_REQUESTING} from "./constants";

const currencyUrl = `${ROUTE_ENDPOINT}`;

const currencyApi = async () => {
    try {
      const response = await fetch(`${currencyUrl}/tickers/?start=100&limit=100`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      });
  
      // Check for server error
      if (response.status === 500) {
        throw new Error("Error interno del servidor");
      }
  
      const json = await response.json();
  
      // Check for errors in the JSON response
      if (json.hasOwnProperty('errors')) {
        throw json;
      }
  
      return json;
    } catch (error) {
      // Handle errors
      throw error;
    }
  };
  

function* currencyFlow() {
    try {
        const currencies = yield call(currencyApi);
        yield put(currencySuccess(currencies.data));
        yield put(currencyResetStates());
        
    } catch (error) {
       
        yield put(currencyError(error));
    }
}
// const currencyApi = (values) => {
//     let body = {
//         email: values.email,
//         password: values.password,
//     };
//     return fetch(`${currencyUrl}`, {
//         method: 'POST',
//         headers: {
//             'Accept': 'application/json',
//         },
//         body: JSON.stringify(body)
//     })
//         .then(response => {
//             // console.log(response.status)
//             if (response.status === 500)
//                 throw "Error interno del servidor";

//             return response.json()
//         })
//         .then(json => {
//         //   console.log(json)
//           if(json.hasOwnProperty('errors')){
//             throw json;
//         }

//         if (json.hasOwnProperty('token')){
//             // console.log("token")
//             return json;
//         }
//         throw json;
//         }).catch((error) => {
//             throw error;
//         })
// };

// function* currencyFlow(action) {
//     try {
//         const {values} = action;
//         const user = yield call(currencyApi, values);
//             yield put(currencySuccess());
//             yield put(userGetSuccess(user.data));
//             yield put(clientSet(user.token));
//             yield put(currencyResetStates());
        
//     } catch (error) {
       
//         yield put(currencyError(error));
//     }
// }


function* currencyWatcher() {
    yield all([
        takeEvery(CURRENCY_REQUESTING, currencyFlow),
    ])
}

export default currencyWatcher;
