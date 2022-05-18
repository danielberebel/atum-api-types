import { MetaDataAtumInterface } from './meta-data-atum.interface';
// import { TaxLineAtumInterface } from './tax-atum.interface';

export interface LineItemAtumInterface {
  id?: number;
  name?: string;
  product_id?: number;
  variation_id?: number;
  quantity?: number;
  tax_class?: string;
  subtotal?: string; // float
  subtotal_tax?: string; // float
  total?: string; // float
  total_tax?: string; // float
  taxes?: LineItemTaxAtumInterface[];
  meta_data?: MetaDataAtumInterface[];
  parentId?: string; // for refund line items refers to parent Item
  sku?: string;
  price?: string; // formed total

  deleted?: boolean; // only  write to delete

  mi_inventories?: LineItemInventoryAtumInterface[];
  bom_items?: LineItemBomAtumInterface[];
}

export interface LineItemInventoryAtumInterface {
  id?: number;
  order_item_id?: number; // The order item ID linked to this order item inventory.
  inventory_id?: number; // The inventory ID linked to the order item.
  product_id?: number; // The product ID from where the inventory comes.
  qty?: number; // The quantity of the specified inventory that is used on the order item.
  order_type?: number; // The type of order (WC Order = 1, Purchase Order = 2, Inventory Log = 3).
  subtotal?: number; // Order item inventory's subtotal.
  total?: number; // Order item inventory's total.

  refund_qty?: number; // Order item inventory's refund quantity.
  refund_total?: number; // Order item inventory's refund total.

  deleted?: boolean; // only  write to delete

  extra_data?: string; // json of inventory data when purchase
}

export interface LineItemBomAtumInterface {
  id?: number; // The BOM order item ID. // READ-ONLY   NOT REALLY
  bom_id?: number; // The BOM product ID associated to the BOM order item. // READ-ONLY
  bom_type?: string; // The BOM product type. Options: product_part and raw_material. // READ-ONLY
  qty?: number; // The quantity of the specified BOM that is used on the order item. // READ-ONLY
}

export interface LineItemTaxAtumInterface {
  id?: number; // reference to TaxRate
  total?: string;
  subtotal?: string;
}
