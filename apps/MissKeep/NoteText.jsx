import ColorBox from './ColorBox.jsx'
export default class NoteText extends React.Component {

    state = {

        height: '300px',
        isOpen: false



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
    onRemove = (ev) => {
        ev.stopPropagation()
        const { props } = this
        props.onRemove(props.note.id)
    }

    backgroundColor = (backgroundcolor) => {
        console.log(backgroundcolor)
        const { props } = this
        props.onChangeBackGroundColorNote(backgroundcolor, props.note.id)
        this.setState({ isOpen: false })
    }
    OnboxColorIcon = () => {
        this.setState({ isOpen: true })
    }





    render() {


        const { props } = this;


        return <div>

            <div id={props.note.info.txt} style={{ height: this.state.height, backgroundColor: this.props.note.backgroundColor }} className="textNote-container flex">
                {props.note.info.txt}
                <div className="flex">
                    <div onClick={this.onRemove} className="editor" >
                        <i className="far fa-trash-alt fa-1x"></i></div>
                    <div onClick={this.OnboxColorIcon}>
                        <i  className="fas fa-paint-brush brush" id="colorIcon-img" ></i>
                    </div>
                </div>
            </div>
            <ColorBox isOpen={this.state.isOpen} backgroundColor={this.backgroundColor}></ColorBox>



        </div>


    }


}