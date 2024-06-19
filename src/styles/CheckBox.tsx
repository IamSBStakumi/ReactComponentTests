"use client";

import styled, { css } from "styled-components";

const CheckBox = styled.input.attrs({ type: "checkbox" })``;

const Panel = styled.div<{ $isVisible: boolean }>`
  background: #41a1fb;
  width: 100%;
  ${({ $isVisible }) =>
    !$isVisible &&
    css`
      visibility: hidden;
    `}
`;

export { CheckBox, Panel };
