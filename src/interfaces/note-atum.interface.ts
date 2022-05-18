import { OrderNoteWcInterface } from 'wc-api-types';
import { MetaDataAtumInterface } from './meta-data-atum.interface';

export interface NoteAtumInterface extends OrderNoteWcInterface {
  // extend properties
  meta_data?: MetaDataAtumInterface[];
}
