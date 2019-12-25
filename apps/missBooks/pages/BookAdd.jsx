import bookService from "../services/BookService.js";
import eventBusService from "../services/eventBusService.js";

export default class BookAdd extends React.Component{
    state={
        title:'',
        googleBooks: null
    }
    inputChange = (ev)=>{
        ev.preventDefault();
        const field =  ev.target.name
        const value =  ev.target.value
        this.setState({[field]: value})
    }



    onSaveBook=(ev)=>{
        ev.preventDefault();
        bookService.saveBook(this.state.title).then(book=>{
            eventBusService.emit('toggleModal' , book);
            this.props.history.push("/book")
        })
}


    render(){
        return <form>
            <input type="text" value={this.state.title} name="title" onChange={this.inputChange}></input>
            <button onClick={this.onSaveBook}>Add</button>
        </form>
    }
}