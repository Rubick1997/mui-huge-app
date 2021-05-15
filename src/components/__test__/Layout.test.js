import React from "react";
import Layout from "../Layout";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router";
const component = render(
    <MemoryRouter>
        <Layout />
    </MemoryRouter>
);

test("is style changed", () => {
	const listItem = component.getAllByRole("list-item");
    fireEvent.click(listItem)
});
