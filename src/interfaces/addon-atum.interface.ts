import { OnlineItemInterface } from '../item.interface';
import { PluginWpInterface } from '../wp/plugin-wp.interface';

export interface AddonAtumInterface extends Partial<OnlineItemInterface>, Partial<PluginWpInterface> {
    key?: string;
    status?: string;
    active?: boolean;
}
