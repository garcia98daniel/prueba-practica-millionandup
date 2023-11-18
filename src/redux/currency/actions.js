import {
    CURRENCY_ERROR,
    CURRENCY_REQUESTING, CURRENCY_RESET_STATES, 
    CURRENCY_SUCCESS,
} from "./constants";

export const currencyRequesting = (values) => ({
    type: CURRENCY_REQUESTING,
    values,
});

export const currencySuccess = () => ({
    type: CURRENCY_SUCCESS,
});

export const currencyError = (error) => ({
    type: CURRENCY_ERROR,
    error,
});


export const currencyResetStates = () => ({
    type: CURRENCY_RESET_STATES,
});