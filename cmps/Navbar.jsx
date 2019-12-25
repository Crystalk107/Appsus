const { NavLink } = ReactRouterDOM
export default function NavBar(props) {
    return <nav>
        <ul>
            <li><NavLink activeClassName="active" to='/' exact>Home</NavLink></li>
            <li><NavLink activeClassName="active" to='/mrEmail'>misterEmail</NavLink></li>
            <li><NavLink activeClassName="active" to='/msBooks'>missBooks</NavLink></li>
            <li><NavLink activeClassName="active" to='/msKeep'>missKeep</NavLink></li>
        </ul>
    </nav>
}