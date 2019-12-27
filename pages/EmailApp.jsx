import service from '../apps/misterEmail/services/service.js'
import List from '../apps/misterEmail/cmps/List.jsx'
import SideBar from '../cmps/Sidebar.jsx'
import Search from '../apps/misterEmail/cmps/Search.jsx';

// import BookDetails from '../cmps/books/BookDetails.jsx'
// import BookFilter from '../cmps/books/BookFilter.jsx'

export default class EmailApp extends React.Component {
    state = {
        emails: [],

        intiate: true,
        text: null,
        isStarred: false,

        unread: 0,
        readFilter: 'all'
    }

    componentDidMount() {
        this.loadEmails();
        this.setState({ intiate: false });
    }


    loadEmails = () => {

        console.log(this.state.emails)
        service.getEmails(this.state.readFilter, this.state.isStarred, this.state.text).then(emails => {
            this.setState({ emails })
        })



        this.setState({ unread: service.getUnreadAmount() })

    }

    onSearch = (inputText) => {
        this.setState(inputText, this.loadEmails)
    }

    onClickStar = (email) => {

        service.toggleStarById(email.id)
        this.loadEmails



    }

    onClickPreview = (email) => {
        service.markReadById(email.id)


    }

    onReadFilter = (filterByRead) => {
        this.setState({ readFilter: filterByRead });
        let filteredEmails = service.getEmailsReadFilter(filterByRead);
        this.setState({ emails: filteredEmails }, this.loadEmails)

    }

    onShowStarred = () => {
        this.setState({ isStarred: true })
        let starredEmails = service.getStarredEmails(this.state.emails);
        console.log(starredEmails)
        this.setState({ emails: starredEmails }, this.loadEmails)



    }

    onSelectInbox = () => {
        this.setState({ isStarred: false })
        let allEmails = service.getAllEmails();
        this.setState({ emails: allEmails }, this.loadEmails)

    }

    onClickEnvelope = (email) => {
        service.toggleReadById(email.id)
        this.loadEmails


    }

    onDelete = (email) => {
        service.deleteEmail(email).then(() => {
            this.loadEmails
        });
    }


    // onFilter = (filterBy) =>{
    //     this.setState({filterBy} , this.loadBooks);

    // }

    render() {
        return (
            <section className="flex space">
                <SideBar onShowStarred={this.onShowStarred} unread={this.state.unread} onReadFilter={this.onReadFilter} onSelectInbox={this.onSelectInbox}></SideBar>
                {/* // <BookFilter onFilter={this.onFilter}  filterBy={this.state.filterBy}></BookFilter> */}

                <List emails={this.state.emails} onClickStar={this.onClickStar} onClickPreview={this.onClickPreview} onClickEnvelope={this.onClickEnvelope} onDelete={this.onDelete} onSearch={this.onSearch} text={this.state.text}></List>
                {/* {this.state.selectedBook && <BookDetails book={this.state.selectedBook} onUnSelectBook={this.onUnSelectBook}></BookDetails>}; */}
            </section>
        )
    }

}
//