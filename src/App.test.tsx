// src/App.test.tsx
import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import App from "./App";

test("renders learn react link", () => {
	render(<App />);
	const linkElement = screen.getByText(/App/i);
	expect(linkElement).toBeInTheDocument();
},10000);
