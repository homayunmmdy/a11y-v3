import Login from "@/app/[locale]/login/page";
import { render, screen } from "@testing-library/react";

// checking for the render 
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

//check when they rendered 
test("email should be empy", () => {
  render(<Login />);
  const emailInput = screen.getByPlaceholderText(/email/i);
  expect(emailInput.value).toBe("");
});

test("password should be empty", () => {
  render(<Login />);
  const passwordInput = screen.getByPlaceholderText(/password/i);
  expect(passwordInput.value).toBe("");
});
