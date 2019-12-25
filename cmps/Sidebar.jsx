const { Link } = ReactRouterDOM
export default class SideBar extends React.Component {


    render() {
    
        return (
            <ul className="clean-list">
                <li><Link className="link-style"  to='/Inbox'></Link></li>
                <li><Link className="link-style"  to='/Strret'></Link></li>
                <li><Link className="link-style"  to='/Sent mail'></Link></li>
                <li><Link className="link-style"  to='/Drafts'></Link></li>

            </ul>
        )
    }
}