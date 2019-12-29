

import ColorBox from './ColorBox.jsx'
export default class NoteText extends React.Component {

    state = {

        backgroundColor: "rgba(0, 0, 0, 0.156)",
        isOpen: false
    }
    onRemove = (ev) => {
        ev.stopPropagation()
        const { props } = this
        props.onRemove(props.note.id)
    }
    backgroundColor = (backgroundcolor) => {
        const { props } = this
        props.onChangeBackGroundColorNote(backgroundcolor, props.note.id)
        this.setState({ isOpen: false })
    }
    OnboxColorIcon = () => {
        this.setState({ isOpen: true })
    }
    render() {
        const noteStyle = {

            backgroundColor: this.props.note.backgroundColor,
        };
        const { props } = this;
        return <div style={noteStyle} className="NoteImg-container">
            <h1 className="text-center"> {props.note.info.title} </h1>
            <div className="img-container flex center">
                <img src={props.note.info.url} alt="" height="250" width="250" />
            </div>

            <div className="editor-video" >
                <span onClick={this.onRemove}>
                    <i className="far fa-trash-alt fa-1x"></i>
                </span>
                <span onClick={this.OnboxColorIcon}>
                    <i className="fas fa-paint-brush" id="colorIcon-img" ></i>
                </span>
                <ColorBox isOpen={this.state.isOpen}  backgroundColor={this.backgroundColor}></ColorBox>
            
            </div>


        </div>


    }


}