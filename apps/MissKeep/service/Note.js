import utils, { getRandomID } from '../../misterEmail/services/utils.js'



export default class Note {
    constructor(typeNote, info, isPinned) {
        this.typeNote = typeNote
        this.info = info
        this.isPinned = false
        this.id = getRandomID()
    }
}