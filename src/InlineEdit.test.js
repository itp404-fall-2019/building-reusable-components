import React from "react";
import { render, fireEvent } from "@testing-library/react";
import InlineEdit from "./InlineEdit";

it("renders the value as text", () => {
  const { container } = render(
    <InlineEdit value={"Untitled Document"} onEnter={() => {}} />
  );

  expect(container.textContent).toBe("Untitled Document");
});

it("changes to an input when clicked", () => {
  let title = "Untitled Document";
  const { container, getByText } = render(
    <InlineEdit value={title} onEnter={() => {}} />
  );
  fireEvent.click(getByText("Untitled Document"));
  expect(container.querySelector("input").value).toBe("Untitled Document");
});

it("updates to the new value when enter is pressed", () => {
  let title = "Untitled Document";
  let updateTitle = newTitle => (title = newTitle);

  const { container, getByText } = render(
    <InlineEdit value={title} onEnter={updateTitle} />
  );

  fireEvent.click(getByText("Untitled Document"));
  const input = container.querySelector("input");

  fireEvent.change(input, {
    target: {
      value: "USC"
    }
  });

  fireEvent.keyUp(input, {
    keyCode: 13
  });

  expect(title).toBe("USC");
});

it("does not update to the new value when escape is pressed", () => {
  let title = "Untitled Document";
  let updateTitle = newTitle => (title = newTitle);
  const { container, getByText } = render(
    <InlineEdit value={title} onEnter={updateTitle} />
  );

  fireEvent.click(getByText("Untitled Document"));
  const input = container.querySelector("input");

  fireEvent.change(input, {
    target: {
      value: "USC"
    }
  });

  fireEvent.keyUp(input, {
    keyCode: 27
  });

  expect(title).toBe("Untitled Document");
});
