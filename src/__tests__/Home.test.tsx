import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "../app/page";
import React from "react";

describe("ホームのコンポーネントテスト", () => {
  test("コンポーネントテスト", () => {
    render(<Home />);

    expect(screen.getByAltText("Vercel Logo")).toBeInTheDocument();
  });
});
