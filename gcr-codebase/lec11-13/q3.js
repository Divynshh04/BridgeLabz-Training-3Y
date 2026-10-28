"use strict";

class Book {
    constructor(title, author, ISBN, isIssued = false) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = isIssued;
    }

    issueBook() {
        if (!this.isIssued) {
            this.isIssued = true;
            console.log(`${this.title} has been issued.`);
        } else {
            console.log(`${this.title} is already issued.`);
        }
    }

    returnBook() {
        if (this.isIssued) {
            this.isIssued = false;
            console.log(`${this.title} has been returned.`);
        } else {
            console.log(`${this.title} was not issued.`);
        }
    }
}

const books = [
    new Book("JavaScript Basics", "John Smith", "101"),
    new Book("Learn Java", "Robert Brown", "102"),
    new Book("Web Development", "David Lee", "103", true)
];

console.log("Available Books:");

books.filter(book => !book.isIssued).forEach(book => {
    console.log(`${book.title} by ${book.author} | ISBN: ${book.ISBN}`);
});

const searchISBN = "102";
const selectedBook = books.find(book => book.ISBN === searchISBN);

if (selectedBook) {
    selectedBook.issueBook();
} else {
    console.log("Book not found.");
}