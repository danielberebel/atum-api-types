import { ImageWcInterface } from 'wc-api-types';

type OmitProperties =
  | 'date_created'
  | 'date_created_gmt'
  | 'date_modified'
  | 'date_modified_gmt';

export interface ImageAtumInterface
  extends Partial<Omit<ImageWcInterface, OmitProperties>> {
  id: number;
  name: string;
  slug: string;
  src: string; // url to image location
  alt: string;
  date_created: string;
  date_created_gmt: string;
  date_modified: string;
  date_modified_gmt: string;

  file?: string; // For upload media
}

export interface ImageRelationAtumInterface {
  id?: number;
  date_created?: string; // READ-ONLY
  date_created_gmt?: string; // 	READ-ONLY
  date_modified?: string; // READ-ONLY
  date_modified_gmt?: string; // READ-ONLY
  src?: string;
  name?: string;
  alt?: string;
}
