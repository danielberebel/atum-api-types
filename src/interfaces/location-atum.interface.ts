export interface LocationAtumInterface {
    id?: number;
    name: string;
    slug: string;
    barcode?: string; // SYNC: pending to add
    description?: string;
    parent?: number;
    count?: number;
    deleted?: boolean;
}
