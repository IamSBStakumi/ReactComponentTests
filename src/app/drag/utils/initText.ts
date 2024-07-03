import { TextProps } from "@/types/layout";

const initText = (maxOrderNum: number) =>
  ({
    type: "Text",
    id: "text1",
    orderNum: maxOrderNum,
    textContent: "",
    textFormat: {
      fontColor: "000",
      fontSize: "20",
      textAlign: "left",
      italic: true,
      bold: false,
    },
    size: {
      width: 200,
      height: 50,
    },
    position: {
      x: 0,
      y: 0,
    },
  }) as TextProps;

export default initText;
