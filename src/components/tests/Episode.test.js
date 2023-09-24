import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Episode from "./../Episode";



test("renders without error", () => {
  // Render the component
  render(<Episode />);
  // Assert that the component is present in the document
  const episode = screen.getByTestId('episode');
  expect(episode).toBeInTheDocument();
});

test("renders the summary test passed as prop", () => {
  const exampleEpisode = {
    id: 1,
    name: 'Example Episode',
    season: 1,
    number: 1,
    summary: 'This is an example summary.',
    runtime: 45,
  };
  render(<Episode episode={exampleEpisode} />);

  const summary = screen.getByText('This is an example summary');
  expect(summary).toBeInTheDocument();
});

test("renders default image when image is not defined", () => {
    const exampleEpisode = {
      id: 1,
      name: "Example Episode",
      season: 1,
      summary: "This is a example summary",
      runtime: 45,
    };
    render(<Episode episode={exampleEpisode} />);
    const defaultImage = screen.getByAltText('./stranger_things.png');
    expect(defaultImage).toBeInTheDocument();

    fireEvent.click(defaultImage);
    expect(defaultImage).toHaveClass('active');
  });