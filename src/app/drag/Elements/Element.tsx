import { TextProps, ImageProps } from "@/types/layout";
import TextElem from "./TextElem";
import ImageElem from "./ImageElem";

const Element = ({ elem }: { elem: TextProps | ImageProps }) => {
  switch (elem.type) {
    case "Text":
      return <TextElem elem={elem as TextProps} />;
    case "Image":
      return (
        <>
          <ImageElem imageName={(elem as ImageProps).name} />
        </>
      );
    default:
      return <></>;
  }
};

export default Element;
