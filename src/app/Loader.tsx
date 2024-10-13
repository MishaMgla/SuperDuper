import { useNfts } from "./hooks/nfts/nftsProvider";

export const Loader = () => {
  const { loading } = useNfts();
  if (!loading) return;
  return <span className="text-sm ">Loading...</span>;
};
