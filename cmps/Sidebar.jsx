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

    render() {
    
        return (
            <ul className="clean-list" >
                <li className="cat-link inboxCat active" onClick={this.onSelectCategory}>Inbox</li>
                <li className="cat-link starredCat" onClick={this.onSelectCategory} >Starred</li>
                <li className="cat-link sentCat" onClick={this.onSelectCategory}>Sent</li>
            </ul>
        )
    }
}