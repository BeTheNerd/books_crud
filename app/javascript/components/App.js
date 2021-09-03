import React, { useState, useEffect } from 'react';
import Books from './Books';
import axios from "axios";




const App = () => {
  const [books, setBooks] = useState([]);


const getBook = async () => {
  try {
    let res = await axios.get('/books');
    // console.log(res.data)
    setBooks(res.data);
  } catch (err) {}

};
useEffect (() => {
  getBook()

},[])

const deleteBook =  (id) => {
  // try {
    // let res = await axios.delete(`/books/${id}`);
    let fileredBook = books.filter(book => book.id !==id)
    // console.log(res.data)
    setBooks(fileredBook)
  // } catch (err) {}
  
}

  return(
    <div>
      <h1>Book List</h1>
      <Books books={books} deleteBook={deleteBook}/> 
      {/* <button onClick={getBook()}>Get Books!</button>  */}
      {/* <button onClick={() => getBooks()}>Get Books!</button> */}
    </div>
  );
};
 
export default App;