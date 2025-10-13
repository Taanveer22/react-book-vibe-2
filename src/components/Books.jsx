import { useState, useEffect } from "react";
import OneBook from "./OneBook";

const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("./booksData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="mb-12">
      <h1 className="text-4xl font-bold text-center">
        Available Books : {books.length}
      </h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {books.map((bookElement) => (
          <OneBook bookElement={bookElement} key={bookElement.bookId}></OneBook>
        ))}
      </div>
    </div>
  );
};

export default Books;
