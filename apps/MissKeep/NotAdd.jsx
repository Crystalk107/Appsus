
export default class NoteAdd extends React.Component {





    render() {
        return <div className="input-container flex center">
        <div className="container-edit">
            <input type="text" onChange={this.onCreate} />
            <button>A</button>
            <button>Img</button>
            <button>Video</button>
        </div>
    </div>
    }


}