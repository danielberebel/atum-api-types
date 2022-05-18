import {
  SettingOptionWcInterface,
  SettingsGroupWcInterface,
  SettingsWcInterface,
} from 'wc-api-types';

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

export interface SettingsAtumMiInterface {
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
}

export interface SettingsAtumPlInterface {
  pl_bom_stock_control: string;
  pl_default_bom_selling: string;
  pl_bom_item_real_cost: string;
  pl_manufacturing_posts_per_page: number;
  manufacturing_sale_days: number;
}

export interface SettingsAtumAlInterface {
  al_show_avatar: string;
  al_logs_per_page: number;
  al_relative_date: string;
}

export interface SettingsAtumInterface {
  wc: SettingsWcInterface;
  atum: {
    general: {
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
      gross_profit: string;
      profit_margin: number;
    };
    storeDetails: {
      company_name: string;
      tax_number: string;
      address_1: string;
      address_2: string;
      city: string;
      country: string;
      zip: string;
      same_ship_address: 'yes' | 'no';
      ship_to: string;
      ship_address_1: string;
      ship_address_2: string;
      ship_city: string;
      ship_country: string;
      ship_zip: string;
      site_icon: number;
    };
    moduleManager: {
      dashboard_module: string;
      stock_central_module: string;
      inventory_logs_module: string;
      purchase_orders_module: string;
      data_export_module: string;
      /**
       * @description not usable on app
       */
      visual_settings_module?: string;
    };
    actionLogs?: SettingsAtumAlInterface;
    multiInventory?: SettingsAtumMiInterface;
    productLevels?: SettingsAtumPlInterface;
  };
}

export interface StoreSettingsAtumInterface extends SettingsAtumInterface {
  id?: number;
  slug?: string;
  trash?: boolean;
  deleted?: boolean;
}
