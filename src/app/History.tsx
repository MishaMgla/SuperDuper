import { useHistory } from "./hooks/history/historyProvider";
import { OwnedNft } from "alchemy-sdk";
import { NftThumbnail } from "./NftThumbnail";
import placeholderImage from "./assets/placeholder.png";

const HistoryItem = ({ nft }: { nft: OwnedNft }) => {
  const fullViewUrl =
    nft.image.cachedUrl ||
    nft.image.originalUrl ||
    nft.image.pngUrl ||
    nft.collection?.bannerImageUrl ||
    placeholderImage;

  const thumbnailUrl = nft.image.thumbnailUrl || fullViewUrl;

  return (
    <div className="w-[80px] h-[80px] rounded-lg overflow-hidden relative">
      <NftThumbnail thumbnailUrl={thumbnailUrl} alt={nft.name || ""} />
    </div>
  );
};

export const History = () => {
  const { history } = useHistory();
  return (
    <div className="flex flex-col items-center pt-10 gap-5">
      <>History</>
      <div className="flex flex-row gap-2 flex-wrap">
        {history.map((nft, index) => (
          <HistoryItem
            nft={nft}
            key={index + (nft.name || "") + nft.description}
          />
        ))}
      </div>
    </div>
  );
};
