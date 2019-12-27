


export default class SideBar extends React.Component {

    onSelectInbox = (ev) => {
        this.resetActives();
        ev.target.classList.add('active');
        this.props.onSelectInbox();
    }

    onSelectSent = (ev) => {
        this.resetActives();
        ev.target.classList.add('active');
    }

    onSelectStarred = (ev) => {
    
        this.resetActives();
        ev.target.classList.add('active');
        this.props.onShowStarred()

    }

    resetActives = () => {
        let categoryLinks = document.querySelectorAll('.cat-link')
        categoryLinks.forEach((link) => link.classList.remove('active'))
    }



    onFilterChoice = () => {
        let filterByRead = document.querySelector('.readFilterSelector').value;
        this.props.onReadFilter(filterByRead);
    }

    render() {

        return (
            <ul className="clean-list" >
                <li className="cat-link inboxCat active" onClick={this.onSelectInbox}>Inbox {(this.props.unread > 0) && ("(unread " + this.props.unread + ")")}</li>
                <li className="cat-link starredCat" onClick={this.onSelectStarred} >Starred</li>
                {/* <li className="cat-link sentCat" onClick={this.onSelectSent}>Sent</li> */}
                <select className="readFilterSelector" onChange={this.onFilterChoice}>
                    <option className="readFilterSelector" value="all">All</option>
                    <option className="readFilterSelector" value="read">Read</option>
                    <option className="readFilterSelector" value="unread">Unread</option>
                </select>
            </ul>

        )
    }

}