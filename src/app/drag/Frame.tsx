"use client";

import styled from "styled-components";
import LayoutProps from "@/types/layout";
import Element from "./Elements/Element";

const FrameComponent = styled.div`
  position: relative;
  margin: auto;
  width: 594px;
  height: 420px;
  margin-top: 5rem;
  /* 以下、3行がグリッド線の役割 */
  background-image: linear-gradient(#999 1px, transparent 0), linear-gradient(90deg, #999 1px, transparent 0);
  background-size: 17.5px 17.5px;
  box-shadow: 1px 1px #999;
`;

const Frame = ({ layouts }: { layouts: LayoutProps }) => {
  return (
    <FrameComponent>
      {layouts.map((element) => (
        <Element elem={element} key={element.id} />
      ))}
    </FrameComponent>
  );
};

export default Frame;
