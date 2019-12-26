import service from '../apps/misterEmail/services/service.js'
import List from '../apps/misterEmail/cmps/List.jsx'
import SideBar from '../cmps/Sidebar.jsx'
// import BookDetails from '../cmps/books/BookDetails.jsx'
// import BookFilter from '../cmps/books/BookFilter.jsx'

export default class EmailApp extends React.Component {
    state = {
        emails: [],
        starredEmails: [],
        filterBy: null,
        isFilterByStar: false,
        unread: 0
    }

    componentDidMount() {
        this.loadEmails();
    }


    loadEmails = () => {
        service.getEmails(this.state.filterBy).then(emails => {
            this.setState({ emails })
        })
        this.setState({unread: service.getUnreadAmount()})

    }

    onClickStar=(email)=>{
        
        service.toggleStarById(email.id)
        this.onShowStarred(this.state.isFilterByStar)
      

    }

    onClickPreview = (email) => {
        service.markReadById(email.id)
       
    }

    onShowStarred = (isFilterByStar) => {
  
        let starredEmails = service.getStarredEmails();
        (isFilterByStar) ?  this.setState({emails : starredEmails}) : this.loadEmails();
        this.setState({isFilterByStar});
    }

    // onFilter = (filterBy) =>{
    //     this.setState({filterBy} , this.loadBooks);

    // }

    render() {
        return (
            <section className="flex space">
                <SideBar onShowStarred={this.onShowStarred} unread={this.state.unread} ></SideBar>
                {/* // <BookFilter onFilter={this.onFilter}  filterBy={this.state.filterBy}></BookFilter> */}
                <List emails={this.state.emails} onClickStar={this.onClickStar} onClickPreview={this.onClickPreview}></List>
                {/* {this.state.selectedBook && <BookDetails book={this.state.selectedBook} onUnSelectBook={this.onUnSelectBook}></BookDetails>}; */}
            </section>
        )
    }

}
//