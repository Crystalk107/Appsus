const { Link } = ReactRouterDOM
import bookService from "../../services/BookService.js"
import LongTxt from "../books/LongTxt.jsx"

export default class BookDetails extends React.Component {
    state = {
        isLongTxtShown: false
    }


    render() {
        const { book } = this.props;

        return (<div className="container">
            <ul>
                <li>
                    <img src={book.thumbnail} height="300" />
                </li>
                <li><h2 className="detailsTitle">{book.title}</h2></li>
                <li className="detailsSubtitle">Summary: {book.subtitle}</li>
                <li className="detailsAuthor">By {book.authors} (Author)</li>
                <li className="detailsDate">{book.publishedDate} {bookService.getDateNotif(book)}</li>
                <li className="detailsDesc"><LongTxt text={book.description} isLongTxtShown={this.state.isLongTxtShown} /></li>
                <li className="detailsPageCount">Pages: {book.pageCount} {bookService.getPageCountNotif(book)}</li>
                <li className="detailsCategories">Categories: {book.categories.toString()}</li>
                <li className="detailsLang">Language: {book.language}</li>
                <li className={book.listPrice.amount > 150 && "detailsPriceHigh" || book.listPrice.amount < 20 && "detailsPriceLow" || "detailsPrice" }    >Price: {book.listPrice.amount} {book.listPrice.currencyCode} {book.listPrice.isOnSale && '$SALE$'}</li>


                <li>
                    <button onClick={this.props.goBack}>BACK</button>
                </li>
            </ul>
        </div>)

    }
}

