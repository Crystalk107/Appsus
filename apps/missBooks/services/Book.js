

export default class Book{
    constructor(id, title, subtitle, authors, publishedDate, description, pageCount, categories, thumbnail, language, amount, currencyCode, isOnSale){
        this.id = id;
        this.title = title;
        this.subtitle = subtitle;
        this.authors = [authors];
        this.publishedDate = publishedDate;
        this.description = description;
        this.pageCount = pageCount;
        this.categories = [categories];
        this.thumbnail = thumbnail;
        this.language = language;
        this.listPrice = {amount, currencyCode, isOnSale};

        
    }
}