import bookService from '../services/BookService.js'
import BookDetails from '../cmps/books/BookDetails.jsx';

export default class PetPage extends React.Component {

    state = {
        book: null
    }
    componentDidMount() {
        this.loadBook();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id
            !== this.props.match.params.id) {
            this.loadBook();
        }
    }

    loadBook() {
        const { id } = this.props.match.params;
        bookService.getBookById(id).then(book => {
            this.setState({ book })
        })
    }

    goBack = () => {
        this.props.history.push('/books')
        // this.props.history.goBack()
    }

    // onDelete = (pet)=>{
    //     petsService.deletePet(pet).then(()=>{
    //         this.props.history.push('/pets')
    //     });
    // }
    



    render() {
        if (!this.state.book) return <div className="loading">Loading...</div>
        return <BookDetails book={this.state.book} goBack={this.goBack}></BookDetails>
    }
}

// 