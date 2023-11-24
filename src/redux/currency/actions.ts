import {
  Currency,
  CurrencyDetailErrorAction,
  CurrencyDetailRequestingAction,
  CurrencyDetailSuccessAction,
  CurrencyErrorAction,
  CurrencyRequestingAction,
  CurrencyResetStatesAction,
  CurrencySuccessAction,
} from "../../ts-types/custom.types";

import {
  CURRENCY_DETAIL_ERROR,
  CURRENCY_DETAIL_REQUESTING,
  CURRENCY_DETAIL_SUCCESS,

  CURRENCY_ERROR,
  CURRENCY_REQUESTING,
  CURRENCY_RESET_STATES,
  CURRENCY_SUCCESS,
} from "./constants";


export const currencyRequesting = (): CurrencyRequestingAction => ({
  type: CURRENCY_REQUESTING,
});

export const currencySuccess = ( currencies: Currency[] ): CurrencySuccessAction => ({
  type: CURRENCY_SUCCESS,
  currencies,
});

export const currencyError = (error: any): CurrencyErrorAction => ({
  type: CURRENCY_ERROR,
  error,
});

//currency detail
export const currencyDetailRequesting = (id: string): CurrencyDetailRequestingAction => ({
  type: CURRENCY_DETAIL_REQUESTING,
  id
});

export const currencyDetailSuccess = ( currencies: Currency ): CurrencyDetailSuccessAction => ({
  type: CURRENCY_DETAIL_SUCCESS,
  currencies,
});

export const currencyDetailError = (error: any): CurrencyDetailErrorAction => ({
  type: CURRENCY_DETAIL_ERROR,
  error,
});

export const currencyResetStates = (): CurrencyResetStatesAction => ({
  type: CURRENCY_RESET_STATES,
});
