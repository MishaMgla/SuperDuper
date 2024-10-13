import { OwnedNft } from "alchemy-sdk";
import Image from "next/image";
import placeholderImage from "./assets/placeholder.png";

interface NftThumbnailProps {
  nft: OwnedNft;
}

export const NftThumbnail = ({ nft }: NftThumbnailProps) => {
  if (nft.image.thumbnailUrl)
    return (
      <Image
        src={nft.image.thumbnailUrl}
        alt={nft.name || ""}
        objectFit="contain"
        objectPosition="center"
        fill={true}
      />
    );
  if (nft.image.cachedUrl || nft.image.originalUrl || nft.image.pngUrl) {
    return (
      <Image
        src={
          nft.image.cachedUrl || nft.image.originalUrl || nft.image.pngUrl || ""
        }
        alt={nft.name || ""}
        objectFit="contain"
        objectPosition="center"
        fill={true}
      />
    );
  }

  if (nft.collection?.bannerImageUrl) {
    return (
      <Image
        src={nft.collection?.bannerImageUrl}
        alt={nft.name || ""}
        objectFit="contain"
        objectPosition="center"
        fill={true}
      />
    );
  }

  return (
    <Image
      src={placeholderImage}
      alt={nft.name || ""}
      objectFit="contain"
      objectPosition="center"
      fill={true}
    />
  );
};
