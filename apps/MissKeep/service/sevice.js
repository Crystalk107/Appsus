import storageService from '../../../services/storageService.js'
import utils, { getRandomID, } from '../../misterEmail/services/utils.js'
import Note from './Note.js'
export default { getNots, setNoteText, setNoteImg }


var gNote = createNotes()



function createNotes() {
    let type = 'NoteText'
    let note


    note = [
        new Note('NoteText', { txt: "Fullstack Me Baby!" }),
        new Note('NoteImg', { url: "https://www.hashikma-holon.co.il/wp-content/uploads/2019/03/fc438736ea971253df3bc2d4602a9cc0-e1552405265481.jpg", title: 'Adi Himelbloy' }),
        new Note('NoteText', { txt: "coding academy" })
    ]

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
function setNoteImg(type, info) {
    // console.log(info)

    let detailsInfo = {
        title: info[0],
        url: info[1]
    }

    let title = {}
    let note = new Note(type, detailsInfo)
    gNote = [...gNote, note];
    console.log(gNote)
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
