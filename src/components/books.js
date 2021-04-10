import React from 'react'
import Book from './book'

function Books (props){

    return(
      <div className="d-flex flex-column">
        <div className="d-flex justify-content-center flex-wrap p-3">
        <h4>Currently Reading</h4>
        {props.books.filter(book=> book.shelf === "currentlyReading").map(book=> <Book key={book.id} updateShelves={props.updateShelves} book={book}/>)}
        </div>
        <div className="d-flex justify-content-center flex-wrap p-3">
        <h4>Want To Read</h4>
        {props.books.filter(book=> book.shelf === "wantToRead").map(book=> <Book key={book.id} updateShelves={props.updateShelves} book={book}/>)}
        </div>
        <div className="d-flex justify-content-center flex-wrap p-3">
        <h4>Read</h4>
        {props.books.filter(book=> book.shelf === "read").map(book=> <Book key={book.id} updateShelves={props.updateShelves} book={book}/>)}
        </div>
      </div>
    )
  }

export default Books
