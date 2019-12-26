const { Link } = ReactRouterDOM
import service from "../services/service.js"

export default class DetailsPage extends React.Component {


    state = {
        email: null
    }
    componentDidMount() {
        this.loadEmail();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id
            !== this.props.match.params.id) {
            this.loadEmail();
        }
    }

    loadEmail = () => {
       
        const { id } = this.props.match.params;
        service.getEmailById(id).then(email => {
            this.setState({ email })
        })
    }

    goBack = () => {
        this.props.history.push('/email')
        // this.props.history.goBack()
    }

    onDelete = ()=>{
        service.deleteEmail(this.state.email).then(()=>{
            this.props.history.push('/email')
        });
    }
    render() {

        if (!this.state.email) return <div className="loading">Loading...</div>
        else {
            return (<div className="details-container">
                <ul>
                    <li>{this.state.email.subject}</li>
                    <li>{this.state.email.from}</li>
                    <li>{this.state.email.body}</li>
                </ul>
                <div><button>Reply</button></div>
                <div><button onClick={this.goBack}>Back</button></div>
                <div><button onClick={this.onDelete}>Delete</button></div>
            </div>)
        }
    }

}