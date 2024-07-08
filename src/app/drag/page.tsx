"use client";

import { useState } from "react";
import { Wrapper, ButtonWrapper, FrameWrapper, Button, Input } from "@/components/Drag";
import LayoutProps from "@/types/layout";
import Frame from "./Frame";
import initText from "./utils/initText";
import initImage from "./utils/initImage";

const Page = () => {
  const [layout, setLayout] = useState<LayoutProps>([]);
  const [maxOrderNum, setMaxOrderNum] = useState(0);

  const addText = () => {
    const elem = initText(maxOrderNum);
    setMaxOrderNum((preValue) => preValue + 1);
    setLayout(() => [...layout, elem]);
  };

  const Files = [];

  const addImage = () => {
    const elem = initImage(maxOrderNum);
    setMaxOrderNum((preValue) => preValue + 1);
    setLayout(() => [...layout, elem]);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const target = e.target as HTMLInputElement;
    Files.push(target.files);
  };

  const input = {
    id: "add-common-image",
    type: "file",
    accept: "application/pdf, image/jpeg, image/png, .eps",
  };

  return (
    <Wrapper>
      <ButtonWrapper>
        <Button onClick={addText}>テキストを配置</Button>
        <Button onClick={addImage}>
          <Input {...input} onChange={(e) => handleChange(e)} />
          画像を配置
        </Button>
      </ButtonWrapper>
      <FrameWrapper>
        <Frame layouts={layout} />
      </FrameWrapper>
    </Wrapper>
  );
};

export default Page;
