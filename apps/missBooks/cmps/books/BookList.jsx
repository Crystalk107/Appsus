import BookPreview from "BookPreview.jsx";


export default function BooksList(props) {
    return <ul className="booklist">{props.books.map((book , i)=><BookPreview key={i} book={book} onSelectBook={props.onSelectBook}></BookPreview>)}</ul>
}