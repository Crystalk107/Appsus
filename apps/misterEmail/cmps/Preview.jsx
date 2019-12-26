const { Link } = ReactRouterDOM

export default class Preview extends React.Component {

    strClick = (ev) => {
        ev.stopPropagation();
        const { props } = this;
        let star = document.querySelector('.checkbox-star').style.color = "yellow"
        

        // if(star.style.fontcolor() === 'black'){star.style.fontcolor('yellow')}
        // else star.style.fontcolor('black')
console.log(props.email.id)

        props.onClickStar(props.email)


        // props.strClick(props.email.id)     
    }

    render() {
        // const props = this.props;
        const { props } = this;

        return <React.Fragment>
            <label className="checkbox-star" type="checkbox" htmlFor={`hack+${props.email.id}`} onChange={this.strClick} >★</label>
            <input className="checkbox" type="checkbox" id={`hack+${props.email.id}`}  onChange={this.strClick} />
     
            <Link to={`/EmailApp/${props.email.id}`}>
                <li className={props.email.isRead ? "read clean-list" : "unread clean-list"}>
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