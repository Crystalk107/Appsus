const { Link } = ReactRouterDOM
export default class SideBar extends React.Component {


    render() {
    
        return (
            <ul >
                <li><Link   to='/email/Inbox' >Inbox </Link></li>
                <li>Strret</li>
                <li>Sent mail</li>

                <li>Drafts</li>

                {/* <li><Link  to='/Sent mail'>Sent mail</Link></li>
                <li><Link   to='/Drafts'>Drafts</Link></li> */}

            </ul>
        )
    }
}