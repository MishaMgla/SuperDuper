import { useNfts } from "../hooks/nfts/nftsProvider";
import { NftCard } from "./NftCard";

export const NftsGrid = () => {
  const { nfts } = useNfts();

  return (
    <div className="flex flex-row justify-center w-full flex-wrap gap-5">
      {nfts.map((nft, index) => (
        <NftCard
          nft={nft}
          key={nft.mint?.mintAddress + (nft.name || "") + index}
        />
      ))}
    </div>
  );
};
