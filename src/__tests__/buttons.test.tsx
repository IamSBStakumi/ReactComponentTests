import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Page from "../app/buttons/page";
import React from "react";

describe("ボタンのコンポーネントテスト", () => {
  test("コンポーネントテスト", () => {
    render(<Page />);

    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.queryByDisplayValue("説明")).toBeNull();
  });

  test("Explanationに関するテスト", async () => {
    render(<Page />);

    const targetButton = screen.getByRole("button");

    // ボタンにホバーしていないとExplanationが非表示
    expect(screen.getByText("説明")).toHaveStyle("visibility: hidden");

    // ボタンにホバーするとExplanationが表示
    await user.hover(targetButton);
    expect(screen.getByText("説明")).toBeInTheDocument();
  });
});
