const { Link } = ReactRouterDOM

export default class SideBar extends React.Component {



    selectStarred = (ev) => {

        if(ev.target === document.querySelector('li.cat-link.starredCat.active')) {
            
            this.props.onShowStarred(true)
        } else  this.props.onShowStarred(false)

    }

    onSelectCategory = (ev) => {
    
        let categoryLinks = document.querySelectorAll('.cat-link')
        categoryLinks.forEach((link) => link.classList.remove('active'))
        ev.target.classList.add('active');
        this.selectStarred(ev);
  
    }

    onFilterChoice = () => {
        let filterByRead = document.querySelector('.readFilterSelector').value;
        this.props.onReadFilter(filterByRead);
    }

    render() {
    
        return (
            <ul className="clean-list" >
    <li className="cat-link inboxCat active" onClick={this.onSelectCategory}>Inbox {(this.props.unread > 0) && ("(unread "+this.props.unread+")")}</li>
                <li className="cat-link starredCat" onClick={this.onSelectCategory} >Starred</li>
                <li className="cat-link sentCat" onClick={this.onSelectCategory}>Sent</li>
                <select className="readFilterSelector" onChange={this.onFilterChoice}>
            <option className="readFilterSelector"  value="all">All</option>
            <option className="readFilterSelector"  value="read">Read</option>
            <option className="readFilterSelector"  value="unread">Unread</option>
            </select>
            </ul>

    )}
}