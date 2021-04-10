import React from 'react'

function Categories (props){

    return(
      <div className="selection">
      <select onChange={(e)=> props.updateFn(props.book, e.target.value)} value={props.book.shelf}>
      <option value="move" disabled>Move to..</option>
      <option value="currentlyReading">Currently Reading</option>
      <option value="wantToRead">Want to Read</option>
      <option value="read">Read</option>
      <option value="none">None</option>
      </select>
      </div>
    )
  }

export default Categories
