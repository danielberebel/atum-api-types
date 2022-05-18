import { MetaDataAtumInterface } from './meta-data-atum.interface';

export interface CommentAtumInterface {
    id?: number;

    author?: number;
    author_email?: string;
    author_ip?: string;
    author_name?: string;
    author_url?: number;
    author_user_agent?: string;
    author_avatar_urls?: { id: number; src: string }[];

    content?: any | { rendered?: string };

    date?: string;
    date_gmt?: string;

    link?: string;
    parent?: number;
    post?: number;

    status?: string;
    type?: string;

    meta?: MetaDataAtumInterface[];

    // for create note
    added_by_user?: boolean;
    customer_note?: boolean;
    post_type?: string;
}
