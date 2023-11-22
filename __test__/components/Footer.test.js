// Footer.test.js
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import Footer from "../../src/components/Footer/index.tsx";

// Mocking the react-i18next library
jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: key => key }),
}));

test('renders footer component', () => {
  const { getByText, getByAltText } = render(<Footer />);

  // Replace the following with your actual text content from translations
  expect(getByText('Daniel Garcia | Profesional Dev')).toBeInTheDocument();
  expect(getByText('Mi Linkedin')).toBeInTheDocument();
  expect(getByText('Mi Git hub')).toBeInTheDocument();

  // Ensure that the image is rendered with the correct alt text
  expect(getByAltText('Logo de Million and up 2023')).toBeInTheDocument();
});
