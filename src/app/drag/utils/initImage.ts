import { v4 as uuidv4 } from "uuid";
import { ImageProps } from "@/types/layout";

const initImage = (maxOrderNum: number) =>
  ({
    type: "Image",
    id: uuidv4(),
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
