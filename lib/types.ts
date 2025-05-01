export type GameTopupPricelist = {
  amountGold: number;
  price: number;
};

export type Game = {
  id?: number;
  slug: string;
  imageSrc: string;
  title: string;
  platform: string;
  description: string;
  category: string;
  topups: GameTopupPricelist[];
};

export type Transaction = {
  id: number;
  category: "success" | "pending" | "failed";
  image: string;
  title: string;
  platform: string;
  item: number;
  price: number;
};
