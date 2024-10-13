import { useNfts } from "./hooks/nfts/nftsProvider";

const ETH_WALLET_LENGTH = 42;

export const WalletInput = () => {
  const nfts = useNfts();

  const changeHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const wallet = e.target.value.trim();
    if (wallet.length === ETH_WALLET_LENGTH) nfts.fetchNfts(wallet);
  };

  return (
    <input
      type="text"
      placeholder="Enter wallet address"
      className="border border-gray-300 text-xs p-1 min-w-[300px]"
      onChange={changeHandler}
    />
  );
};
