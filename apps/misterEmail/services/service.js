
import storageService from '../../../services/storageService.js'
export default {getEmails} 
let gEmail = storageService.load('emails') || createEmails()

function createEmails() {
    const emails = [
    createEmail('Tal', 'Wassap?', 'Pick up!', false, 1551133930594),
    createEmail('Tal', 'Hello?', 'asdasdasd!', false, 1551133930594),
    createEmail('Tal', 'asd?', 'dfhdfh', false, 1551133930594),
    createEmail('Tal', 'Wassaasdasdp?', 'asfasfasf', false, 1551133930594),
    createEmail('Tal', 'Wasssadasdap?', 'asfasfasf', false, 1551133930594),
    createEmail('Tal', 'Wasadsfsdasdsap?', 'bfsafasf', false, 1551133930594),
    createEmail('Tal', 'Wassdfsdfsap?', 'hghgfjghfj', false, 1551133930594),
    createEmail('Tal', 'Wagdfgssap?', 'sadasdasd', false, 1551133930594),
    createEmail('Tal', 'Wahgfhssap?', 'dsgsdgsdg', false, 1551133930594),
    createEmail('Tal', 'Wajhjhssap?', 'hgjghfjghfj', false, 1551133930594)]
    storageService.store(emails)
    return emails

}

function getEmails(filterBy) {
    if (!filterBy) return Promise.resolve([...gEmail]);


    // return gMail.filter(mail => {  
    //     return book.title.includes(filterBy.name)
    //         && ((mail.listPrice.amount >= filterBy.priceFrom) || (filterBy.priceFrom === ''))
    //         && ((mail.listPrice.amount <= filterBy.priceTo) || (filterBy.priceTo === ''))

    // })



}

function createEmail(from, subject, body, isRead, sentAt) {
    return {
        from,
        subject,
        body,
        isRead,
        sentAt: new Date(sentAt).toString()
    }

}
