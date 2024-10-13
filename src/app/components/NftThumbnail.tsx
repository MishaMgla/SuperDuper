import Image, { StaticImageData } from "next/image";

interface NftThumbnailProps {
  thumbnailUrl: string | StaticImageData;
  alt: string;
}

export const NftThumbnail = ({ thumbnailUrl, alt }: NftThumbnailProps) => (
  <Image
    src={thumbnailUrl}
    alt={alt}
    objectFit="contain"
    objectPosition="center"
    fill={true}
  />
);
