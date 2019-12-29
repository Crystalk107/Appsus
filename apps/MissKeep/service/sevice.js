import storageService from '../../../services/storageService.js'
import Note from './Note.js'
export default
    {
        getNots, setNoteText, setNoteImg,
        setNoteVideo, setNoteTodo,
        getNoteById, removeNote,BackGroundColorNote
    }


var gNote = storageService.load('note') || createNotes()



function createNotes() {
    let note
    note = [
        new Note('NoteText', { txt: "Fullstack Me Baby!" }),
        new Note('NoteTodos', { todos: [{ txt: 'Finish the task' }, { txt: 'Set the clock at 5 am' }, { txt: 'Simmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm' }], label: 'my todo' }),
        new Note('NoteImg', { url: "https://besttv232-ynet-images1-prod.cdn.it.best-tv.com/PicServer4/2016/08/02/7175314/71753130100099980551no.jpg", title: 'F35' }),
        new Note('NoteText', { txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." }),
        new Note('NoteVideo', { url: "https://www.youtube.com/watch?v=cVjQFX2y0l8" }),

    ]
    storageService.store('note', note)
    return note
}



function getNots() {
    let note = [...gNote]
    return note
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


    let note = new Note(type, { todos: todosArray, label: label })
    gNote = [...gNote, note];
    storageService.store('note', gNote)
}
function removeNote(noteid) {
    debugger;
    let note = gNote.filter(note => (noteid !== note.id))
    gNote = [...note]
    storageService.store('note', gNote)

}
function getNoteById(noteid) {
    const note = gNote.find((note => noteid === note.id))
    return { ...note }
}
function BackGroundColorNote(noteId, color) {
    let noteNewBackgroundColor = getNoteById(noteId)
    console.log(noteNewBackgroundColor.backgroundColor)
    noteNewBackgroundColor.backgroundColor = color
    console.log(noteNewBackgroundColor)

    let notes = (gNote.map(note => {
        debugger
        if (noteId !== note.id) {
            return note
        } else return noteNewBackgroundColor
    }))
    console.log('BackGroundColorNote',notes)
    gNote = [...notes]
    console.log(gNote)
    storageService.store('note', gNote)
}







