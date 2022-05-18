import { MetaDataAtumInterface } from './meta-data-atum.interface';
import { ArrayItemReference } from '../item.interface';

export interface InventoryAtumInterface {
    id: number; // Unique identifier for the inventory.READ-ONLY
    product_id: number; // The product ID this inventory is linked to.READ-ONLY
    name: string; // The inventory name.MANDATORY
    priority: number; // The priority index within the list of the product inventories' list.
    is_main: boolean; // Whether the current inventory is the main inventory.
    inventory_date: string; // The date the inventory was created, as GMT.
    lot: string; // The LOT/BATCH number.
    write_off: boolean; // Number of published products for the resource.
    region: ArrayItemReference; // If the region restriction mode is enabled, it'll show the list of countries or shipping zones linked to the inventory.
    location: ArrayItemReference; // ATUM Location(s) linked to the inventory.
    bbe_date: string; // The Best-Before-Expiry date for the inventory, as GMT.
    expiry_days: number; // The expiry days before the BBE date when the product should go out of stock.
    inbound_stock: number; // Inventory's inbound stock.READ-ONLY
    stock_on_hold: number; // Inventory's stock on hold.READ-ONLY
    sold_today: number; // Inventory units sold today.READ-ONLY
    sales_last_days: number; // Inventory sales the last 14 days.READ-ONLY
    reserved_stock: number; // Inventory stock set 'reserved_stock' within Inventory Logs.READ-ONLY
    customer_returns: number; // Inventory stock set as 'customer returns' within Inventory Logs.READ-ONLY
    warehouse_damage: number; // Stock set as 'warehouse damage' within Inventory Logs.READ-ONLY
    lost_in_post: number; // Stock set as 'lost in post' within Inventory Logs.READ-ONLY
    other_logs: number; // Stock set as 'other' within Inventory Logs.READ-ONLY
    out_stock_days: number; // The number of days that the product is Out of stock.READ-ONLY
    lost_sales: number; // Product lost sales.READ-ONLY
    update_date: string; // Last date when the inventory data was calculated and saved for this product, as GMT.
    meta_data?: InventoryMetaDataAtumInterface;
}

export interface InventoryMetaDataAtumInterface {
    //extends MetaDataAtumInterface
    sku?: string; // Inventory's SKU.
    barcode?: string;
    manage_stock?: boolean; // Whether the stock is being managed for the inventory.
    stock_quantity?: number; // Inventory's stock amount.
    // backorders?: boolean; // Whether the back orders are allowed.
    backorders?: string;
    stock_status?: string; // Inventory's stock status.
    supplier_id?: number; // Inventory supplier's ID.
    supplier_sku?: string; // Inventory supplier's SKU.
    out_stock_threshold?: number; // 	Inventory's out of stock threshold.
    purchase_price?: string; // Inventory's price.
    price?: number;
    regular_price?: string; // Inventory's regular price.
    sale_price?: string; // Inventory's sale price.
    date_on_sale_from?: string; // The date when starts the sale price, as GMT.
    date_on_sale_to?: string; // The date when ends the sale price, as GMT.
    out_stock_date?: string; // The date when the inventory run out of stock, as GMT.
}

// Quey Params
export interface ProductInventoryQueryParamsAtumInterface {
    after?: string; // Limit response to resources created after a given ISO8601 compliant date.
    before?: string; // 	Limit response to resources created before a given ISO8601 compliant date.
    exclude?: number[]; // Ensure result set excludes specific IDs.
    include?: number[]; // 	Limit result set excludes specific IDs.
    offset?: number; // 	Offset the result set by a specific number of items.
    order?: string; // Order sort attribute ascending or descending. Options: asc and desc. Default is asc.
    orderby?: string; // 	Sort collection by object attribute. Options: priority, inventory_date, id, name and bbe_date. Default is id.
    name?: string; // Limit result set to inventories with a specific name.
    exclude_write_off?: boolean; // 	Exclude from result set the inventories that were marked as 'write off'. Default is true.
    lot?: string; // Limit result set to inventories with the specified LOT/BATCH number.
    countries?: string; // If the country restriction mode is enabled, limit the result set to inventories linked to the specified country.
    // shipping_zone?: string; // If shipping zone mode is enabled, limit the result set to inventories linked to the specified shipping zone.
}

export interface InventoryQueryParamsAtumInterface extends ProductInventoryQueryParamsAtumInterface {
    page?: number; // Current page of the collection. Default is 1.
    per_page?: number; // Maximum number of items to be returned in result set. Default is 10.
    product?: number; // Filter the results by the specified product ID.
    search?: string; // Limit results to those matching a string.
}

export interface BomAtumInterface {
    id?: number;
    bom_id?: number;
    bom_type?: string;
    qty?: number;
}

export interface MultiInventoryAtumInterface {
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
