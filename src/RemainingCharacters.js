import React from "react";

export default function RemainingCharacters(props) {
  const { max, text, children } = props;
  const remaining = max - text.length;
  return <>{children ? children(remaining) : remaining}</>;
}