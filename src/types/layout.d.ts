export type TextProps = {
  type: string;
  id: string;
  orderNum: number;
  textContent: string;
  textFormat: {
    fontColor: string;
    fontSize: string; // `${number | ""}${number | ""}${number | ""}`;
    textAlign: "left" | "center" | "right";
    italic: boolean;
    bold: boolean;
  };
  size: {
    width: number;
    height: number;
  };
  position: {
    x: number;
    y: number;
  };
};

export type ImageProps = {
  type: "Image";
  id: string;
  orderNum: number;
  name: string;
  size: {
    width: number;
    height: number;
  };
  position: {
    x: number;
    y: number;
  };
};

type LayoutProps = (TextProps | ImageProps)[];

export default LayoutProps;
