import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "../app/page";
import React from "react";

describe("ホームのコンポーネントテスト", () => {
  test("コンポーネントテスト", () => {
    render(<Home />);

    expect(screen.getByText("Button")).toBeInTheDocument();
    expect(screen.getByText("Checkbox")).toBeInTheDocument();
    expect(screen.getByText("Modal")).toBeInTheDocument();
    expect(screen.getByText("Tab")).toBeInTheDocument();
    expect(screen.getByText("Drag&Drop")).toBeInTheDocument();
  });
});
