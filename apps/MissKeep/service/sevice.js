import storageService from '../../../services/storageService.js'
import utils, { getRandomID, } from '../../misterEmail/services/utils.js'
import Note from './Note.js'
export default { getNots, setNoteText }


var gNote = createNotes()



function createNotes() {
    let type = 'NoteText'
    let note
    if (type === 'NoteText') {
        let txt = { txt: "Fullstack Me Baby!" }

        note = [
            new Note('NoteText', txt),
            new Note('NoteText', txt)
        ]
    }
    return note
}


function createNote(typeNote, isPinned, info) {

    return {
        typeNote,
        isPinned,
        info,

    }


}

function getNots() {
    return [...gNote]
}
function setNoteText(type, info) {
    let txt = { txt: info }


    let note = new Note(type, txt)
    gNote = [...gNote, note];

}



// var notes = [
//     {
//         type: "NoteText",
//         isPinned: true,
//         info: { txt: "Fullstack Me Baby!" }
//     },
//     {
//         type: "NoteImg",
//         info: {
//             url: "http://some-img/me",
//             title: "Me playing Mi"
//         },
//         style: { backgroundColor: "#00d" }
//     },
//     {
//         type: "NoteTodos", info: {
//             label: "How was it:",
//             todos: [
//                 { txt: "Do that", doneAt: null },
//                 { txt: "Do this", doneAt: 187111111 }
//             ]
//         }
//     }]; 