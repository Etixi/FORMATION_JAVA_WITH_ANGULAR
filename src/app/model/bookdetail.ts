import { Category } from "./category";

export class BookDetail {
    id!: number;
    title!: string;
    isbn!: string;
    overview!: string;
    release!: Date;
    price!: number;
    imageId!: number;
    category!: Category;
    authors!: any[];
    tags!: string[];

     constructor(id: number, 
                title:string,
                isbn: string,
                overview: string,
                release: Date,
                price: number,
                imageId: number,
                category: Category,
                authors: any[],
                tags: string[]){
        this.id=id;
        this.title = title;
        this.isbn = isbn;
        this.overview = overview;
        this.release = release;
        this.price = price;
        this.imageId = imageId;
        this.category = category;
        this.authors = authors;
        this.tags = tags;
    }
}

