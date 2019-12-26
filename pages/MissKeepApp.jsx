import NoteAdd from '../apps/MissKeep/NoteAdd.jsx'
import service from '../apps/MissKeep/service/sevice.js'
import DynamicComponent from '../apps/MissKeep/DynamicComponent.jsx'
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

    onCreateText=(typeNote,txt)=>{
        service.setNoteText(typeNote,txt)
        this.loadNotes()


        
    }

    

    render() {
        return <div className="container-cmps">
            <NoteAdd onCreateText={this.onCreateText}></NoteAdd>
            <List notes={this.state.notes}></List>
         

        </div>

    }

}