const { Link } = ReactRouterDOM
import service from "../../services/service.js"

export default class Details extends React.Component {


    render() {
        const { email } = this.props;

        return (<div className="details-container">
            <ul>
                <li>{email.subject}</li>
                <li>{email.from}</li>
                <li>{email.body}</li>
            </ul>
            <div><button>Reply</button></div>
        </div>)

    }


}