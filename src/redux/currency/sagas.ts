import { call, all, put, takeEvery } from 'redux-saga/effects';
import { ROUTE_ENDPOINT } from '../../utils/route';
import {
    currencySuccess,
    currencyError,
    currencyResetStates,
} from './actions';
import { CURRENCY_REQUESTING } from './constants';

const currencyUrl: string = `${ROUTE_ENDPOINT}`;

interface CurrencyApiResponse {
    data: any;
}

// this function fetch the currencies
const currencyApi = async (): Promise<CurrencyApiResponse> => {
    try {
        const response = await fetch(`${currencyUrl}/tickers/?start=1&limit=100`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            },
        });

        // Check for server error
        if (response.status === 500) {
            throw new Error('Error interno del servidor');
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
        const currencies: CurrencyApiResponse = yield call(currencyApi);
        yield put(currencySuccess(currencies.data));
        yield put(currencyResetStates());
    } catch (error) {
        yield put(currencyError(error));
    }
}

function* currencyWatcher() {
    yield all([
        takeEvery(CURRENCY_REQUESTING, currencyFlow),
    ]);
}

export default currencyWatcher;
