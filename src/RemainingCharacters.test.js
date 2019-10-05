import React from "react";
import RemainingCharacters from "./RemainingCharacters";
import { render } from "@testing-library/react";

it("renders the remaining number of characters", () => {
  const { container } = render(<RemainingCharacters max={10} text={"USC"} />);
  expect(container.textContent).toBe("7 characters left");
});

it("renders children", () => {
  const { container } = render(
    <RemainingCharacters max={10} text={"USC"}>
      {remainingCharacters => {
        return <p>{remainingCharacters}</p>;
      }}
    </RemainingCharacters>
  );

  expect(container.textContent).toBe("7");
});
