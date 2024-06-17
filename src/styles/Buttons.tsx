"use client";

import styled from "styled-components";

const Button = styled.button`
  margin: 5px;
  border: solid 1px #ddd
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    > span {
      visibility: visible
    }
  }
`;

export default Button;
