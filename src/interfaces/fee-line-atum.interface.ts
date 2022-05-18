import { MetaDataAtumInterface } from './meta-data-atum.interface';
import { TaxLineAtumInterface } from './tax-atum.interface';
import { LineItemTaxAtumInterface } from './line-item-atum.interface';

export interface FeeLineAtumInterface {
    id?: number;
    name?: string;
    tax_class?: string;
    tax_status?: string;
    amount?: string; // number
    total: string; // float
    total_tax?: string; // float
    taxes?: LineItemTaxAtumInterface[];
    meta_data?: MetaDataAtumInterface[];
}
