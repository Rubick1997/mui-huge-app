import React from "react";
import Create from "../Create";
import { render, fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { createMemoryHistory } from "history";
let getByRole;
let getByTestId;
 
const history = createMemoryHistory();
beforeEach(() => {
	const component = render(<Create />);
	getByRole = component.getByRole;
	getByTestId = component.getByTestId;
});

test("typography renders with correct text", () => {
	const createHeader = getByRole("heading");
	expect(createHeader.textContent).toBe("Create a New Note");
});

test("initial title input value is empty", () => {
	const inputEl = getByTestId("input");
	expect(inputEl.value).toBe("");
});

test("initial details input value is empty", () => {
	const inputEl = getByTestId("input2");
	expect(inputEl.value).toBe("");
});
test("is page redirected to notes page", () => {
	const inputEl = getByTestId("input");
	const inputEl1 = getByTestId("input2");
    const submitBtn = getByTestId("button");
	fireEvent.change(inputEl, {
		target: {
			value: "Go to School",
		},
	});

	fireEvent.change(inputEl1, {
		target: {
			value: "Get some books",
		},
	});
   fireEvent.click(submitBtn)
  expect(history.location.pathname).toBe("/")
});
