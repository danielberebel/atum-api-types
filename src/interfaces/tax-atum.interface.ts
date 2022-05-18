import { MetaDataAtumInterface } from './meta-data-atum.interface';

export interface TaxClassAtumInterface {
    slug: string;
    name: string;
    taxRates?: TaxRateAtumInterface[]; // for sync
}

export interface TaxLineAtumInterface {
    id?: number; // READ-ONLY
    rate_code?: string; // 	READ-ONLY
    rate_id?: number; // READ-ONLY
    label?: string; // 	READ-ONLY
    compound?: boolean; // READ-ONLY
    tax_total?: string; // 	Tax total (not including shipping taxes). //READ-ONLY
    shipping_tax_total?: string; // 	READ-ONLY
    rate_percent?: number;
    meta_data?: MetaDataAtumInterface[];
}

export interface TaxRateAtumInterface {
    id: number; // READ-ONLY
    country: string;
    state: string;
    postcode: string;
    city: string;
    rate: string;
    name: string;
    priority: number;
    compound: boolean;
    shipping: boolean;
    class: string; // TaxClass Slug
    order?: number;
}
