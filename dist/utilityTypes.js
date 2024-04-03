/**
 * Exercise 5 - Utility Types
 * @author Spencer Pepe
 */
const book1 = {
    title: "Atlus Shrugged", //  property optional.
    author: "Ayan Rand",
};
const book2 = {
    title: "1984", //  Each property is required
    author: "George Orwell",
    genres: ["sci-fi", "distopian future"],
    eBook: false,
    readingAge: 18
};
const book3 = {
    title: "Harry Potter", //  to the beginning of each
    author: "J L Rowling", //  property.    
    genres: ["fantasy fiction", "high fantasy"],
    eBook: true,
    readingAge: 11
};
const books = {
    read: [book2],
    notRead: [book3],
    wantToRead: [book1],
};
export {};
//# sourceMappingURL=utilityTypes.js.map