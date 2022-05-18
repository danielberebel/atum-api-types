export interface LocationAtumInterface {
    id?: number;
    name: string;
    slug: string;
    code?: string; // SYNC: pending to add
    barcode?: string; 
    description?: string;
    parent?: number;
    count?: number;
    deleted?: boolean;
}
