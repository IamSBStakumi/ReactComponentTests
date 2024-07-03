import imgSrc from "../images/science_pavlof_dog.png";
import Image from "next/image";

const ImageElem = ({ imageName }: { imageName: string }) => {
  console.log(imageName);

  return (
    <>
      <Image alt="CommonImage" src={imgSrc} />
    </>
  );
};

export default ImageElem;
