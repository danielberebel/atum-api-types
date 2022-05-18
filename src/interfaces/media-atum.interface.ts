export interface MediaAtumInterface {
    id?: number;
    name?: string;
    slug?: string;
    source_url?: string; // url to image location
    alt_text?: string;
    media_type?: string;
    date?: string;
    date_gmt?: string;
    modified?: string;
    modified_gmt?: string;
    media_details?: { sizes?: { medium?: { source_url?: string } } };

    file?: string; // For upload media
    src?: string;
    alt?: string;
    _id?: string;
}
