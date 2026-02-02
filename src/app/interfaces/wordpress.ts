export interface WPPost {
    id: number;
    date: string;
    date_gmt: string;
    guid: {
        rendered: string;
    };
    modified: string;
    modified_gmt: string;
    slug: string;
    status: string;
    type: string;
    link: string;
    title: {
        rendered: string;
    };
    content: {
        rendered: string;
        protected: boolean;
    };
    excerpt: {
        rendered: string;
        protected: boolean;
    };
    author: number;
    featured_media: number;
    comment_status: string;
    ping_status: string;
    sticky: boolean;
    template: string;
    format: string;
    meta: {
        footnotes: string;
    };
    categories: number[];
    tags: number[];
    class_list: string[];
    _links: {
        self: Array<{
            href: string;
            targetHints?: {
                allow: string[];
            };
        }>;
        collection: Array<{
            href: string;
        }>;
        about: Array<{
            href: string;
        }>;
        author: Array<{
            embeddable: boolean;
            href: string;
        }>;
        replies: Array<{
            embeddable: boolean;
            href: string;
        }>;
        "version-history": Array<{
            count: number;
            href: string;
        }>;
        "predecessor-version": Array<{
            id: number;
            href: string;
        }>;
        "wp:attachment": Array<{
            href: string;
        }>;
        "wp:term": Array<{
            taxonomy: string;
            embeddable: boolean;
            href: string;
        }>;
        curies: Array<{
            name: string;
            href: string;
            templated: boolean;
        }>;
    };
    state?: number | null; // Custom property to track the state of the card
    media_source_url?: string; // Custom property to hold the feature image URL
}


export interface WPMedia {
    id: number;
    date: string;
    date_gmt: string;
    guid: {
        rendered: string;
    };
    modified: string;
    modified_gmt: string;
    slug: string;
    status: string;
    type: string;
    link: string;
    title: {
        rendered: string;
    };
    author: number;
    featured_media: number;
    comment_status: string;
    ping_status: string;
    template: string;
    meta: any[];
    class_list: string[];
    description: {
        rendered: string;
    };
    caption: {
        rendered: string;
    };
    alt_text: string;
    media_type: string;
    mime_type: string;
    media_details: {
        width: number;
        height: number;
        file: string;
        filesize: number;
        sizes: {
            [key: string]: {
                file: string;
                width: number;
                height: number;
                filesize?: number;
                mime_type: string;
                source_url: string;
            };
        };
        image_meta: {
            aperture: string;
            credit: string;
            camera: string;
            caption: string;
            created_timestamp: string;
            copyright: string;
            focal_length: string;
            iso: string;
            shutter_speed: string;
            title: string;
            orientation: string;
            keywords: string[];
        };
    };
    post: number;
    source_url: string;
    _links: {
        self: Array<{ href: string; targetHints?: { allow: string[] } }>;
        collection: Array<{ href: string }>;
        about: Array<{ href: string }>;
        author: Array<{ embeddable: boolean; href: string }>;
        replies: Array<{ embeddable: boolean; href: string }>;
    };
}