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

    // ボタンにホバーするとExplanationが表示
    await user.hover(targetButton);
    expect(screen.getByText("説明")).toBeInTheDocument();
    // ボタンからアンホバーするとExplanationが非表示
    await user.unhover(targetButton);
    expect(screen.queryByDisplayValue("説明")).toBeNull();
  });
});
