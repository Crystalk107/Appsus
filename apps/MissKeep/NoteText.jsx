
export default class NoteText extends React.Component {

    state = {

        height: '300px'

    }


    componentDidMount() {

        this.checkIfIsToLongTextForContainer()

    }

    checkIfIsToLongTextForContainer = () => {
        const { txt } = this.props.note.info;
        if ((txt) && txt.length > 100) {
            debugger
            this.setState({ height: 'auto' })
        }


    }





    render() {
        const { props } = this;
        return <div className="NoteTx-container">

            <div id={props.note.info.txt}   style={{ height: this.state.height}} className="textNote-container">
                {props.note.info.txt}
            </div>

        </div>


    }


}