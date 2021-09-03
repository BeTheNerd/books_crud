import React from "react";

const Books = (props) => {
  const {books,deleteBook} = props
console.log(books)


const bookName = () => {
  return books.map((book)=> (
    <div>
      <p>{book.title}</p>
      <p>{book.author}</p>
      <button onClick={()=>deleteBook(book.id)}>Delete Book</button>
    </div>

    ))
}

  return (
    <div>
      <h2>Book List {books.length} books</h2>
      {bookName()}
    </div>
  );

};

export default Books;