"use client";

import styled from "styled-components";

const Explanation = styled.span`
  position: absolute;
  right: auto;
  left: 8%;
  z-index: 10;
  display: block;
  visibility: hidden;
  width: 240px;
  padding: 10px;
  margin-top: 20px;
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
`;

export default Explanation;
