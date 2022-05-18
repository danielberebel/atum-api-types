import { MetaDataAtumInterface } from './meta-data-atum.interface';
import { TaxLineAtumInterface } from './tax-atum.interface';
import { FeeLineAtumInterface } from './fee-line-atum.interface';
import { ShippingLineAtumInterface } from './shipping-line-atum.interface';
import { LineItemAtumInterface } from './line-item-atum.interface';
import {
  BomAtumInterface,
  MultiInventoryAtumInterface,
} from './inventory-atum.interface';
// import { OrderNoteWcInterface } from 'wc-api-types';
import { BooleanStringType } from '../types';

export interface PurchaseOrderAtumInterface {
  id?: number; // Unique // READ-ONLY
  status?: string;
  currency?: string;
  date_created?: string; // READ-ONLY
  date_created_gmt?: string; // READ-ONLY
  date_modified?: string; // READ-ONLY
  date_modified_gmt?: string; // READ-ONLY
  discount_total?: string; // READ-ONLY
  discount_tax?: string; // READ-ONLY
  shipping_total?: string; // READ-ONLY
  shipping_tax?: string; // READ-ONLY
  cart_tax?: string; // READ-ONLY
  total?: string; //  READ-ONLY
  total_tax?: string; //  READ-ONLY
  prices_include_tax?: boolean; // READ-ONLY
  date_completed?: string; // READ-ONLY
  date_completed_gmt?: string; // READ-ONLY
  stock_changed?: BooleanStringType; // Prevent change stock when persist
  supplier?: number;
  multiple_suppliers?: boolean;
  date_expected?: string;
  date_expected_gmt?: string;
  line_items?: PurchaseOrderLineItemAtumInterface[];
  tax_lines?: PurchaseOrderTaxLineAtumInterface[]; // READ-ONLY
  shipping_lines?: PurchaseOrderShippingLineAtumInterface[];
  fee_lines?: PurchaseOrderFeeLineAtumInterface[];
  meta_data?: PurchaseOrderMetaDataAtumInterface[];
  description?: string;
}

// MetaData
export interface PurchaseOrderMetaDataAtumInterface
  extends MetaDataAtumInterface {
  id?: number; // READ-ONLY
  key: string;
  value: string;
}

// FeeLine
export interface PurchaseOrderFeeLineAtumInterface
  extends FeeLineAtumInterface {
  id?: number; // READ-ONLY
  name?: string;
  tax_class?: string;
  tax_status?: string;
  total: string; // 	Line total (after discounts).
  total_tax?: string; // 	Line total tax (after discounts). // READ-ONLY
  taxes?: PurchaseOrderTaxLineAtumInterface[]; // READ-ONLY
  meta_data?: PurchaseOrderMetaDataAtumInterface[];
}

// TaxLine
export interface PurchaseOrderTaxLineAtumInterface
  extends TaxLineAtumInterface {
  id?: number; // READ-ONLY
  rate_code?: string; // 	READ-ONLY
  rate_id?: number; // READ-ONLY
  label?: string; // 	READ-ONLY
  compound?: boolean; // READ-ONLY
  tax_total?: string; // 	Tax total (not including shipping taxes). //READ-ONLY
  shipping_tax_total?: string; // 	READ-ONLY
  meta_data?: PurchaseOrderMetaDataAtumInterface[];
}

// ShippingLine
export interface PurchaseOrderShippingLineAtumInterface
  extends ShippingLineAtumInterface {
  id?: number; // READ-ONLY
  method_title?: string;
  method_id?: string;
  total: string; // 	Line total (after discounts).
  total_tax?: string; // 	Line total tax (after discounts). // READ-ONLY
  taxes?: PurchaseOrderTaxLineAtumInterface[]; // READ-ONLY
  meta_data?: PurchaseOrderMetaDataAtumInterface[];
}

// LineItem
export interface PurchaseOrderLineItemAtumInterface
  extends LineItemAtumInterface {
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
  taxes?: PurchaseOrderTaxLineAtumInterface[]; // Line taxes. See Inventory Log - Taxes propertiesREAD-ONLY
  meta_data?: PurchaseOrderMetaDataAtumInterface[]; // Meta data. See Inventory Log - Meta data properties
  sku?: string; // READ-ONLY
  price?: string; // READ-ONLY
  mi_inventories?: MultiInventoryAtumInterface[]; // MULTI-INVENTORY
  bom_items?: BomAtumInterface[]; // READ-ONLY
}
