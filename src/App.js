import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route} from 'react-router-dom'
import SearchComponent from './search/search-component'
import DashboardComponent from './dashboard/dashboard-component'

class BooksApp extends React.Component {
  state = {
  books: []
  }
  
  componentDidMount() {   
    BooksAPI.getAll().then((res)=>{
      this.setState(()=>{
      return {books: res}
      })
    })
  }

  handleBookShelfChange(event, item) {
    BooksAPI.update(item, event.target.value)

    const filteredBooks = this.state.books.filter(book => book.id !== item.id)
    item.shelf = event.target.value

    this.setState(()=>{
     return {books: [...filteredBooks, item]};
    })
  }

  render() {
    const {books}=this.state
    return (
      <div className="app">  
       <Route exact path="/" render={()=>(
         <DashboardComponent books={books} onBookShelfChange={(event, item)=>this.handleBookShelfChange(event, item)}/>
        )}/>
       <Route path="/search" render={()=>(
       <SearchComponent books={books} onBookShelfChange={(event, item)=>this.handleBookShelfChange(event, item)}/>
       )} />
      </div>
    )
  }
}

export default BooksApp
