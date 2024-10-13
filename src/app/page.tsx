"use client";

import { NftsProvider } from "./hooks/nfts/nftsProvider";
import { WalletInput } from "./WalletInput";
import { NftsGrid } from "./NftsGrid";
import { Loader } from "./Loader";

export default function Home() {
  return (
    <NftsProvider>
      <header className="p-2 flex justify-between sticky top-0 z-50 backdrop-blur-3xl">
        <WalletInput />
        <Loader />
      </header>
      <main>
        <NftsGrid />
      </main>
    </NftsProvider>
  );
}
