import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

beforeEach(() => render(<App />));

test("it finds and displays a product", async () => {
  userEvent.type(
    screen.getByLabelText("Indicá el id del producto"),
    "MLA14186171"
  );
  userEvent.click(screen.getByRole("button", { name: /buscar/i }));
  expect(screen.getByText("Buscando...")).toBeInTheDocument();
  await waitFor(() =>
    expect(
      screen.getByText(/samsung galaxy s10 512 gb azul prisma 8 gb ram/i)
    ).toBeInTheDocument()
  );
  expect(
    screen.getByText(/código del catálogo: MLA14186171/i)
  ).toBeInTheDocument();
  expect(screen.getAllByRole("listitem")).toHaveLength(5);
  expect(screen.getAllByAltText(/miniatura/i)).toHaveLength(5);
});

test("it doesn't find a product and shows a message", async () => {
  userEvent.type(screen.getByLabelText("Indicá el id del producto"), "error");
  userEvent.click(screen.getByRole("button", { name: /buscar/i }));
  expect(screen.getByText(/buscando.../i)).toBeInTheDocument();
  await waitFor(() =>
    expect(screen.getByText(/no se encontró el producto./i)).toBeInTheDocument()
  );
});

test("interface doesn't change when you search with an empty input", async () => {
  userEvent.click(screen.getByRole("button", { name: /buscar/i }));
  const { container } = render(<App />);
  expect(container.firstChild).toMatchSnapshot();
});
