const library = {
  name: "Central Library",
  books: [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", isAvailable: true },
    { title: "1984", author: "George Orwell", isAvailable: true }
  ]
};

const libraryCopy = { ...library };

libraryCopy.books[0].isAvailable = false;

console.log(library);
console.log(libraryCopy);