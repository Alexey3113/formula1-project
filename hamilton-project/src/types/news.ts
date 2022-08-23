export interface INewsItem {
    id: number;
    title: string;
    description: string;
    miniTitle: string;
    img: string;
}

export interface INews {
    news: INewsItem[];

}
