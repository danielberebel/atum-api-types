export interface ItemRefundAtumInterface {
    id: number;
    quantity?: number;
    total: number;
    parentId: string;
    taxes: { total: number; parentId: string }[];
}
