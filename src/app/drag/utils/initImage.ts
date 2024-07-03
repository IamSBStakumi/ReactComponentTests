import { ImageProps } from "@/types/layout";

const initImage = (maxOrderNum: number) =>
  ({
    type: "Image",
    id: "",
    orderNum: maxOrderNum,
    name: "imageFile",
    size: {
      width: 180,
      height: 180,
    },
    position: {
      x: 0,
      y: 0,
    },
  }) as ImageProps;

export default initImage;
