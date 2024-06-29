"use client";

import { useState } from "react";
import Tab from "@/components/Tab";

const Page = () => {
  const [active, setActive] = useState(0);
  const tabNames = ["タブ1", "タブ2"];

  return (
    <div>
      <Tab active={active} setActive={setActive}>
        <h1>{tabNames[active]}</h1>
      </Tab>
    </div>
  );
};

export default Page;
