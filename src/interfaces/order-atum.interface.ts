import { BillingAtumInterface } from './billing-atum.interface';
import { MetaDataAtumInterface } from './meta-data-atum.interface';
import { LineItemAtumInterface } from './line-item-atum.interface';
import { FeeLineAtumInterface } from './fee-line-atum.interface';
// import { RefundAtumInterface } from './refund-atum.interface';
import { ShippingAtumInterface } from './shipping-atum.interface';
import { ShippingLineAtumInterface } from './shipping-line-atum.interface';
import { TaxLineAtumInterface } from './tax-atum.interface';
// import { OrderNoteWcInterface } from 'wc-api-types';

export interface OrderAtumInterface {
  id?: number;
  parent_id?: number;
  number?: string;
  order_key?: string;
  created_via?: string;
  version?: string;
  status: string;
  currency: string;
  date_created?: string;
  date_created_gmt?: string;
  date_modified?: string;
  date_modified_gmt?: string;
  discount_total?: string;
  discount_tax?: string;
  shipping_total?: string;
  shipping_tax?: string;
  cart_tax?: string;
  total?: string; // float
  total_tax?: string;
  prices_include_tax?: boolean;
  customer_id: number;
  customer_ip_address?: string;
  customer_user_agent?: string;
  customer_note: string;
  billing: BillingAtumInterface;
  shipping: ShippingAtumInterface;
  payment_method: string;
  payment_method_title?: string;
  transaction_id: string;
  date_paid?: string;
  date_paid_gmt?: string;
  date_completed?: string;
  date_completed_gmt?: string;
  cart_hash?: string;
  meta_data: MetaDataAtumInterface[];
  line_items: LineItemAtumInterface[];
  tax_lines: TaxLineAtumInterface[];
  shipping_lines: ShippingLineAtumInterface[];
  fee_lines: FeeLineAtumInterface[];
  coupon_lines?: OrderCouponLinesAtumInterface[];
  refunds: OrderRefundAtumInterface[];
  currency_symbol?: string;
  // notes?: any[]; // api must retrieve
}

export interface OrderCouponLinesAtumInterface {
  id?: number;
  code: string;
  discount: string; // float
  discount_tax: string;
  meta_data?: MetaDataAtumInterface[];
}

export interface OrderRefundAtumInterface {
  id: number;
  reason: string;
  total: string;
}
