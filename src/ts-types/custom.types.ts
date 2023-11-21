import {
  CURRENCY_ERROR,
  CURRENCY_REQUESTING,
  CURRENCY_RESET_STATES,
  CURRENCY_SUCCESS,
}  from "../redux/currency/constants";

export interface ICurrencyState{
  currencyReducer: {
    requesting: boolean,
    success: boolean,
    error: string,
    currency: Currency[],
  }
}

export interface CurrencyReducerInitialState {
  requesting: boolean;
  success: boolean;
  error: string;
  currency: any[]; // Reemplaza 'any[]' con el tipo correcto de 'currency'
}

export interface Currency {
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


// these are the actions 
export interface CurrencyRequestingAction {
  type: typeof CURRENCY_REQUESTING;
}

export interface CurrencySuccessAction {
  type: typeof CURRENCY_SUCCESS;
  currencies: Currency[]; // Reemplaza 'any[]' con el tipo correcto de 'currencies'
}

export interface CurrencyErrorAction {
  type: typeof CURRENCY_ERROR;
  error: any; // Reemplaza 'any' con el tipo correcto de 'error'
}

export interface CurrencyResetStatesAction {
  type: typeof CURRENCY_RESET_STATES;
}
