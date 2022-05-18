import { PluginWpInterface } from 'wp-api-types';

export interface AddonAtumInterface extends Partial<PluginWpInterface> {
  id?: number;
  slug?: string;
  trash?: boolean;
  deleted?: boolean;

  key?: string;
  status?: string;
  active?: boolean;
}
