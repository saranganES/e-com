import Image from "next/image";
import React from "react";

interface PropsTypes {
  width?: number;
  height?: number;
}

function XlPreview({ width, height }: PropsTypes) {
  return (
    <Image
      src={"/images/documents.jpg"}
      alt="documents"
      width={width ? width : 95}
      height={height ? height : 79}
    />
  );
}

export default XlPreview;
