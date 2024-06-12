"use client";

import styled from "styled-components";
import { IStyledComponentBase } from "styled-components/dist/types";

const Explanation = styled.span<{
  $hover?: boolean;
  $back?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  $parent: IStyledComponentBase<any, any>;
}>`
  position: absolute;
  top: 5%;
  right: auto;
  left: 10%;
  z-index: 10;
  display: ${(props) => (props.$hover ? "inline" : "none")};
  width: ${(props) => (props.$back ? "auto" : "240px")};
  padding: 10px;
  margin-top: 10px;
  text-align: center;
  color: #fff;
  background-color: rgb(12 110 183 / 100%);
  border-radius: 5px;

  &::after {
    position: absolute;
    top: -12px;
    right: auto;
    left: 5%;
    content: "";
    border-right: 10px solid transparent;
    border-bottom: 12px solid rgb(12 110 183 / 100%);
    border-left: 10px solid transparent;
  }
  ${(props) => props.$parent}: hover & {
    display: inline;
  }
`;

export default Explanation;
