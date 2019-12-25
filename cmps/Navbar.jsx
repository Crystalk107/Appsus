const { NavLink } = ReactRouterDOM
export default function NavBar(props) {
    return <nav>
        <ul className="clean-list navbar">
            <li><NavLink className="link-style" activeClassName="active" to='/' exact>Home</NavLink></li>
            <li><NavLink  className="link-style" activeClassName="active" to='/email/Inbox'>misterEmail</NavLink></li>
            <li><NavLink className="link-style" activeClassName="active" to='/msBooks'>missBooks</NavLink></li>
            <li><NavLink className="link-style" activeClassName="active" to='/msKeep'>missKeep</NavLink></li>
        </ul>
    </nav>
}