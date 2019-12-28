
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
            this.setState({ height: 'auto' })
        }


    }
    onRemove = (id) => {
        const { props } = this
        props.onRemove(props.note.id)


        // props.onRemove(id)
    }





    render() {
        const { props } = this;
        return <div className="NoteTx-container flex">

            <div id={props.note.info.txt} style={{ height: this.state.height }} className="textNote-container flex">
                {props.note.info.txt}
                <div onClick={this.onRemove} className="editor" >
                    <i className="far fa-trash-alt fa-1x"></i></div>

            </div>


        </div>


    }


}