class Book {
    constructor(title, author, year) {
        this.author = author;
        this.title = title;
        this.year =year;
    }
    getSummary(){
        return `${this.title} was written by
     ${this.author} in ${this.year}`;
    }
}

//Magazine SUbclass
class Magazine extends Book {
    constructor(title, author, year, month){
        super(title, author, year);
        this.month = month;
    }
}

//instantiate magazines
const mag1 = new Magazine('MagOne', 'Tero bhai', '2020', 'Jan');
console.log(mag1.getSummary());
