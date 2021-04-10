import React, { Component } from 'react'
import './App.css'
import Books from './components/books'
import * as BooksAPI from './BooksAPI'
import Search from './components/search'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'


class App extends Component {
  state={
    books: [],
  }

componentDidMount(){
  BooksAPI.getAll().then(books=> this.setState({books: books}))
}
handleChange = (book, shelf)=>{
  BooksAPI.update(book, shelf).then(()=> {
  BooksAPI.getAll().then(books=> this.setState({books: books}))})
}

  render(){
  return (
    <div className="App">
    <Route exact path="/" render={()=> (
      <>
      <header className="App-header">
        <h1 className="display-4">My Reads</h1>
      </header>
      <Books updateShelves={this.handleChange} books={this.state.books}/>
      <Link to="/search" className="btn btn_custom btn-primary fixed-bottom" role="button">+</Link>
    </>)} />
    <Route exact path="/search" render={()=> (
      <Search updateShelves={this.handleChange} books={this.state.books}/>
    )}/>

    </div>
  );
}
}

export default App;
