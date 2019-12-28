


export default class SideBar extends React.Component {

 
    onSelectSent = (ev) => {
        this.resetActives();
        const el = document.querySelector('.sentCat')
        el.classList.add('active');
        this.props.onSelectSent();
    }

    onSelectStarred = (ev) => {
    
        this.resetActives();
        const el = document.querySelector('.starredCat')
        el.classList.add('active');
        this.props.onShowStarred()

    }

    onSelectInbox = (ev) => {
        this.resetActives();
        const el = document.querySelector('.inboxCat')
        el.classList.add('active');
        this.props.onSelectInbox();
    }

    resetActives = () => {
        let categoryLinks = document.querySelectorAll('.cat-link')
        categoryLinks.forEach((link) => link.classList.remove('active'))
    }

    onSelectCompose = (ev) => {
        // this.resetActives();
        // ev.target.classList.add('active');
        this.props.onSelectCompose();
    }




    render() {

        return (
            <div className="email-sidebar">
            <ul className="sidebar-itemlist clean-list" >
                <li className="cat-link composeCat" onClick={this.onSelectCompose} ><i className="far fa-paper-plane sidebar-compose"></i><span className="sidebar-text">Compose</span></li>
                <li className="cat-link inboxCat active" onClick={this.onSelectInbox}><i className="fas fa-inbox sidebar-inbox"></i><span className="sidebar-text">Inbox {(this.props.unread > 0) && ("(unread " + this.props.unread + ")")}</span></li>
                <li className="cat-link starredCat" onClick={this.onSelectStarred} ><i className="fas fa-star sidebar-star"></i><span className="sidebar-text">Starred</span></li>
                <li className="cat-link sentCat" onClick={this.onSelectSent}><i className="far fa-share-square sidebar-sent" ></i><span className="sidebar-text">Sent</span></li>

            </ul>
            </div>

        )
    }

}