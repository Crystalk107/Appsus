
import storageService from '../../../services/storageService.js'
import utils, { getRandomID } from './utils.js'

export default {getEmails} 
let gEmail = storageService.load('emails') || createEmails()

function createEmails() {
    const emails = [
    createEmail('Tal', 'Wassap?', 'Pick up! lorem ipsummmm eriatherig reoigearoigh go iherag orehg eagh regoihreagregoi herag oih', false, false, 1551133930594),
    createEmail('Tal', 'Hello?', 'asdasdasd!', false, false, 1551133930594),
    createEmail('Tal', 'asd?', 'dfhdfh', false, false, 1551133930594),
    createEmail('Tal', 'Wassaasdasdp?', 'asfasfasf', false, false, 1551133930594),
    createEmail('Tal', 'Wasssadasdap?', 'asfasfasf', false, false, 1551133930594),
    createEmail('Tal', 'Wasadsfsdasdsap?', 'bfsafasf', false, false, 1551133930594),
    createEmail('Tal', 'Wassdfsdfsap?', 'hghgfjghfj', false, false, 1551133930594),
    createEmail('Tal', 'Wagdfgssap?', 'sadasdasd', false, false, 1551133930594),
    createEmail('Tal', 'Wahgfhssap?', 'dsgsdgsdg', false, false, 1551133930594),
    createEmail('Tal', 'Wajhjhssap?', 'hgjghfjghfj', false, false, 1551133930594)]
    storageService.store('emails',emails)
    return emails

}

function getEmails(filterBy) {
    if (!filterBy) return Promise.resolve([...gEmail]);
    
}

    function toggleStarById(emailId){
        // let modifiedEmails = gEmails.map((email) => 
        // (email.id === emailId) ? ((email.isStarred) ? false : true) : email
        // )
        // storageService.store('emails', modifiedEmails)
        // return Promise.resolve(true)

        let editEmail = gEmails.find(email=>email.id === emailId)

        editEmail = {...editEmail}
        editEmail.isStarred = (editEmail.isStarred) ? false : true;
    
        gEmails = gEmails.map(email=> editEmail.id === email.id ? editEmail : email);
    
        storageService.store('emails', gEmails)
    
        return Promise.resolve(editEmail)
    }

    function getEmailById(emailId){
        email = gEmails.find((email) => email.Id === emailId);
        return Promise.resolve(email);
    }

    function deleteEmail(email) {
        gEmails = gEmails.filter((currEmail) => currEmail.id !== email.id)
        storageService.store('emails', gEmails)
        return Promise.resolve(true)
    }

    function addEmail(from, subject, body) {
        const newEmail = createEmail(from, subject, body, false, false, new Date().getTime());
        gEmails = [...gEmails, newEmail]
        storageService.store('sent', newEmail)
        storageService.store('email', gEmails)
    
        return Promise.resolve(newEmail)
    }

    // return gMail.filter(mail => {  
    //     return book.title.includes(filterBy.name)
    //         && ((mail.listPrice.amount >= filterBy.priceFrom) || (filterBy.priceFrom === ''))
    //         && ((mail.listPrice.amount <= filterBy.priceTo) || (filterBy.priceTo === ''))

    // })


function createEmail(from, subject, body, isRead, isStarred, sentAt) {
    return {
        id: getRandomID(),
        from,
        subject,
        body,
        isRead,
        isStarred,
        sentAt: new Date(sentAt).toString()
    }

}
