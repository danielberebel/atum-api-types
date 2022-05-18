import { LineItemAtumInterface } from './line-item-atum.interface';

export interface RefundAtumInterface {
    readonly id: number; // Unique identifier for the resource

    // total: string; // negative float

    readonly date_created: string; // The date the order refund was created, in the site's timezone
    readonly date_created_gmt: string; // The date the order refund was created, as GMT
    amount: string; // Refund amount.
    reason: string; // Reason for refund.
    refunded_by: number; // User ID of user who created the refund.
    readonly refunded_payment: boolean; // If the payment was refunded via the API. See api_refund
    meta_data: []; // Meta data. See Order refund - Meta data properties
    line_items: LineItemAtumInterface[]; // Line items data. See Order refund - Line items properties
    api_refund: boolean; // When true, the payment gateway API is used to generate the refund. Default is true.

    order: number; // from passed url id
}
