import storageService from '../../../services/storageService.js'
import utils, { getRandomID, } from '../../misterEmail/services/utils.js'
import Note from './Note.js'
export default { getNots, setNoteText, setNoteImg, setNoteVideo, setNoteTodo }


var gNote = storageService.load('note') || createNotes()



function createNotes() {
    let note


    note = [
        new Note('NoteText', { txt: "Fullstack Me Baby!" }),
        new Note('NoteImg', { url: "https://www.hashikma-holon.co.il/wp-content/uploads/2019/03/fc438736ea971253df3bc2d4602a9cc0-e1552405265481.jpg", title: 'Adi Himelbloy' }),
        new Note('NoteText', { txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." }),
        new Note('NoteVideo', { url: "https://www.youtube.com/watch?v=cVjQFX2y0l8" }),
        new Note('NoteTodos', {todos:[{txt:'Finish the task'},{txt:'Set the clock at 5 am'},{txt:'Simmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm'}],label:'my todo'})
        
    ]
    storageService.store('note', note)
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
    storageService.store('note', gNote)

}
function setNoteImg(type, info) {

    let detailsInfo = {
        title: info[0],
        url: info[1]
    }

    let title = {}
    let note = new Note(type, detailsInfo)
    gNote = [...gNote, note];
    storageService.store('note', gNote)
}
function setNoteVideo(type, info) {

    let url = { url: info }
    let note = new Note(type, url)
    gNote = [...gNote, note];
    storageService.store('note', gNote)


}
function setNoteTodo(type, label, txts) {
    let todosArray = []


    txts.forEach(txtTodo => {

        // let txt = { txt: txtTodo }

        todosArray.push({ txt: txtTodo })

    });

    
    let note = new Note(type, {todos:todosArray,label:label})
    gNote = [...gNote, note];
    storageService.store('note', gNote)
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
