import { useNfts } from "./hooks/nfts/nftsProvider";
import { NftThumbnail } from "./NftThumbnail";

export const NftsGrid = () => {
  const { nfts } = useNfts();

  return (
    <div className="flex flex-row justify-center w-full flex-wrap gap-5">
      {nfts.map((nft) => (
        <div className="w-[200px] h-[200px] shadow-md rounded-lg overflow-hidden relative">
          <NftThumbnail nft={nft} />
        </div>
      ))}
    </div>
  );
};
