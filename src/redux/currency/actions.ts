import {
  Currency,
  CurrencyErrorAction,
  CurrencyRequestingAction,
  CurrencyResetStatesAction,
  CurrencySuccessAction,
} from "../../ts-types/custom.types";

import {
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

export const currencyResetStates = (): CurrencyResetStatesAction => ({
  type: CURRENCY_RESET_STATES,
});
