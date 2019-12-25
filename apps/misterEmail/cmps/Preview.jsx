const { Link } = ReactRouterDOM

export default class Preview extends React.Component {




    render() {
        // const props = this.props;
        const { props } = this;
        return <Link to={`/EmailApp/${props.email.id}`}>
            <li className={props.email.isRead ? "read" : "unread"}>
                <h2>{props.email.from}</h2>
                <h2>{props.email.subject}</h2>
                <h2>{props.email.sentAt}</h2>
            </li>
        </Link>
    }
}