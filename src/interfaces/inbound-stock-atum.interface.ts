export interface InboundStockAtumInterface {
    id: number;
    name: string;
    type: string;
    sku: string;
    inbound_stock: number;
    date_ordered: string;
    date_on_sale_from_gmt: string;
    date_expected: string;
    date_expected_gmt: string;
    purchase_order: number;
}
