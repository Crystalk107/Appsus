const { Link } = ReactRouterDOM

export default class Preview extends React.Component {

    strClick = (ev) => {
        ev.stopPropagation();
        console.log(ev.target.value)
        // props.strClick(props.email.id)     
    }


    render() {
        // const props = this.props;
        const { props } = this;

        return <React.Fragment>
            <input type="checkbox" onChange={this.strClick} />

            <Link to={`/EmailApp/${props.email.id}`}>
                <li className={props.email.isRead ? "read clean-list" : "unread clean-list"}>
                    <h2>{props.email.from}</h2>
                    <h2>{props.email.subject} - {props.email.body.substring(0, 80 - props.email.subject.length)}...</h2>
                    <h2>{props.email.sentAt}</h2>
                </li>
            </Link>
        </React.Fragment >
    }
}