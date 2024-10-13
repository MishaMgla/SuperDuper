import React, { createContext, useState, ReactNode, useContext } from "react";
import { OwnedNft } from "alchemy-sdk";

interface IHistoryProvider {
  history: OwnedNft[];
  add: (nft: OwnedNft) => void;
}

const HistoryContext = createContext<IHistoryProvider>({} as IHistoryProvider);

export const HistoryProvider = (props: { children: ReactNode }) => {
  const [items, setItems] = useState<OwnedNft[]>(() => {
    if (typeof window === "undefined") return [];
    const historyItems = localStorage.getItem("history");
    if (!historyItems) return [];
    return JSON.parse(historyItems);
  });

  const add = (nft: OwnedNft) => {
    setItems((prevState) => [...prevState, nft]);
    localStorage.setItem("history", JSON.stringify(items));
  };

  return (
    <HistoryContext.Provider value={{ history: items, add }}>
      {props.children}
    </HistoryContext.Provider>
  );
};

export const useHistory = () => useContext(HistoryContext);
