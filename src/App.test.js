import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders primary navigation", () => {
  render(<App />);

  expect(screen.getByRole("link", { name: /home/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /portfolio/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /contact/i })).toBeInTheDocument();
});
