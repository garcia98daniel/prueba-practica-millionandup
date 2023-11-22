import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import Hero from "../../src/components/Hero/index.tsx";

// Mocking the react-i18next library
jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: key => key }),
}));

test('renders hero component', () => {
  const { getByText } = render(<Hero />);
  
  // Replace the following with your actual text content from translations
  expect(getByText('hero_txt_1')).toBeInTheDocument();
  expect(getByText('hero_txt_2')).toBeInTheDocument();
  expect(getByText('hero_txt_3')).toBeInTheDocument();
});