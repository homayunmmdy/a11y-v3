import Login from "@/app/[locale]/login/page";
import { render, screen } from "@testing-library/react";

test("email should be rendered", () => {
  render(<Login />);
  const emailInput = screen.getByPlaceholderText(/email/i);
  expect(emailInput).toBeInTheDocument();
});

test("password should be rendered", () => {
  render(<Login />);
  const passwordInput = screen.getByPlaceholderText(/password/i);
  expect(passwordInput).toBeInTheDocument();
});

test("submit should be rendered", () => {
  render(<Login />);
  const submitBtn = screen.getByTestId("submit");
  expect(submitBtn).toBeInTheDocument();
});
