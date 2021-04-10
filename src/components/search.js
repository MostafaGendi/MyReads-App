import React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI'
import { Link } from 'react-router-dom'
import Book from './book'

class Search extends Component{
state={
query: '',
books: []
}

updateQuery =(query)=>{
this.setState(()=>({
  query: query
}))

  query
  ? BooksAPI.search(query).then(books => (
    books.error
    ? this.setState({books: []})
    : (this.setState({books: books}))

  ))
  : this.setState({
    books: []
  })

}


render(){

  return(
    <div className="d-flex justify-content-center flex-wrap p-3">

    {this.state.books.map(book => {
      book.shelf = "none"

      this.props.books.map(b => (
        b.id === book.id
        ? book.shelf = b.shelf
        :""
      ))
    })}

    <div className="input-group mb-3">
      <Link to="/" className="btn btn-outline-secondary" type="button" id="button-addon1">Home</Link>
      <input type="text" className="form-control" placeholder="Search a Book" value={this.state.query} onChange={(e)=> (this.updateQuery(e.target.value))} />
    </div>
    {this.state.books.map(book=><Book key={book.id} book={book} updateShelves={this.props.updateShelves}/>)}
    </div>
  )
}
}

export default Search
