import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import AntForm from "./AntForm";

it("renders error message when submitting the form without a username", async () => {
	const { getByText } = render(<AntForm />);
	fireEvent.click(getByText("Submit"));
	await waitForElement(() => getByText(/username required/i));
});

it("renders complete after successful form submission", async () => {
	const { container, getByText } = render(<AntForm />);
	const input = container.querySelector("#test_username");
	expect(input).toBeInTheDocument();
	fireEvent.change(input, { target: { value: "myvalue" } });
	fireEvent.click(getByText("Submit"));
	await waitForElement(() => getByText("Complete"));
});
