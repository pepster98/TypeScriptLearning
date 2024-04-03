/**
 * Exercise 5 - Utility Types
 * @author Spencer Pepe
 */

// Note: you can end lines in a type alias with either a 
//  comma OR a semicoln.
type Book = {
    title: string,
    author: string,
    genres: string[],
    eBook: boolean,
    readingAge?: number                         // optional property
}

const book1: Partial<Book> = {                  // Partial: basically makes each
    title: "Atlus Shrugged",                    //  property optional.
    author: "Ayan Rand",
}

const book2: Required<Book> = {                 // Required: oposite of Partial
    title: "1984",                              //  Each property is required
    author: "George Orwell",
    genres: ["sci-fi", "distopian future"],
    eBook: false,
    readingAge: 18
}

const book3: Readonly<Book> = {                 // Readonly adds "readonly"
    title: "Harry Potter",                      //  to the beginning of each
    author: "J L Rowling",                      //  property.    
    genres: ["fantasy fiction", "high fantasy"],
    eBook: true,
    readingAge: 11
}

type PartialBook = Partial<Book>;
type Books = Record<string, PartialBook[]>      // record utility type

const books: Books = {
    read: [book2],
    notRead: [book3],
    wantToRead: [book1],
}