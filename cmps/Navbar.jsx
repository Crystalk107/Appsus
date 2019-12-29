const { NavLink } = ReactRouterDOM
export default function NavBar(props) {
    return <nav className="navbar">
        <ul className="clean-list navbar">
            <li><NavLink className="link-style nav-link" activeClassName="active" to='/' exact><i className="fas fa-home"></i> Home</NavLink></li>
            <li><NavLink  className="link-style nav-link" activeClassName="active" to='/email'><i className="fas fa-at"></i> Email</NavLink></li>
            <li><NavLink className="link-style nav-link" activeClassName="active" to='/MissKeepApp'><i className="fas fa-paperclip"></i> Keep</NavLink></li>
            <li><NavLink className="link-style nav-link" activeClassName="active" to='/msBooks'><i className="fas fa-book"></i> Books</NavLink></li>  
        </ul>
  
        <img className="nav-logo" src="./img/logo.png" height="60" width="150"></img>
    
    </nav>
}