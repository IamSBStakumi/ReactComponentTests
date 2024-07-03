import styled from "styled-components";
import { TextProps, ImageProps } from "@/types/layout";
import TextElem from "./TextElem";
import ImageElem from "./ImageElem";

const Wrapper = styled.div<{ $x: number; $y: number; $width: number; $height: number; $orderNum: number }>`
  position: absolute;
  top: ${({ $y }) => $y}px;
  left: ${({ $x }) => $x}px;
  width: ${({ $width }) => $width}px;
  height: ${({ $height }) => $height}px;
  z-index: ${({ $orderNum }) => $orderNum};
`;

const Element = ({ elem }: { elem: TextProps | ImageProps }) => {
  const { width, height } = elem.size;
  const { x, y } = elem.position;
  const orderNum = elem.orderNum;

  let returnComponent;
  switch (elem.type) {
    case "Text":
      returnComponent = <TextElem elem={elem as TextProps} />;
      break;
    case "Image":
      returnComponent = <ImageElem imageName={(elem as ImageProps).name} />;
      break;
    default:
      return <></>;
  }

  return (
    <Wrapper $x={x} $y={y} $width={width} $height={height} $orderNum={orderNum}>
      {returnComponent}
    </Wrapper>
  );
};

export default Element;
