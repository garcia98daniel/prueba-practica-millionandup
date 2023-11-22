import Hero from "@/source/components/Hero";
import { render } from "@testing-library/react";
describe("Testing hero component", () => {
    const component = <Hero />;
  
    test("El componente debe hacer match con el snapshot", () => {
      const { container } = render(component);
  
      expect(container).toMatchSnapshot();
    });
  });