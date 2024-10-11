import { describe, expect, test } from "vitest";
import { Application } from "./Application";
import { render, screen } from "@testing-library/react";

describe("Application", () => {
	test("renders correctly", () => {
		render(<Application />);
		// screen.debug();

		// Recommended Priority Order for Queries
		// 1: getByRole
		// 2: getByLabelText
		// 3: getByPlaceholder
		// 4: getByText
		// 5: getByDisplayValue
		// 6: getByAltText
		// 7: getByTitle
		// 8: getByTestId

		// getByRole
		const nameElement = screen.getByRole("textbox", { name: "Name" });
		expect(nameElement).toBeInTheDocument();

		// getByLabelText
		const nameElement2 = screen.getByLabelText("Name", {
			selector: "input",
		});
		expect(nameElement2).toBeInTheDocument();

		// getByPlaceholderText
		const nameElement3 = screen.getByPlaceholderText("Fullname");
		expect(nameElement3).toBeInTheDocument();

		// getByRole
		const bioElement = screen.getByRole("textbox", { name: "Bio" });
		expect(bioElement).toBeInTheDocument();

		// getByLabelText
		const bioElement2 = screen.getByLabelText("Bio");
		expect(bioElement2).toBeInTheDocument();

		// getByRole
		const jobLocationElement = screen.getByRole("combobox");
		expect(jobLocationElement).toBeInTheDocument();

		const termsElement = screen.getByRole("checkbox");
		expect(termsElement).toBeInTheDocument();

		// getByLabelText
		const termsElement2 = screen.getByLabelText(
			"I agree to the terms and conditions"
		);
		expect(termsElement2).toBeInTheDocument();

		// getByRole
		const submitButton = screen.getByRole("button");
		expect(submitButton).toBeInTheDocument();

		//getByText
		const paragraphElement = screen.getByText("All fields are mandatory");
		expect(paragraphElement).toBeInTheDocument();

		//getByDisplayValue
		const inputValueElement = screen.getByDisplayValue("Vishwas");
		expect(inputValueElement).toBeInTheDocument();

		// getByAltText
		const imageAltTextElement = screen.getByAltText(
			"a person with a laptop"
		);
		expect(imageAltTextElement).toBeInTheDocument();

		// getByTitle
		const titleElement = screen.getByTitle("close");
		expect(titleElement).toBeInTheDocument();

		//getByTestId
		const customElement = screen.getByTestId("custom-element");
		expect(customElement).toBeInTheDocument();
	});
});
