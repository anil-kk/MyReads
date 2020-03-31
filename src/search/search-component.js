import React from 'react'
import {Link} from 'react-router-dom'
import BookGridComponent from './../book/book-grid-component'
import * as BooksAPI from './../BooksAPI'

class SearchComponent extends React.Component {
  
  state = {
  booksFromSearch:[],
    query: '',
    limit: 20
  }

handleInputChange(query) {

  this.setState(()=>{
  return {query: query}
  })

  if(query===''){
    this.setState(()=>{
      return {booksFromSearch:[]}
    })
    return;
  }

 	BooksAPI.search(query, this.state.limit).then((res)=>{      
      if(res.error){return}

      this.setState(()=>{
      return {booksFromSearch:res}
      })
    })
}
  
  render() {
      const {booksFromSearch, query} = this.state
      const {onBookShelfChange} = this.props
      let {books} = this.props

      let lookup={}

      books.forEach(book =>{
      lookup[book.id]=book
      })

      booksFromSearch.forEach(book=>{
      if(lookup.hasOwnProperty(book.id))
        book['shelf'] = lookup[book.id].shelf
      })

    return (
    <div className="search-books">
            <div className="search-books-bar">
              <Link to="/" className="close-search"> Close </Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" value={query} onChange={(event)=>this.handleInputChange(event.target.value)}/>

              </div>
            </div>
            <div className="search-books-results">
              <BookGridComponent books={booksFromSearch} onSelectChange={(event,item)=>onBookShelfChange(event,item)}/>
            </div>
    </div>
    );
  }

}

export default SearchComponent