import {
    BooleanStringType,
    GlobalBooleanStringType,
    InventoryIterationType,
    InventorySortingModeType,
    SelectableInventoriesModeType,
} from '../../types';

export interface VariationAtumInterface {
    id?: number; // READ-ONLY
    slug?: string;
    product_id?: number; // Create-Only
    date_created?: string; // READ-ONLY
    date_created_gmt?: string; // READ-ONLY
    date_modified?: string; // READ-ONLY
    date_modified_gmt?: string; // READ-ONLY
    description?: string; // READ-ONLY
    permalink?: string; // READ-ONLY
    sku?: string;
    price?: string; // READ-ONLY
    regular_price?: string;
    sale_price?: string;
    date_on_sale_from?: string;
    date_on_sale_from_gmt?: string;
    date_on_sale_to?: string;
    date_on_sale_to_gmt?: string;
    on_sale?: boolean; // READ-ONLY
    status?: string;
    purchasable?: boolean; // READ-ONLY
    virtual?: boolean;
    downloadable?: boolean;
    downloads?: Partial<VariationDownloadAtumInterface>[];
    download_limit?: number;
    download_expiry?: number;
    tax_status?: string;
    tax_class?: string;
    manage_stock?: boolean;
    stock_quantity?: number;
    stock_status?: string;
    backorders?: string;
    backorders_allowed?: boolean; // READ-ONLY
    backordered?: boolean; // READ-ONLY
    weight?: string;
    dimensions?: VariationDimensionAtumInterface;
    shipping_class?: string;
    shipping_class_id?: string; // READ-ONLY
    image?: VariationImageAtumInterface;
    attributes?: VariationAttributeAtumInterface[];
    menu_order?: number;
    meta_data?: VariationMetaDataAtumInterface[];

    // atum properties
    purchase_price?: string;
    supplier_id?: number;
    supplier_sku?: string;
    atum_controlled?: boolean;
    out_stock_date?: string;
    out_stock_threshold?: number;

    // metrics
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

    // Multi Inventory
    mi_inventories?: number[]; // READ-ONLY
    multi_inventory: GlobalBooleanStringType; //  'yes' | 'no' | 'global' Global was null
    inventory_sorting_mode?: InventorySortingModeType;
    inventory_iteration?: InventoryIterationType;
    expirable_inventories?: GlobalBooleanStringType;
    price_per_inventory?: GlobalBooleanStringType;

    low_stock_threshold?: number;
    calc_back_orders?: number;
    inventory_selection_mode?: SelectableInventoriesModeType;
    selectable_inventories?: GlobalBooleanStringType;

    // product levels properties
    linked_bom?: VariationBOMAtumInterface[];
    bom_sellable?: number[];
    minimum_threshold?: number;
    available_to_purchase?: number;
    selling_priority?: number;
    calculated_stock?: number;
    sync_purchase_price?: boolean;
}

export interface VariationDownloadAtumInterface {
    id?: number;
    name: string;
    file: string;
}

export interface VariationDimensionAtumInterface {
    length?: string;
    width?: string;
    height?: string;
}

export interface VariationImageAtumInterface {
    id: number;
    date_created?: string;
    date_created_gmt?: string;
    date_modified?: string;
    date_modified_gmt?: string;
    src?: string;
    name?: string;
    alt?: string;
}

export interface VariationAttributeAtumInterface {
    id?: number;
    name: string;
    option: string;
}

export interface VariationMetaDataAtumInterface {
    id?: number;
    key: string;
    value: string;
}

export interface VariationBOMAtumInterface {
    bom_id: number;
    bom_type: string;
    qty: number;
    delete: boolean;
}
