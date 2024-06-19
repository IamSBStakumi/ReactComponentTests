"use client";

import { useState } from "react";
import { CheckBox, Panel } from "@/styles/CheckBox";

const Page = () => {
  const [isVisible, setVisible] = useState(false);

  return (
    <main>
      <div>
        <CheckBox onChange={() => setVisible(() => !isVisible)} />
        <label>テスト用チェックボックス</label>
      </div>
      <Panel $isVisible={isVisible}>チェックボックスの値によって表示を切り替えます</Panel>
    </main>
  );
};

export default Page;
