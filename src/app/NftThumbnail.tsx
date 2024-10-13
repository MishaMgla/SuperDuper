import { OwnedNft } from "alchemy-sdk";
import Image from "next/image";
import placeholderImage from "./assets/placeholder.png";

interface NftThumbnailProps {
  nft: OwnedNft;
}

export const NftThumbnail = ({ nft }: NftThumbnailProps) => {
  const imageUrl =
    nft.image.thumbnailUrl ||
    nft.image.cachedUrl ||
    nft.image.originalUrl ||
    nft.image.pngUrl ||
    nft.collection?.bannerImageUrl ||
    placeholderImage;

  return (
    <Image
      src={imageUrl}
      alt={nft.name || ""}
      objectFit="contain"
      objectPosition="center"
      fill={true}
    />
  );
};
