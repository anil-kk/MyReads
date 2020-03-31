import React from 'react'
import {Link} from 'react-router-dom'
import BookGridComponent from './../book/book-grid-component'

class DashboardComponent extends React.Component {
  
  render() {
    const {books, onBookShelfChange} = this.props

    const currentlyReading = books.filter( book => book.shelf === 'currentlyReading')
    const wantToRead = books.filter( book => book.shelf === 'wantToRead')
    const read = books.filter( book => book.shelf === 'read')

    return (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Currently Reading</h2>
                    <div className="bookshelf-books">      
                      <BookGridComponent books={currentlyReading} onSelectChange={(event,item)=>onBookShelfChange(event,item)}/>
                    </div>
                  </div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Want to Read</h2>
                    <div className="bookshelf-books">
                      <BookGridComponent books={wantToRead} onSelectChange={(event,item)=>onBookShelfChange(event,item)}/>
                    </div>
                  </div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Read</h2>
                    <div className="bookshelf-books">
                     <BookGridComponent books={read} onSelectChange={(event,item)=>onBookShelfChange(event,item)}/>                      
                    </div>
                  </div>
                </div>
              </div>
              <div className="open-search">
                <Link to="/search"> Add a book</Link>
              </div>
            </div>
    );
  }
}

export default DashboardComponent