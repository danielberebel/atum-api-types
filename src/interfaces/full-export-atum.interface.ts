
export interface FullExportAtumInterface {
    /**
     * @description Describe if export is success created
     */
    success: boolean;

    /**
     * @describe give an object  with filenames as keys and request data as value
     */
    data: Record<string, DataFullExportAtumInterface>;
}

export interface DataFullExportAtumInterface<T = any> {
    endpoint: string;
    total_pages: number;
    page: number;
    per_page: number;
    date: string;
    results: T[];
}
