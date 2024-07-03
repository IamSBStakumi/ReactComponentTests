import styled from "styled-components";
import { TextProps } from "@/types/layout";

const Text = styled.textarea<{
  $fontColor: string;
  $fontSize: string;
  $textAlign: "left" | "center" | "right";
  $italic: boolean;
  $bold: boolean;
}>`
  background: transparent;
  color: ${({ $fontColor }) => `#${$fontColor}`};
  font-size: ${({ $fontSize }) => $fontSize};
  text-align: ${({ $textAlign }) => $textAlign};
  font-style: ${({ $italic }) => ($italic ? "italic" : "normal")};
  font-weight: ${({ $bold }) => ($bold ? "bold" : "normal")};
  width: 100%;
  height: 100%;
  border: none;

  :active & {
    cursor: grabbing;
  }
`;

const Wrapper = styled.div<{ $x: number; $y: number; $width: number; $height: number; $orderNum: number }>`
  position: absolute;
  top: ${({ $y }) => $y}px;
  left: ${({ $x }) => $x}px;
  width: ${({ $width }) => $width}px;
  height: ${({ $height }) => $height}px;
  z-index: ${({ $orderNum }) => $orderNum};
  width: 100%;
  height: 100%;
`;

const TextElem = ({ elem }: { elem: TextProps }) => {
  const { fontColor, fontSize, textAlign, italic, bold } = elem.textFormat;
  const { x, y } = elem.position;
  const { width, height } = elem.size;

  return (
    <Wrapper $x={x} $y={y} $width={width} $height={height} $orderNum={elem.orderNum}>
      <Text
        $fontColor={fontColor}
        $fontSize={fontSize}
        $textAlign={textAlign}
        $italic={italic}
        $bold={bold}
        defaultValue={elem.textContent}
      />
    </Wrapper>
  );
};

export default TextElem;
