import { describe, expect, test } from "vitest";
import { Skills } from "./Skills";
import { render, screen } from "@testing-library/react";

describe("Skills", () => {
	const skills = ["HTML", "CSS", "Javascript"];
	test("renders correctly", () => {
		render(<Skills skills={skills} />);

		const listElement = screen.getByRole("list");
		expect(listElement).toBeInTheDocument();
	});

	test("renders a list of skills", () => {
		render(<Skills skills={skills} />);

		const listItemElement = screen.getAllByRole("listitem");
		expect(listItemElement).toHaveLength(skills.length);
	});

	test("renders login button", () => {
		render(<Skills skills={skills} />);

		const loginButton = screen.getByRole("button", { name: "Login" });
		expect(loginButton).toBeInTheDocument();
	});

	test("Start Learning button is not rendered", () => {
		render(<Skills skills={skills} />);

		const startLearningButton = screen.queryByRole("button", {
			name: "Start learning",
		});
		expect(startLearningButton).not.toBeInTheDocument();
	});

	test("Start Learning button is eventually displayed", async () => {
		render(<Skills skills={skills} />);

		const startLearningButton = await screen.findByRole(
			"button",
			{
				name: "Start learning",
			},
			{
				timeout: 2000,
			}
		);

		expect(startLearningButton).toBeInTheDocument();
	});
});
