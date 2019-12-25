const { Link } = ReactRouterDOM
export default class SideBar extends React.Component {


    render() {
    
        return (
            <ul className="clean-list">
                <li><Link className="link-style"  to='/'>Home</Link></li>
            </ul>
        )
    }
}