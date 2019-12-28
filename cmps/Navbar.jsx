const { NavLink } = ReactRouterDOM
export default function NavBar(props) {
    return <nav>
        <ul className="clean-list navbar">
            <li><NavLink className="link-style nav-link" activeClassName="active" to='/' exact><i className="fas fa-home"></i> Home</NavLink></li>
            <li><NavLink  className="link-style nav-link" activeClassName="active" to='/email'><i className="fas fa-at"></i> Email</NavLink></li>
            <li><NavLink className="link-style nav-link" activeClassName="active" to='/MissKeepApp'><i className="fas fa-paperclip"></i> Keep</NavLink></li>
            <li><NavLink className="link-style nav-link" activeClassName="active" to='/msBooks'><i className="fas fa-book"></i> Books</NavLink></li>


            
        </ul>
    </nav>
}