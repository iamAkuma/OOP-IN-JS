//Constructors

function Book(title, author, year) {
    this.title = title;
    this.author =  author;
    this.year = year;
}

//getSummary
Book.prototype.getSummary = function(){
    return `${this.title} was written by ${this.author} in ${this.year}`;

}
//getAge
Book.prototype.getAge = function(){
    const years = new Date().getFullYear() -this.year;
    return `${this.title} is ${years} years old`;
};

//revise/change year
Book.prototype.revise = function(newYear) {
    this.year = newYear;
    this.revised = true;
}
const book1 = new Book('Book one', 'Tero dai', '2069');


console.log(book1.getAge());
book1.revise('2070');
console.log(book1);