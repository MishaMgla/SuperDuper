import React, { createContext, useState, ReactNode, useContext } from "react";
import { OwnedNft } from "alchemy-sdk";

interface IHistoryProvider {
  history: OwnedNft[];
  add: (nft: OwnedNft) => void;
}

const HistoryContext = createContext<IHistoryProvider>({} as IHistoryProvider);

export const HistoryProvider = (props: { children: ReactNode }) => {
  const [history, setHistory] = useState<OwnedNft[]>(() => {
    const historyItems = localStorage.getItem("history");
    if (!historyItems) return [];
    return JSON.parse(historyItems);
  });

  const add = (nft: OwnedNft) => {
    setHistory((prevState) => [...prevState, nft]);
    localStorage.setItem("history", JSON.stringify(history));
  };

  return (
    <HistoryContext.Provider value={{ history, add }}>
      {props.children}
    </HistoryContext.Provider>
  );
};

export const useHistory = () => useContext(HistoryContext);
