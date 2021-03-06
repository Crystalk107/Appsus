import NoteAdd from '../apps/MissKeep/NoteAdd.jsx'
import service from '../apps/MissKeep/service/sevice.js'
import List from '../apps/MissKeep/List.jsx'
export default class MissKeepApp extends React.Component {

    state = {
        notes: []
    }

    componentDidMount() {

        this.loadNotes();


    }

    loadNotes = () => {
        this.setState({ notes: service.getNots() })
    }

    onCreateTextNote = (typeNote, info) => {
        service.setNoteText(typeNote, info)
        this.loadNotes()


    }
    onCreateImgNote = (typeNote, info) => {

        service.setNoteImg(typeNote, info)
        this.loadNotes()


    }
    onCreateVideo = (typeNote, info) => {
        service.setNoteVideo(typeNote, info)
        this.loadNotes()
    }
    onCreateToDo = (typeNote, info) => {
        let toDo = info[1].split(',')
        service.setNoteTodo(typeNote, info[0], toDo)

        this.loadNotes()


    }
    onRemove = (noteId) => {
        service.removeNote(noteId)
        this.loadNotes();
    }
    onChangeBackGroundColorNote=(color,noteId)=>{
      


        service.BackGroundColorNote(noteId,color)
        this.loadNotes();

    }



    render() {
        return <div className="container-cmps">
            <NoteAdd onCreateText={this.onCreateTextNote} onCreateImgNote={this.onCreateImgNote}
                onCreateVideo={this.onCreateVideo} onCreateToDo={this.onCreateToDo}></NoteAdd>
            <List onChangeBackGroundColorNote={this.onChangeBackGroundColorNote} notes={this.state.notes} onRemove={this.onRemove}></List>


        </div>

    }

}