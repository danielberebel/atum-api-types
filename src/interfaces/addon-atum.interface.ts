import { OnlineItemInterface } from '../item.interface';
import { PluginWpInterface } from '../wp/plugin-wp.interface';
import { plugin } from 'wp-types';
export interface AddonAtumInterface extends Partial<OnlineItemInterface>, Partial<PluginWpInterface> {
    key?: string;
    status?: string;
}
