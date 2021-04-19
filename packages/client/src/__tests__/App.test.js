import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders base app elements", () => {
  render(<App />);
  const searchButton = screen.getByRole("button", { name: /buscar/i });
  const searchLabel = screen.getByLabelText(/indicá el id del producto/i);
  const logo = screen.getByText(/volver al home/i);
  const help = screen.getByText(/ayuda/i);
  expect(searchButton).toBeInTheDocument();
  expect(searchLabel).toBeInTheDocument();
  expect(help).toBeInTheDocument();
  expect(logo).toBeInTheDocument();
});
