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

    onReply = () => {
        
        this.onSelectComposeReply(this.state.email.from);
    }

    onDelete = ()=>{
        service.deleteEmail(this.state.email).then(()=>{
            this.props.history.push('/email')
        });
    }

    onSelectComposeReply = () => {

        (async () => {

            const { value: formValues } = await Swal.fire({
                title: 'Reply',
                input: "textarea",
                html:
                    `<input id="email" type="email" class="swal2-input" placeholder="To" value=${this.state.email.from}>` +
                    `<input id="subject" class="swal2-input" placeholder="Subject" value='Re: ${this.state.email.subject}'>`,

                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Send <i class="fas fa-paper-plane"></i>',
                cancelButtonText: 'Cancel <i class="fas fa-ban"></i>',

                preConfirm: () => {
                    return [
                        document.querySelector('#email').value,
                        document.querySelector('#subject').value,
                        Swal.getInput().value
                    ]
                }

            })
            {
                if (formValues) {
                    Swal.fire(
                        'Sent!',
                        'Your email has been sent.',
                        'success'
                    )
                }
            }
            if (formValues) {
                service.addEmail(formValues[0], formValues[1], formValues[2])
              
            }
        })()
    }



    render() {

        if (!this.state.email) return <div className="loading">Loading...</div>
        else {
            return (<div className="details-container">
                <ul className="clean-list detailstext">
                    <li><h2>{this.state.email.subject}</h2></li>
                    <li className="detailsFrom">{this.state.email.from}</li>
                    <li><p>{this.state.email.body}</p></li>
                </ul >
                <div className="details-buttons">
                <div><span onClick={this.goBack}><i className="fas fa-arrow-circle-left"></i></span></div>
                <div><span onClick={this.onReply}><i className="fas fa-reply"></i></span></div>
                <div><span className="deleteEmailDetails" onClick={this.onDelete}><i className="fas fa-trash-alt"></i></span></div>
                </div>
            </div>)
        }
    }

}

