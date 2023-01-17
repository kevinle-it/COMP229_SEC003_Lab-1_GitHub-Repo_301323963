const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map(n => n * n);
console.log(squares);

const evens = [];
numbers.forEach(n => {
  if (n % 2 === 0) {
    evens.push(n);
  }
});
console.log(evens);

const author = {
  fullName: "Bob Alice",
  books: [],
  printBooks() {
    this.books.forEach(book => console.log(book + ' by ' + this.fullName));
  }
};
author.printBooks();
