"use client";

import { useRef } from "react";
import styled from "styled-components";
import realTimeValidation from "@/utils/realTimeValidation";

const TextBox = styled.input`
  width: 40%;
  font-size: 8em;
`;

const Page = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = () => {
    if (!inputRef.current) return;
    realTimeValidation(/[^0-9]$/gi, inputRef.current);
  };

  return (
    <div>
      <TextBox ref={inputRef} onChange={handleChange} maxLength={6} />
    </div>
  );
};

export default Page;
