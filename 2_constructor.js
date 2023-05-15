//Constructors

function Book(title, author, year) {
    this.title = title;
    this.author =  author;
    this.year = year;
    this.getSummary = function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;

    }
}

const book1 = new Book('Book one', 'Tero dai', '2069');


console.log(book1.getSummary());