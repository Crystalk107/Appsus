const { Link } = ReactRouterDOM


export default class Preview extends React.Component {

    strClick = (ev) => {
        ev.stopPropagation();
        const { props } = this;
        let el = document.querySelector(`.${props.email.id}`);
        el.classList.toggle("checked")
        props.onClickStar(props.email)
       
    }

    render() {
        // const props = this.props;
        const { props } = this;

        return <React.Fragment>
            <label className={props.email.id+" checkbox-star"+((props.email.isStarred) ? ' checked' : '')} type="checkbox" htmlFor={props.email.id} onChange={this.strClick}   >★</label>
            <input className="checkbox" type="checkbox" id={props.email.id} onChange={this.strClick} />



            <Link to={`/EmailApp/${props.email.id}`}>
                <li className={props.email.isRead ? "read " : "unread "+"clean-list"}>
                    <div>
                        <h2>{props.email.sentAt}</h2>
                    </div>
                    <div>
                        <h2>{props.email.from}</h2>
                    </div>
                    <div>
                        <h2>{props.email.subject} - {props.email.body.substring(0, 80 - props.email.subject.length)}...</h2>
                    </div>


                </li>
            </Link>
        </React.Fragment >
    }
}