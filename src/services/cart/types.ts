export type Cart = {
    username: string | null,
    items: Item[],
}

export type Item = {
    id: number,
    amount: number,
}