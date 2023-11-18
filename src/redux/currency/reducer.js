import {
    CURRENCY_REQUESTING, 
    CURRENCY_ERROR, 
    CURRENCY_SUCCESS,
    CURRENCY_RESET_STATES,
} from "./constants";

const initialState = {
    requesting: false,
    success: false,
    error: '',
    currency:[],
    
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CURRENCY_REQUESTING:
            return {
                ...state,
                requesting: true,
                success: false,
                error: '',
            };
        case CURRENCY_SUCCESS:
            return {
                ...state,
                requesting: false,
                success: true,
            };
        case CURRENCY_ERROR:
            return {
                ...state,
                requesting: false,
                error: action.error,
            };
            case CURRENCY_SHOW_HIDDEN_MODAL:
            return {
                ...state,
                modal_open: action.value,
            };
            case CURRENCY_CHANGE_FORM:
                return {
                    ...state,
                    values: {...state.values, [action.key]: action.value}
                };
            case CURRENCY_RESET_STATES:
                return {
                    ...state,
                    requesting: false,
                    success: false,
                    error: '',
                    currency:[],
                };
                    default:
            return state;
    }
};

export default reducer;