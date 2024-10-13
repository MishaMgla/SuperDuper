import { OwnedNft } from "alchemy-sdk";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import placeholderImage from "./assets/placeholder.png";
import Image from "next/image";

export interface NftCardProps {
  nft: OwnedNft;
}

export const NftCard = ({ nft }: NftCardProps) => {
  const [isFullscreen, setFullscreen] = useState(false);

  const clickHandler = () => {
    setFullscreen(!isFullscreen);
  };

  const fullViewUrl =
    nft.image.cachedUrl ||
    nft.image.originalUrl ||
    nft.image.pngUrl ||
    nft.collection?.bannerImageUrl ||
    placeholderImage;

  const thumbnailUrl = nft.image.thumbnailUrl || fullViewUrl;

  return (
    <>
      <motion.div
        className="w-[200px] h-[200px] shadow-md rounded-lg overflow-hidden relative"
        onClick={clickHandler}
      >
        <Image
          src={thumbnailUrl}
          alt={nft.name || ""}
          objectFit="contain"
          objectPosition="center"
          fill={true}
        />
      </motion.div>

      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.1 }}
            animate={{ opacity: 1, scale: 0.6 }}
            exit={{ opacity: 0, scale: 0.1 }}
            className="w-screen h-screen fixed z-40"
            onClick={clickHandler}
          >
            <Image
              src={fullViewUrl}
              alt={nft.name || ""}
              objectFit="contain"
              objectPosition="center"
              fill={true}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
