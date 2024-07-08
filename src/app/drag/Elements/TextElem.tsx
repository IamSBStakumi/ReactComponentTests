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
  overflow: hidden;
  resize: none;

  :active & {
    cursor: grabbing;
  }
`;

const TextElem = ({ elem }: { elem: TextProps }) => {
  const { fontColor, fontSize, textAlign, italic, bold } = elem.textFormat;

  return (
    <Text
      $fontColor={fontColor}
      $fontSize={fontSize}
      $textAlign={textAlign}
      $italic={italic}
      $bold={bold}
      defaultValue={elem.textContent}
    />
  );
};

export default TextElem;
