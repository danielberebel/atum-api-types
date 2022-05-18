import { MetaDataAtumInterface } from './meta-data-atum.interface';
import { ImageRelationAtumInterface } from './image-atum.interface';

export interface SupplierAtumInterface {
    id?: number; // READ-ONLY
    name?: string;
    slug?: string;
    permalink?: string; // READ-ONLY
    date_created?: string; // READ-ONLY
    date_created_gmt?: string; // READ-ONLY
    date_modified?: string; // READ-ONLY
    date_modified_gmt?: string; //READ-ONLY
    status?: string;
    code?: string;
    tax_number?: string;
    phone?: string;
    fax?: string;
    website?: string;
    ordering_url?: string;
    general_email?: string;
    ordering_email?: string;
    description?: string;
    currency?: string;
    address?: string;
    city?: string;
    country?: string;
    state?: string;
    zip_code?: string;
    assigned_to?: number;
    location?: string;
    image?: SupplierImageAtumInterface;
    meta_data?: SupplierMetaDataAtumInterface[];
    barcode?: string;
}

export interface SupplierImageAtumInterface extends ImageRelationAtumInterface {
    id?: number;
    date_created?: string; // READ-ONLY
    date_created_gmt?: string; // 	READ-ONLY
    date_modified?: string; // READ-ONLY
    date_modified_gmt?: string; // READ-ONLY
    src?: string;
    name?: string;
    alt?: string;
}

export interface SupplierMetaDataAtumInterface extends MetaDataAtumInterface {
    id?: number; // READ-ONLY
    key: string;
    value: string;
}
