import React from 'react'

class BookGridComponent extends React.Component {
   
render() {
  
  const {books, onSelectChange} = this.props
  return ( <ol className="books-grid">
        { books.map( item => (                      
                          <li key={item.id}>
                            <div className="book">
                              <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${item.imageLinks && item.imageLinks.thumbnail})` }}></div>
                                <div className="book-shelf-changer">
                                  <select value={item.shelf} onChange={(event)=>{onSelectChange(event, item)}}>
                                    <option value="move" disabled>Move to...</option>
                                    <option value="none">None</option>
                                    <option value="currentlyReading">Currently Reading</option>
                                    <option value="wantToRead">Want to Read</option>
                                    <option value="read">Read</option>
                                    
                                  </select>
                                </div>
                              </div>
                              <div className="book-title">{item.title}</div>
                              <div className="book-authors">{item.authors && item.authors.length && item.authors.length >0 && (item.authors.join(', '))}</div>
                            </div>
                          </li>))
        }

          </ol>
   );
}
}

export default BookGridComponent