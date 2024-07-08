"use client";

import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const ButtonWrapper = styled.div`
  width: 30%;
  padding-top: 5rem;
  display: flex;
  flex-direction: column;
`;

const FrameWrapper = styled.div`
  width: 70%;
`;

const Button = styled.button`
  width: 50%;
  font-size: 24px;
  padding: 0.5rem;
  margin: 1.5rem auto 1.5rem auto;
`;

const Input = styled.input`
  display: none;
`;

export { Wrapper, ButtonWrapper, FrameWrapper, Button, Input };
