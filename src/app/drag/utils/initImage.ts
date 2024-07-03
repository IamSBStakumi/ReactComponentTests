import { ImageProps } from "@/types/layout";

const initImage = (maxOrderNum: number) =>
  ({
    type: "Image",
    id: "",
    orderNum: maxOrderNum,
    name: "imageFile",
    size: {
      width: 200,
      height: 50,
    },
    position: {
      x: 0,
      y: 0,
    },
  }) as ImageProps;

export default initImage;
