// Nav.test.js
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import { useRouter } from 'next/router';
import Nav from "../../src/components/Nav/index.tsx";

// Mocking the react-i18next library
jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: key => key, i18n: { language: 'en', changeLanguage: jest.fn() } }),
}));

// Mocking the useRouter hook
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('Nav component', () => {
  it('renders without errors', () => {
    useRouter.mockImplementation(() => ({
      push: jest.fn(),
    }));

    render(<Nav />);

    // Replace the following with your actual text content from translations
    expect(screen.getByText('Our website')).toBeInTheDocument();

    // Ensure that the select element is present
    expect(screen.getByLabelText('Select Language')).toBeInTheDocument();

    // Ensure that the image is rendered with the correct alt text
    expect(screen.getByAltText('Logo de Million and up 2023')).toBeInTheDocument();
  });

  it('handles language change', () => {
    const pushMock = jest.fn();
    useRouter.mockImplementation(() => ({
      push: pushMock,
    }));

    render(<Nav />);

    // Find and select the language dropdown
    const languageSelect = screen.getByLabelText('Select Language');
    fireEvent.change(languageSelect, { target: { value: 'es' } });

    // Ensure that the changeLanguage function is called with the correct language code
    expect(useRouter().push).toHaveBeenCalledWith('/es');
    expect(useRouter().push).toHaveBeenCalledTimes(1);
  });
});
