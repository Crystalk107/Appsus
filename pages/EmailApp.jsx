import service from '../apps/misterEmail/services/service.js'
import List from '../apps/misterEmail/cmps/List.jsx'
import SideBar from '../cmps/Sidebar.jsx'
// import BookDetails from '../cmps/books/BookDetails.jsx'
// import BookFilter from '../cmps/books/BookFilter.jsx'

export default class EmailApp extends React.Component {
    state = {
        emails: [],
        filterBy: null,
    }

    componentDidMount(){
        this.loadEmails();
    }

    
    loadEmails = () => {
   
        service.getEmails(this.state.filterBy).then(emails=>{
            this.setState({emails})
        } )
     
}

   

    // onFilter = (filterBy) =>{
    //     this.setState({filterBy} , this.loadBooks);
       
    // }

    render() {
        return (
            <section>
                  <SideBar></SideBar>
                {/* // <BookFilter onFilter={this.onFilter}  filterBy={this.state.filterBy}></BookFilter> */}
                <List  emails={this.state.emails}></List> 
                // {/* {this.state.selectedBook && <BookDetails book={this.state.selectedBook} onUnSelectBook={this.onUnSelectBook}></BookDetails>}; */}
            </section>
        )
    }

}
//