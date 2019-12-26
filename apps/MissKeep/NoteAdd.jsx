
export default class NoteAdd extends React.Component {
    state = {
        txt: ''
    }

    inputChange = (ev) => {
        ev.preventDefault();
        // this.setState(prevState => ({ filterBy: { ...prevState.filterBy, [field]: value } }),()=>this.loadBooks())
        let valueTxt = ev.target.value
        this.setState({ txt: valueTxt })


    }


    onCreate = (ev) => {
        const { props } = this
        let typeNote = ev.target.value
        props.onCreateText(typeNote, this.state.txt)

    }





    render() {
        const { props } = this
        return <div className="input-container flex center">
            <div className="container-edit">
                <input type="text" value={this.state.txt} onChange={this.inputChange} />
                <button onClick={this.onCreate} value="NoteText">A</button>
                <button>Img</button>
                <button>Video</button>
            </div>
        </div>
    }


}