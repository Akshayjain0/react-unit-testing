import { render, screen } from "@testing-library/react";
import { test, expect, describe } from "vitest";
import Greet from "./Greet";

describe("Greet", () => {
	test("renders correctly", () => {
		render(<Greet />);
		const textElement = screen.getByText(/Hello/i);
		expect(textElement).toBeInTheDocument();
	});

	test("renders with name correctly", () => {
		render(<Greet name={"Akshay"} />);
		const textElement = screen.getByText(/Hello Akshay/i);
		expect(textElement).toBeInTheDocument();
	});
});
