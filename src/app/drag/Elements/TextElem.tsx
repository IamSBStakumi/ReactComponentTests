import styled from "styled-components";
import { TextProps } from "@/types/layout";

const Text = styled.textarea<{
  $fontColor: string;
  $fontSize: string;
  $textAlign: "left" | "center" | "right";
  $italic: boolean;
  $bold: boolean;
}>`
  color: ${({ $fontColor }) => `#${$fontColor}`};
  font-size: ${({ $fontSize }) => $fontSize};
  text-align: ${({ $textAlign }) => $textAlign};
  font-style: ${({ $italic }) => ($italic ? "italic" : "normal")};
  font-weight: ${({ $bold }) => ($bold ? "bold" : "normal")};
`;

const Wrapper = styled.div<{ $x: number; $y: number; $width: number; $height: number; $orderNum: number }>`
  position: absolute;
  top: ${({ $y }) => $y}px;
  left: ${({ $x }) => $x}px;
  width: ${({ $width }) => $width}px;
  height: ${({ $height }) => $height}px;
  z-index: ${({ $orderNum }) => $orderNum};
`;

const TextElem = ({ elem }: { elem: TextProps }) => {
  const { fontColor, fontSize, textAlign, italic, bold } = elem.textFormat;
  const { x, y } = elem.position;
  const { width, height } = elem.size;

  return (
    <Wrapper $x={x} $y={y} $width={width} $height={height} $orderNum={elem.orderNum}>
      <Text $fontColor={fontColor} $fontSize={fontSize} $textAlign={textAlign} $italic={italic} $bold={bold}>
        {elem.textContent}
      </Text>
    </Wrapper>
  );
};

export default TextElem;
