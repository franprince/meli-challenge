import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

test("it doesn't find a product", async () => {
  render(<App />);

  userEvent.type(
    screen.getByLabelText(/Indicá el id del producto/i),
    "MLA14186171"
  );

  userEvent.click(screen.getByRole("button", { name: /buscar/i }));
  await waitFor(() =>
    expect(
      screen.getByText(/Samsung Galaxy S10 512 GB azul prisma 8 GB RAM/i)
    ).toBeInTheDocument()
  );
});
