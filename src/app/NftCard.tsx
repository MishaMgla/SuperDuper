import { OwnedNft } from "alchemy-sdk";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import placeholderImage from "./assets/placeholder.png";
import Image from "next/image";
import { useHistory } from "./hooks/history/historyProvider";
import { NftThumbnail } from "./NftThumbnail";

export interface NftCardProps {
  nft: OwnedNft;
}

export const NftCard = ({ nft }: NftCardProps) => {
  const [isFullscreen, setFullscreen] = useState(false);
  const { add } = useHistory();

  const clickHandler = () => {
    if (!isFullscreen) add(nft);
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
        <NftThumbnail thumbnailUrl={thumbnailUrl} alt={nft.name || ""} />
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
