import { render } from "@testing-library/react";

import Hero from "../../src/components/Hero";

test('renders Hero component', () => {
  const { getByText } = render(<Hero/>);
  
  // Replace the following with actual text content
  expect(getByText('hero_txt_1')).toBeInTheDocument();
  expect(getByText('hero_txt_2')).toBeInTheDocument();
  expect(getByText('hero_txt_3')).toBeInTheDocument();
});
