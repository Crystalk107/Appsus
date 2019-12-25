const { NavLink } = ReactRouterDOM
export default function NavBar(props) {
    return <nav>
        <ul>
            <li><NavLink activeClassName="active" to='/' exact>Home</NavLink></li>
            <li><NavLink activeClassName="active" to='/book'>Book List</NavLink></li>
            <li><NavLink activeClassName="active" to='/add'>Search and Add Book</NavLink></li>
            <li><NavLink activeClassName="active" to='/About'>About</NavLink></li>
        </ul>
    </nav>
}