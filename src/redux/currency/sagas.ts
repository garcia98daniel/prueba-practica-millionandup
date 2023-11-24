import { call, all, put, takeEvery } from 'redux-saga/effects';
import { ROUTE_ENDPOINT } from '../../utils/route';
import {
    currencySuccess,
    currencyError,

    currencyDetailSuccess,
    currencyDetailError,

    currencyResetStates,
} from './actions';
import { CURRENCY_DETAIL_REQUESTING, CURRENCY_REQUESTING } from './constants';
import { Currency } from '../../ts-types/custom.types';

const currencyUrl: string = `${ROUTE_ENDPOINT}`;

interface CurrencyApiResponse {
    data: Currency[];
}
interface CurrencyDetailsApiResponse {
    id: string;
    symbol: string;
    name: string;
    nameid: string;
    rank: number;
    price_usd: string;
    percent_change_24h: string;
    percent_change_1h: string;
    percent_change_7d: string;
    price_btc: string;
    market_cap_usd: string;
    volume24: number;
    volume24a: number;
    csupply: string;
    tsupply: string;
    msupply: string;
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

const currencyDetailApi = async (id:string): Promise<CurrencyDetailsApiResponse> => {
    try {
        const response = await fetch(`${currencyUrl}/ticker/?id=${id}`, {
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

function* currencyDetailFlow(action:any) {
    const {id} = action;
    try {
        const currencies: CurrencyDetailsApiResponse = yield call(currencyDetailApi, id);
        yield put(currencyDetailSuccess(currencies));
        yield put(currencyResetStates());
    } catch (error) {
        yield put(currencyDetailError(error));
    }
}

function* currencyWatcher() {
    yield all([
        takeEvery(CURRENCY_REQUESTING, currencyFlow),
        takeEvery(CURRENCY_DETAIL_REQUESTING, currencyDetailFlow),
    ]);
}

export default currencyWatcher;
