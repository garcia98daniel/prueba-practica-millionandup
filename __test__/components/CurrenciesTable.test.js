// CurrenciesTable.test.js
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'; // install it using `npm install --save-dev redux-mock-store`
import CurrenciesTable from "../../src/components/Hero/index.tsx";

// Mocking the react-i18next library
jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: key => key }),
}));

// Mocking the useDispatch hook
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}));

const mockStore = configureStore([]);

// Mocking the useSelector hook
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

test('renders currencies table component', () => {
  // Mocking the state
  const initialState = {
    currencyReducer: {
      requesting: false,
      success: true,
      error: null,
      currency: [
        {
          id: '1',
          symbol: 'BTC',
          name: 'Bitcoin',
          price_usd: '50000',
          percent_change_24h: '2',
          percent_change_1h: '1',
          percent_change_7d: '3',
          market_cap_usd: '1000000000',
          volume24: '5000000',
          csupply: '18000000',
        },
        // Add more mock currencies if needed
      ],
    },
  };

  const store = mockStore(initialState);

  // Mocking the useSelector hook to return the mock state
  useSelector.mockImplementation((selector) => selector(initialState));

  const { getByText, getByPlaceholderText } = render(
    <Provider store={store}>
      <CurrenciesTable filterText="" />
    </Provider>
  );

  // Replace the following with your actual text content from translations
  expect(getByText('currenciesTable_header_symbol_txt')).toBeInTheDocument();
  expect(getByText('currenciesTable_header_name_txt')).toBeInTheDocument();
  expect(getByText('currenciesTable_header_priceUSD_txt')).toBeInTheDocument();
  expect(getByText('currenciesTable_header_24h_txt')).toBeInTheDocument();
  expect(getByText('currenciesTable_header_1h_txt')).toBeInTheDocument();
  expect(getByText('currenciesTable_header_7h_txt')).toBeInTheDocument();
  expect(getByText('currenciesTable_header_marketCap_txt')).toBeInTheDocument();
  expect(getByText('currenciesTable_header_volumen24h_txt')).toBeInTheDocument();
  expect(getByText('currenciesTable_header_supply_txt')).toBeInTheDocument();

  // Test that the currency data is rendered
  expect(getByText('BTC')).toBeInTheDocument();
  expect(getByText('Bitcoin')).toBeInTheDocument();
  expect(getByText('50000')).toBeInTheDocument();
  expect(getByText('2')).toBeInTheDocument();
  expect(getByText('1')).toBeInTheDocument();
  expect(getByText('3')).toBeInTheDocument();
  expect(getByText('1000000000')).toBeInTheDocument();
  expect(getByText('5000000')).toBeInTheDocument();
  expect(getByText('18000000')).toBeInTheDocument();
});
