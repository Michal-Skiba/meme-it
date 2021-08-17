export interface ImageProperties {
  height: number;
  width: number;
  size: number;
  fileType: string;
  url: string;
}

export const getImageProperties = (file: File): ImageProperties => {
  const imageUrl = URL.createObjectURL(file);
  const imageObj = new Image();
  const imageProperties: Partial<ImageProperties> = {};

  imageObj.src = imageUrl;
  imageProperties.size = file.size;
  imageProperties.fileType = file.type;
  imageProperties.url = imageUrl;

  imageObj.onload = () => {
    imageProperties.height = imageObj.height;
    imageProperties.width = imageObj.width;
  };

  return imageProperties as ImageProperties;
};
