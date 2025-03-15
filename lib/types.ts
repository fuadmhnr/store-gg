export type GameTopupPricelist = {
    amountGold: number
    price: number
}


export type Game = {
    id?: number
    slug: string
    imageSrc: string
    title: string
    platform: string
    description: string
    category: string
    topups: GameTopupPricelist[]
}