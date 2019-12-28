


export default class SideBar extends React.Component {

    onSelectInbox = (ev) => {
        this.resetActives();
        ev.target.classList.add('active');
        this.props.onSelectInbox();
    }

    onSelectSent = (ev) => {
        this.resetActives();
        ev.target.classList.add('active');
        this.props.onSelectSent();
    }

    onSelectStarred = (ev) => {
    
        this.resetActives();
        ev.target.classList.add('active');
        this.props.onShowStarred()

    }

    onSelectInbox = (ev) => {
        this.resetActives();
        ev.target.classList.add('active');
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
            <ul className="clean-list" >
                <li className="cat-link composeCat" onClick={this.onSelectCompose} >Compose <i className="far fa-paper-plane"></i></li>
                <li className="cat-link inboxCat active" onClick={this.onSelectInbox}>Inbox {(this.props.unread > 0) && ("(unread " + this.props.unread + ")")} <i className="fas fa-inbox"></i></li>
                <li className="cat-link starredCat" onClick={this.onSelectStarred} >Starred <i className="far fa-star"></i></li>
                <li className="cat-link sentCat" onClick={this.onSelectSent}>Sent <i className="far fa-share-square"></i></li>

            </ul>

        )
    }

}