import React from 'react'
import Catergories from './categories'

function Book (props){
    let imgSrc = props.book.imageLinks
    ? props.book.imageLinks.thumbnail
    : ""
    return(
      <div className="m-3" style={{width: "180px", position:"relative"}}>
        <img src={imgSrc} alt="..." style={{width: "120px", height:"200px"}}></img>
        <Catergories book={props.book} updateFn={props.updateShelves}/>
        <div>
            <p className="m-1">{props.book.title}</p>
            {Array.isArray(props.book.authors)
              ? props.book.authors.map(author => <footer key={author} className="blockquote-footer">{author}</footer>)
              : <footer key={props.book.authors} className="blockquote-footer">{props.book.authors}</footer>
            }
            {console.log(props.book.authors)}
        </div>
      </div>
    )
  }

export default Book
