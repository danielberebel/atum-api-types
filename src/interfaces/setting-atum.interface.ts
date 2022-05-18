import { ArrayItemReference } from '../item.interface';
import { SettingOptionWcInterface, SettingsGroupWcInterface } from '../wc/setting-wc.interface';
import {
    GeneralWcSettingsInterface,
    ProductsWcSettingsInterface,
    TaxWcSettingsInterface,
    AdvancedWcSettingsInterface,
    GeneralAtumSettingsInterface,
    StoreDetailsAtumSettingsInterface,
    ModuleManagerAtumSettingsInterface,
    AtumLogsAtumSettingsInterface,
    ProductLevelsAtumSettingsInterface
} from '..';
import { BooleanStringType } from '../../types/general.type';

export interface SettingsGroupAtumInterface extends SettingsGroupWcInterface {
    id: string;
    label: string;
    description: string;
    sections: string;
}

export interface SettingOptionAtumInterface extends SettingOptionWcInterface {
    // all read
    id: string;

    group?: string;
    group_id?: string;

    section: string;
    name: string;
    desc: string;
    value: any;
    default: any;
    type: string;
    options: {};
    dependency: object;
    confirm_msg: string;
}

export interface SettingsAtumInterface {
    general: {
        woocommerce_store_address: string;
        woocommerce_store_address_2: string;
        woocommerce_store_city: string;
        woocommerce_default_country: string;
        woocommerce_store_postcode: string;
        woocommerce_allowed_countries: string;
        woocommerce_all_except_countries: string[];
        woocommerce_specific_allowed_countries: string[];
        woocommerce_ship_to_countries: string;
        woocommerce_specific_ship_to_countries: string[];
        woocommerce_default_customer_address: string;
        woocommerce_calc_taxes: string;
        woocommerce_enable_coupons: string;
        woocommerce_calc_discounts_sequentially: string;
        woocommerce_currency: string;
        woocommerce_currency_pos: string;
        woocommerce_price_thousand_sep: string;
        woocommerce_price_decimal_sep: string;
        woocommerce_price_num_decimals: string;
    };
    admin: {
        woocommerce_excluded_report_order_statuses: string[];
        woocommerce_actionable_order_statuses: string[];
        woocommerce_default_date_range: string;
    };
    products: {
        woocommerce_shop_page_id: string;
        woocommerce_cart_redirect_after_add: string;
        woocommerce_enable_ajax_add_to_cart: string;
        woocommerce_placeholder_image: string;
        woocommerce_weight_unit: string;
        woocommerce_dimension_unit: string;
        woocommerce_enable_reviews: string;
        woocommerce_review_rating_verification_label: string;
        woocommerce_review_rating_verification_required: string;
        woocommerce_enable_review_rating: string;
        woocommerce_review_rating_required: string;
        woocommerce_manage_stock: string;
        woocommerce_hold_stock_minutes: string;
        woocommerce_notify_low_stock: string;
        woocommerce_notify_no_stock: string;
        woocommerce_stock_email_recipient: string;
        woocommerce_notify_low_stock_amount: string;
        woocommerce_notify_no_stock_amount: string;
        woocommerce_hide_out_of_stock_items: string;
        woocommerce_stock_format: string;
        woocommerce_file_download_method: string;
        woocommerce_downloads_require_login: string;
        woocommerce_downloads_grant_access_after_payment: string;
        woocommerce_downloads_add_hash_to_filename: string;
    };
    tax: {
        woocommerce_prices_include_tax: string;
        woocommerce_tax_based_on: string;
        woocommerce_shipping_tax_class: string;
        woocommerce_tax_round_at_subtotal: string;
        woocommerce_tax_classes: string;
        woocommerce_tax_display_shop: string;
        woocommerce_tax_display_cart: string;
        woocommerce_price_display_suffix: string;
        woocommerce_tax_total_display: string;
    };
    advanced: {
        woocommerce_cart_page_id: string;
        woocommerce_checkout_page_id: string;
        woocommerce_myaccount_page_id: string;
        woocommerce_terms_page_id: string;
        woocommerce_checkout_pay_endpoint: string;
        woocommerce_checkout_order_received_endpoint: string;
        woocommerce_myaccount_add_payment_method_endpoint: string;
        woocommerce_myaccount_delete_payment_method_endpoint: string;
        woocommerce_myaccount_set_default_payment_method_endpoint: string;
        woocommerce_myaccount_orders_endpoint: string;
        woocommerce_myaccount_view_order_endpoint: string;
        woocommerce_myaccount_downloads_endpoint: string;
        woocommerce_myaccount_edit_account_endpoint: string;
        woocommerce_myaccount_edit_address_endpoint: string;
        woocommerce_myaccount_payment_methods_endpoint: string;
        woocommerce_myaccount_lost_password_endpoint: string;
        woocommerce_logout_endpoint: string;
        woocommerce_api_enabled: string;
        woocommerce_allow_tracking: string;
        woocommerce_show_marketplace_suggestions: string;
    };
    atumGeneral: {
        enable_ajax_filter: string;
        enhanced_suppliers_filter: string;
        show_totals: string;
        enable_admin_bar_menu: string;
        show_variations_stock: string;
        out_stock_threshold: string;
        unmanaged_counters: string;
        stock_quantity_decimals: number;
        stock_quantity_step: number;
        sales_last_ndays: number;
        delete_data: string;
    };
    storeDetails: {
        company_name: string;
        tax_number: string;
        address_1: string;
        address_2: string;
        city: string;
        country: string;
        zip: string;
        same_ship_address: BooleanStringType;
        ship_to: string;
        ship_address_1: string;
        ship_address_2: string;
        ship_city: string;
        ship_country: string;
        ship_zip: string;
    };
    moduleManager: {
        dashboard_module: string;
        stock_central_module: string;
        inventory_logs_module: string;
        purchase_orders_module: string;
        data_export_module: string;
        visual_settings_module: string;
    };
    atumLogs: { al_show_avatar: string; al_logs_per_page: number; al_relative_date: string };
    multiInventory: {
        mi_default_multi_inventory: string;
        mi_region_restriction_mode: string;
        mi_default_shipping_zone: string;
        mi_default_zone_for_empty_regions: string;
        mi_default_country: string;
        mi_default_country_for_empty_regions: string;
        mi_default_inventory_sorting_mode: string;
        mi_default_inventory_iteration: string;
        mi_default_expirable_inventories: string;
        mi_expiry_dates_in_cart: string;
        mi_default_price_per_inventory: string;
        mi_list_tables_filter: string;
        mi_batch_tracking: string;
        mi_default_selectable_inventories: string;
        mi_default_selectable_inventories_mode: string;
        mi_use_geoprompt: string;
        mi_geoprompt_required_fields: string[];
        mi_geoprompt_title: string;
        mi_geoprompt_subtitle: string;
        mi_geoprompt_text: string;
        mi_geoprompt_border_radius: number;
        mi_geoprompt_bg_color: string;
        mi_geoprompt_accent_color: string;
        mi_geoprompt_font_color: string;
        mi_geoprompt_exclusions: string;
        mi_geoprompt_privacy_text: string;
    };
    productLevels: {
        pl_bom_stock_control: string;
        pl_default_bom_selling: string;
        pl_bom_item_real_cost: string;
        pl_manufacturing_posts_per_page: number;
        manufacturing_sale_days: number;
    };
}
