import styled from "styled-components";
import imgSrc from "../images/science_pavlof_dog.png";
import Image from "next/image";

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
`;

const ImageElem = ({ imageName }: { imageName: string }) => {
  return <StyledImage alt={imageName} src={imgSrc} draggable="false" />;
};

export default ImageElem;
