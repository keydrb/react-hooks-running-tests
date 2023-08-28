import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

function Article(props) {
  return <h1>please pass this test</h1>
}

export default Article;

test("displays the text 'please pass this test'", () => {
  render(<Article />);

  const element = screen.queryByText("please pass this test");
  
  screen.debug(element);

  expect(element).toBeInTheDocument();
});
