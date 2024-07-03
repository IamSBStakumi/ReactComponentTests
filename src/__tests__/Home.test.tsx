import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Home from "../app/page";
import React from "react";

describe("ホームのコンポーネントテスト", () => {
  test("コンポーネントテスト", () => {
    render(<Home />);
  });
});
