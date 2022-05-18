import { ShippingLineAtumInterface } from './shipping-line-atum.interface';
import { LineItemAtumInterface } from './line-item-atum.interface';
import { TaxLineAtumInterface } from './tax-atum.interface';
import { FeeLineAtumInterface } from './fee-line-atum.interface';
import { MultiInventoryAtumInterface, BomAtumInterface } from './inventory-atum.interface';
import { MetaDataAtumInterface } from './meta-data-atum.interface';
import { OrderNoteWcInterface } from '../wc/order-wc.interface';

export interface InventoryLogAtumInterface {
    id?: number;
    status?: string;
    currency?: string;
    prices_include_tax?: boolean;
    date_created?: string;
    date_modified?: string;
    discount_total?: string;
    discount_tax?: string;
    shipping_total?: string;
    shipping_tax?: string;
    cart_tax?: string;
    total?: string; // float
    total_tax?: string; // float
    date_completed?: string;
    line_items?: InventoryLogLineItemAtumInterface[];
    tax_lines?: InventoryLogTaxLineAtumInterface[];
    shipping_lines?: InventoryLogShippingLineAtumInterface[];
    fee_lines?: InventoryLogFeeLineAtumInterface[];
    description?: string;
    type: string;
    order?: number;
    shipping_company?: string;
    date_created_gmt?: string;
    date_modified_gmt?: string;
    date_completed_gmt?: string;
    reservation_date?: string;
    reservation_date_gmt?: string;
    custom_name?: string;
    damage_date?: string;
    damage_date_gmt?: string;
    return_date?: string;
    return_date_gmt?: string;
}

// LineItem
export interface InventoryLogLineItemAtumInterface extends LineItemAtumInterface {
    // LineItem
    id?: number; // READ-ONLY
    name?: string;
    product_id?: number;
    variation_id?: number;
    quantity?: number;
    tax_class?: string; // Slug of the tax class of product.
    subtotal?: string; // Line subtotal (before discounts).
    subtotal_tax?: string; // Line subtotal tax (before discounts). // READ-ONLY
    total?: string; // Line total (after discounts).
    total_tax?: string; // Line total tax (after discounts).READ-ONLY
    taxes?: InventoryLogTaxLineAtumInterface[]; // Line taxes. See Inventory Log - Taxes propertiesREAD-ONLY
    meta_data?: InventoryLogMetaDataAtumInterface[]; // Meta data. See Inventory Log - Meta data properties
    sku?: string; // READ-ONLY
    price?: string; // READ-ONLY
    mi_inventories?: InventoryLogMultiInventoryAtumInterface[]; // MULTI-INVENTORY
    bom_items?: InventoryLogBomAtumInterface[]; // READ-ONLY
}

// TaxLine
export interface InventoryLogTaxLineAtumInterface extends TaxLineAtumInterface {
    id?: number; // READ-ONLY
    rate_code?: string; // 	READ-ONLY
    rate_id?: number; // READ-ONLY
    label?: string; // 	READ-ONLY
    compound?: boolean; // READ-ONLY
    tax_total?: string; // 	Tax total (not including shipping taxes). //READ-ONLY
    shipping_tax_total?: string; // 	READ-ONLY
    meta_data?: InventoryLogMetaDataAtumInterface[];
}

// ShippingLine
export interface InventoryLogShippingLineAtumInterface extends ShippingLineAtumInterface {
    id?: number; // READ-ONLY
    method_title?: string;
    method_id?: string;
    total: string; // 	Line total (after discounts).
    total_tax?: string; // 	Line total tax (after discounts). // READ-ONLY
    taxes?: InventoryLogTaxLineAtumInterface[]; // READ-ONLY
    meta_data?: InventoryLogMetaDataAtumInterface[];
}

// FeeLine
export interface InventoryLogFeeLineAtumInterface extends FeeLineAtumInterface {
    id?: number; // READ-ONLY
    name?: string;
    tax_class?: string;
    tax_status?: string;
    total: string; // 	Line total (after discounts).
    total_tax?: string; // 	Line total tax (after discounts). // READ-ONLY
    taxes?: InventoryLogTaxLineAtumInterface[]; // READ-ONLY
    meta_data?: InventoryLogMetaDataAtumInterface[];
}

// BOM
export interface InventoryLogBomAtumInterface extends BomAtumInterface {
    id?: number; // READ-ONLY
    bom_id?: number; // The BOM product ID associated to the BOM order item. // READ-ONLY
    bom_type?: string; // The BOM product type. Options: product_part and raw_material. // READ-ONLY
    qty?: number; // The quantity of the specified BOM that is used on the order item. // READ-ONLY
}

// MetaData
export interface InventoryLogMetaDataAtumInterface extends MetaDataAtumInterface {
    id?: number; // READ-ONLY

    key: string;
    value: string;
}

// MultiInventory
export interface InventoryLogMultiInventoryAtumInterface extends MultiInventoryAtumInterface {
    id?: number;
    delete?: boolean; // Set to true to delete the order item inventory with the specified inventory ID. // WRITE-ONLY
    order_item_id?: number; // The order item ID linked to this order item inventory.
    inventory_id?: number; // 	The inventory ID linked to the order item.
    product_id?: number; // 	The product ID from where the inventory comes.
    qty?: number; // 	The quantity of the specified inventory that is used on the order item.
    order_type?: number; // 	The type of order (WC Order = 1, Purchase Order = 2, Inventory Log = 3).
    subtotal?: number; // 	Order item inventory's subtotal.
    total?: number; // 	Order item inventory's total.
    refund_qty?: number; // 	Order item inventory's refund quantity.
    refund_total?: number; // 	Order item inventory's refund total.
}
