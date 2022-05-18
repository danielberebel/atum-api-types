import { MetaDataAtumInterface } from './meta-data-atum.interface';
import { TaxLineAtumInterface } from './tax-atum.interface';
import { LineItemTaxAtumInterface } from './line-item-atum.interface';

export interface ShippingLineAtumInterface {
    id?: number;
    method_title?: string;
    method_id?: string;
    instance_id?: string;
    total: string; // float
    total_tax?: string; // float
    taxes?: LineItemTaxAtumInterface[];
    meta_data?: MetaDataAtumInterface[];
}
