"use client";

import Link from "next/link";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const LinkText = styled(Link)`
  font-size: 32px;
  padding-left: 1.5rem;
`;

export default function Home() {
  return (
    <main>
      <Wrapper>
        <h1>Components</h1>
        <LinkText href="/buttons">Button</LinkText>
        <LinkText href="/checkbox">Checkbox</LinkText>
        <LinkText href="/modal">Modal</LinkText>
        <LinkText href="/tab">Tab</LinkText>
        <LinkText href="/drag">Drag&Drop</LinkText>
      </Wrapper>
    </main>
  );
}
