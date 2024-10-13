"use client";

import { NftsProvider } from "./hooks/nfts/nftsProvider";
import { WalletInput } from "./components/WalletInput";
import { NftsGrid } from "./components/NftsGrid";
import { Loader } from "./Loader";
import { HistoryProvider } from "./hooks/history/historyProvider";
import { History } from "./components/History";

export default function Home() {
  return (
    <NftsProvider>
      <header className="p-2 flex justify-between sticky top-0 z-50 backdrop-blur-3xl">
        <WalletInput />
        <Loader />
      </header>
      <main>
        <HistoryProvider>
          <NftsGrid />
          <History />
        </HistoryProvider>
      </main>
    </NftsProvider>
  );
}
