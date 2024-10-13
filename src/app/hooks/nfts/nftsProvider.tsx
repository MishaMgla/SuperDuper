import React, { createContext, useState, ReactNode, useContext } from "react";
import { OwnedNft } from "alchemy-sdk";

interface INftsContext {
  nfts: OwnedNft[];
  loading: boolean;
  fetchNfts: (wallet: string) => void;
}

export interface Detrust {
  creator: string;
  inherited: boolean;
  inheritorHash: string;
  lastOwnerOp: BigInt;
  name: string;
  silenceTime: BigInt;
  address: string;
}

const NftsContext = createContext<INftsContext>({} as INftsContext);

export const NftsProvider = (props: { children: ReactNode }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<OwnedNft[]>([]);

  const fetchNfts = async (wallet: string) => {
    try {
      setLoading(true);
      const res = await fetch("/api/getNfts", {
        method: "POST",
        body: JSON.stringify({ wallet }),
      });
      if (res.status !== 200) return;
      const json = await res.json();
      setData(json.data);
    } catch (error) {
      console.log("Error fetching nfts");
    } finally {
      setLoading(false);
    }
  };

  return (
    <NftsContext.Provider value={{ nfts: data, loading, fetchNfts }}>
      {props.children}
    </NftsContext.Provider>
  );
};

export const useNfts = () => useContext(NftsContext);
