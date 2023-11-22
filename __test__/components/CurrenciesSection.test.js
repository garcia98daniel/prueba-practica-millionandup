// CurrenciesSection.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import CurrenciesSection from "../../src/components/CurrenciesSection/index.tsx";

// Mocking the react-i18next library
jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: key => key }),
}));

test('renders currencies section component', () => {
  const { getByText, getByPlaceholderText } = render(<CurrenciesSection />);

  // Replace the following with your actual text content from translations
  expect(getByText('currencies_section_txt_1')).toBeInTheDocument();
  expect(getByText('currencies_section_txt_2')).toBeInTheDocument();

  // Replace the following with your actual placeholder text from translations
  const searchInput = getByPlaceholderText('currenciesTable_search_currency_input');
  expect(searchInput).toBeInTheDocument();

  // Test input change
  fireEvent.change(searchInput, { target: { value: 'USD' } });
  expect(searchInput.value).toBe('USD');
});

// You may want to write more tests to cover other aspects of your component
// For example, testing the CurrenciesTable component with different props.
