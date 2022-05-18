import { OrderNoteWcInterface } from '../wc/order-wc.interface';
import { MetaDataAtumInterface } from './meta-data-atum.interface';

export interface NoteAtumInterface extends OrderNoteWcInterface {
    // extend properties
    meta_data?: MetaDataAtumInterface[];
}
