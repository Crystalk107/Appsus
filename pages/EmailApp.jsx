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
        sortByName: false,
        sortByDate: false,
        unread: 0,
        readFilter: 'all',
        isSent: false
    }

    componentDidMount() {
        this.loadEmails();
        this.setState({ intiate: false });
    }


    loadEmails = () => {


        service.getEmails(this.state.readFilter, this.state.isStarred, this.state.text, this.state.sortByName, this.state.isSent).then(emails => {
            this.setState({ emails })
        })



        this.setState({ unread: service.getUnreadAmount() })

    }

    onSearch = (inputText) => {
        this.setState(inputText, this.loadEmails)
    }

    onClickStar = (email) => {

        service.toggleStarById(email.id)
        this.loadEmails()



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
        this.setState({ isSent: false })
        this.setState({ isStarred: true })
        let starredEmails = service.getStarredEmails(this.state.emails);
        console.log(starredEmails)
        this.setState({ emails: starredEmails }, this.loadEmails)



    }

    onSelectInbox = () => {
        this.setState({ isStarred: false })
        this.setState({ isSent: false })
        let allEmails = service.getAllEmails();
        this.setState({ emails: allEmails }, this.loadEmails)

    }

    onClickEnvelope = (email) => {
        service.toggleReadById(email.id)
        this.loadEmails()


    }

    onDelete = (email) => {
        service.deleteEmail(email).then(() => {
            this.loadEmails()
        });
    }

    onSort = (sortBy) => {

        this.setState({ sortByName: true }, this.loadEmails)
    }

    onSelectSent = () =>{
        this.setState({ isStarred: false })
        this.setState({ isSent: true })
        let sentEmails = service.getSentEmails();
        this.setState({ emails: sentEmails }, this.loadEmails)


    }

    onSelectCompose = () => {

        (async () => {

            const { value: formValues } = await Swal.fire({
                title: 'New Message',
                input: "textarea",
                html:
                    `<input id="email" type="email" class="swal2-input" placeholder="To">` +
                    '<input id="subject" class="swal2-input" placeholder="Subject">',

                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Send',

                preConfirm: () => {
                    return [
                        document.querySelector('#email').value,
                        document.querySelector('#subject').value,
                        Swal.getInput().value
                    ]
                }

            })
            {
                if (formValues) {
                    Swal.fire(
                        'Sent!',
                        'Your email has been sent.',
                        'success'
                    )
                }
            }
            if (formValues) {
                service.addEmail(formValues[0], formValues[1], formValues[2])
                this.loadEmails()
            }
        })()
    }




    // onFilter = (filterBy) =>{
    //     this.setState({filterBy} , this.loadBooks);

    // }

    render() {
        return (
            <section className="flex space" >
                <SideBar onSelectCompose={this.onSelectCompose} onShowStarred={this.onShowStarred} unread={this.state.unread} onSelectInbox={this.onSelectInbox}  onSelectSent={this.onSelectSent}></SideBar>
                {/* // <BookFilter onFilter={this.onFilter}  filterBy={this.state.filterBy}></BookFilter> */}

                <List emails={this.state.emails} onSort={this.onSort} onReadFilter={this.onReadFilter} onClickStar={this.onClickStar} onClickPreview={this.onClickPreview} onClickEnvelope={this.onClickEnvelope} onDelete={this.onDelete} onSearch={this.onSearch} text={this.state.text} ></List>
                {/* {this.state.selectedBook && <BookDetails book={this.state.selectedBook} onUnSelectBook={this.onUnSelectBook}></BookDetails>}; */}
            </section >
        )
    }

}
/* Swal.fire({
    title: 'Img note',
    html:
        '<input id="title" class="swal2-input" placeholder="title">' +
        '<input id="url" class="swal2-input" placeholder="url">',
    focusConfirm: false,
    showCancelButton: true,

    preConfirm: () => {
        return [
            document.querySelector('#title').value,
            document.querySelector('#url').value
        ]
    }
})
*/

