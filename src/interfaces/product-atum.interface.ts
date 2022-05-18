import { ProductWcInterface } from '../wc';
import { ImageAtumInterface } from './image-atum.interface';
import {
    BooleanStringType,
    InventorySortingModeType,
    InventoryIterationType,
    SelectableInventoriesModeType,
    GlobalBooleanStringType
} from '../../types';
import { MetaDataAtumInterface } from './meta-data-atum.interface';

type OmitProperties = 'images' | 'categories' | 'variations' | 'attributes'; // ignore to change type

export interface ProductAtumInterface extends Omit<ProductWcInterface, OmitProperties> {
    id?: number;
    name: string;
    slug: string;
    permalink?: string; // READ-ONLY
    date_created?: string; // READ-ONLY
    date_created_gmt?: string; // READ-ONLY

    date_modified?: string; // READ-ONLY
    date_modified_gmt?: string; // READ-ONLY

    type: string;
    status: string;
    featured: boolean;
    catalog_visibility: string;
    description: string;
    short_description?: string;

    sku: string;

    price?: string; // READ-ONLY
    regular_price?: string;
    sale_price?: string;
    date_on_sale_from?: string;
    date_on_sale_from_gmt?: string;
    date_on_sale_to?: string;
    date_on_sale_to_gmt?: string;
    price_html?: string; // READ-ONLY

    on_sale?: boolean; // READ-ONLY
    purchasable?: boolean; // READ-ONLY
    total_sales?: number; // READ-ONLY

    virtual?: boolean;
    downloadable?: boolean;
    downloads?: Partial<ProductDownloadAtumInterface>[];
    download_limit?: number;
    download_expiry?: number;

    external_url?: string;
    button_text?: string;

    tax_status?: string;
    tax_class?: string;

    manage_stock?: boolean;
    stock_quantity?: number;
    low_stock_amount?: number;
    stock_status?: string;
    backorders?: string;
    backorders_allowed?: boolean; // READ-ONLY
    backordered?: boolean; // READ-ONLY

    sold_individually?: boolean;
    weight?: number | string;
    dimensions?: ProductDimensionAtumInterface;

    shipping_required?: boolean; // READ-ONLY
    shipping_taxable?: boolean; // READ-ONLY
    shipping_class?: string;
    shipping_class_id?: number; // READ-ONLY

    reviews_allowed: boolean;
    average_rating?: string;
    rating_count?: number;

    related_ids?: number[]; // products ids
    upsell_ids?: number[];
    cross_sell_ids?: number[];

    parent_id?: number;

    purchase_note?: string;

    categories: Partial<ProductCategoryAtumInterface>[];
    tags: Partial<ProductTagAtumInterface>[];
    images: Partial<ProductImageAtumInterface>[];
    attributes: Partial<ProductAttributeAtumInterface>[];
    default_attributes?: Partial<ProductDefaultAttributeAtumInterface>[];
    variations?: number[]; // READ-ONLY
    grouped_products?: number[];
    menu_order: number;
    meta_data?: ProductMetaDataAtumInterface[];

    // Atum
    purchase_price?: string;

    supplier_id?: number;
    supplier_sku?: string;

    atum_controlled?: boolean;
    out_stock_date?: string;
    out_stock_threshold?: number;
    inheritable?: boolean;

    // calculated properties
    inbound_stock?: number;
    stock_on_hold?: number;
    sold_today?: number;
    sales_last_days?: number;
    reserved_stock?: number;
    customer_returns?: number;
    warehouse_damage?: number;
    lost_in_post?: number;
    other_logs?: number;

    out_stock_days?: number;
    lost_sales?: number;
    has_location: boolean;
    update_date?: string;
    atum_locations: Partial<ProductLocationAtumInterface>[];

    // Multi Inventory
    mi_inventories?: number[]; // READ-ONLY
    multi_inventory: GlobalBooleanStringType; //  'yes' | 'no' | 'global' Global was null
    inventory_sorting_mode?: InventorySortingModeType;
    inventory_iteration?: InventoryIterationType;
    expirable_inventories?: GlobalBooleanStringType;
    price_per_inventory?: GlobalBooleanStringType;

    // Product Levels
    linked_bom?: LinkedBOMAtumInterface[];
    is_bom?: boolean;
    sync_purchase_price?: boolean;

    // Bom Associated fields
    bom_sellable?: boolean;
    minimum_threshold?: number;
    available_to_purchase?: number;
    selling_priority?: number;
    calculated_stock?: number;

    // missing
    upsells?: number[];
    crossSells?: number[];

    /**
     * @description when product has low stock and need restock
     */
    restock_status?: boolean;

    low_stock_threshold?: number;
    calc_back_orders?: number;
    inventory_selection_mode?: SelectableInventoriesModeType;
    selectable_inventories?: GlobalBooleanStringType;
    trash?: boolean;
    deleted?: boolean;

    // Stock Takes
    barcode?: string;

    // to check changes
    gallery?: any;
    image?: any;
}

export interface ProductDefaultAttributeAtumInterface {
    id: number;
    name: string;
    option: string;
}

export interface ProductMetaDataAtumInterface extends MetaDataAtumInterface {
    id?: number;
    key: string;
    value: string;
}

export interface ProductLocationAtumInterface {
    id: number;
    name: string;
    slug: string;
}

export interface LinkedBOMAtumInterface {
    bom_id: number;
    bom_type: string;
    qty: string;
    delete: boolean;
}

export interface ProductTagAtumInterface {
    id: number;
    name: string;
    slug: string;
}

export interface ProductCategoryAtumInterface {
    id: number;
    name: string;
    slug: string;
}

export interface ProductDownloadAtumInterface {
    id?: number;
    name: string;
    file: string;
}

export interface ProductImageAtumInterface {
    // extends ImageAtumInterface
    id?: number;
    date_created?: string;
    date_created_gmt?: string;
    date_modified?: string;
    date_modified_gmt?: string;
    src?: string;
    name?: string;
    alt?: string;
}

export interface ProductAttributeAtumInterface {
    id?: number;
    name?: string;
    position?: number;
    visible?: boolean;
    variation?: boolean;
    options?: string[];
    option_ids?: number[];
}

export interface ProductDimensionAtumInterface {
    length: string;
    width: string;
    height: string;
}
