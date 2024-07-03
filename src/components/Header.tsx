"use client";

import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/navigation";
import IconImage from "../icons/icon_home.svg";

const HeaderComponent = styled.header`
  height: 10vh;
  background: #000;
  color: #fff;
  border-top: 3px solid #0c6eb7;
  border-bottom: solid 2px #0c6eb7;
`;

const IconWrapper = styled.div`
  display: flex;
  margin-left: 0.5rem;
  padding: 0.5rem 0 0 0.5rem;
  flex-direction: column;
  width: 5%;
  height: 100%;
  background-color: #ccc;

  :hover& {
    cursor: pointer;
  }
`;

const Text = styled.p`
  color: #000;
`;

const Header = () => {
  const router = useRouter();

  return (
    <HeaderComponent>
      <IconWrapper onClick={() => router.push("/")}>
        <Image alt="ホームへ戻る" src={IconImage} />
        <Text>ホームへ</Text>
      </IconWrapper>
    </HeaderComponent>
  );
};

export default Header;
