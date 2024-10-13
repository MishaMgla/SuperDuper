import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { wallet } = await request.json();
    //toDo: add wallet address format validation (0x...)

    const alchemyKey = process.env.ALCHEMY_KEY;
    const res = await fetch(
      `https://eth-mainnet.g.alchemy.com/nft/v3/${alchemyKey}/getNFTsForOwner?owner=${wallet}&withMetadata=true&pageSize=100`
    );

    if (res.status !== 200) {
      return NextResponse.json(
        { data: "Internal server error" },
        { status: 500 }
      );
    }

    const json = await res.json();
    return NextResponse.json({ data: json.ownedNfts }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { data: "Internal server error" },
      { status: 500 }
    );
  }
}
