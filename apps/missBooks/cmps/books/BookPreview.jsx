const { Link } = ReactRouterDOM

export default class BookPreview extends React.Component{
    onSelectBook=()=>{
        if (this.props.onSelectBook)
            this.props.onSelectBook(this.props.book);
    }

    onUnSelectBook=()=>{
        if (this.props.onUnSelectBook)
        this.props.onUnSelectBook(this.props.book);
}
   

    render() {
        // const props = this.props;
        const { props } = this;
        return <Link to={`/books/${props.book.id}`}>
        
        <li onClick={this.onSelectBook}>
            <h2>Title: {props.book.title}</h2>
            <h2>Price: {props.book.listPrice.amount}</h2>
            <img src={props.book.thumbnail} height="300" />
        </li>

</Link>
    }
}