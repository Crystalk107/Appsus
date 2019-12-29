import ColorBox from './ColorBox.jsx'

export default class NoteVideo extends React.Component {

    state = {
        videoUrl: null,
        isOpen: false
    }

    sliceStr = () => {
        const { props } = this;
        let originalUrl = props.note.info.url
        let sliceOriginalUrl = originalUrl.slice(32, originalUrl.length)
        let embedUrl = 'https://www.youtube.com/embed/'
        let finaleResUrl = embedUrl + sliceOriginalUrl

        return finaleResUrl
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
        return <React.Fragment><div style={noteStyle} className="NoteVideo-container">
            <div className="Video-container flex center">
                <iframe width="560" height="315" src={this.sliceStr() + '?autoplay=1&loop=1&mute=1'} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

            </div>

            <div className="editor-video" >
                <span onClick={this.onRemove}><i className="far fa-trash-alt fa-1x"></i></span>
                <span onClick={this.OnboxColorIcon}>
                    <i className="fas fa-paint-brush" id="colorIcon-img" ></i>
                </span>


            </div>



        </div>
            <ColorBox isOpen={this.state.isOpen} backgroundColor={this.backgroundColor}></ColorBox>
        </React.Fragment>


    }




}