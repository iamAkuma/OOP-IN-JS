// const s = 'hello';
// const s1 = new String('Hello');
// console.log(typeof s);
// console.log(typeof s1);
// console.log(navigator.appVersion);
// console.log(window);

//Object Literal
const book1 = {
    title: 'Book One',
    author: 'Tero Dai',
    year: '2069',
    getSummary: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};

const book2 = {
    title: 'Book Two',
    author: 'Tero Daju',
    year: '2069',
    getSummary: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};
console.log(book2.getSummary());
console.log(Object.values(book2));
console.log(Object.keys(book2));