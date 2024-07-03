"use client";

import styled from "styled-components";

const FooterComponent = styled.footer`
  margin-top: auto;
  padding: 15px 0;
  text-align: center;
  color: #fff;
  background: #000;
`;

const FooterText = styled.p`
  font-size: 16px;
`;

const Footer = () => {
  return (
    <FooterComponent>
      <FooterText>ReactComponentTests Author: SBS_takumi</FooterText>
    </FooterComponent>
  );
};

export default Footer;
