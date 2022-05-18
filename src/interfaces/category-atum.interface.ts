import { ImageAtumInterface, ImageRelationAtumInterface } from './image-atum.interface';
import { CategoryWcInterface } from '../wc';

export interface CategoryAtumInterface extends Partial<Omit<CategoryWcInterface, 'image'>> {
    id: number;
    image: ImageRelationAtumInterface;
    name: string;
    slug: string;
    parent: number;
    display: string;
    count: number;
    deleted?: boolean;
    is_default?: string;
    barcode?: string;
}
