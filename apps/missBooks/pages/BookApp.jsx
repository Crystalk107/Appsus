import bookService from '../services/BookService.js'
import BookList from '../cmps/books/BookList.jsx'
import BookDetails from '../cmps/books/BookDetails.jsx'
import BookFilter from '../cmps/books/BookFilter.jsx'

export default class BookApp extends React.Component {
    state = {
        books: [],
        filterBy: null,
        selectedBook: null
    }

    componentDidMount(){
        this.loadBooks();
    }

    // loadBooks = () => {
        
    //            this.setState({books: getBooks(this.state.filterBy)})
    // }

    
    loadBooks = () => {
   
        bookService.getBooks(this.state.filterBy).then(books=>{
            this.setState({books})
        } )
     
}

    onSelectBook=(book)=>{
        this.setState({selectedBook: {book}})
    }

    onUnSelectBook=()=>{
        this.setState({selectedBook: null})
    }

    onFilter = (filterBy) =>{
        this.setState({filterBy} , this.loadBooks);
   
        
    }

    render() {
        return (
            <section>
                <BookFilter onFilter={this.onFilter}  filterBy={this.state.filterBy}></BookFilter>
                <BookList onSelectBook={this.onSelectBook} books={this.state.books}></BookList> 
                {this.state.selectedBook && <BookDetails book={this.state.selectedBook} onUnSelectBook={this.onUnSelectBook}></BookDetails>};
            </section>
        )
    }

}
//