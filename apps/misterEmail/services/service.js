
import storageService from '../../../services/storageService.js'
import utils, { getRandomID, } from './utils.js'

export default {
    getEmails,
    toggleStarById,
    getStarredEmails,
    getEmailById,
    deleteEmail,
    getUnreadAmount,
    markReadById,
    toggleReadById,
    getEmailsReadFilter,
    getAllEmails,
    sortBy
    
}

let gEmails = storageService.load('emails') || createEmails()

function createEmails() {
    const emails = [
        createEmail('Tal', 'Wassap?', 'Pick up! lorem ipsummmm eriatherig reoigearoigh go iherag orehg eagh regoihreagregoi herag oih', true, false, 1551133930594),
        createEmail('Tal', 'Hello?', 'asdasdasd!', false, false, 1551133930594),
        createEmail('Tal', 'asd?', 'dfhdfh', false, false, 1551133930594),
        createEmail('Tal', 'Wassaasdasdp?', 'asfasfasf', false, false, 1551133930594),
        createEmail('Tal', 'Wasssadasdap?', 'asfasfasf', false, false, 1551133930594),
        createEmail('Tal', 'Wasadsfsdasdsap?', 'bfsafasf', false, false, 1551133930594),
        createEmail('Tal', 'Wassdfsdfsap?', 'hghgfjghfj', false, false, 1551133930594),
        createEmail('Tal', 'Wagdfgssap?', 'sadasdasd', false, false, 1551133930594),
        createEmail('Tal', 'Wahgfhssap?', 'dsgsdgsdg', false, false, 1551133930594),
        createEmail('Tal', 'Wajhjhssap?', 'hgjghfjghfj', false, false, 1551133930594)]
    storageService.store('emails', emails)
    return emails

}

function sortBy(sortBy, currEmails) {
    if (sortBy) {
        var copyArray = [...currEmails];
        var sortByName = copyArray.sort(function (email1, email2) {
            return email1.subject.toUpperCase() < email2.subject.toUpperCase() ? -1 : (email1.subject.toUpperCase() > email2.subject.toUpperCase() ? 1 : 0)
        })
    } return [...sortByName]
}

  

function getEmails(readFilter, isStarred, text, sortByName) {
    let emails = [];

    if ( (text === '' || !text) && !isStarred && readFilter === 'all') emails = [...gEmails] // no filter activated, no search

    if (!!text && text !== '' && !isStarred && readFilter === 'all') // search on all
    {
        emails = gEmails.filter(email => email.subject.toUpperCase().includes(text.toUpperCase()) ||
            email.body.toUpperCase().includes(text.toUpperCase()))
    }

    if ( (text === '' || !text) && isStarred && readFilter === 'all') // all starred emails, no search
    {
     
        emails = getStarredEmails();
    }

    if (!!text && text !== '' && isStarred && readFilter === 'all') // all starred emails, searching 
    {
        let starredEmails = getStarredEmails();
        emails = starredEmails.filter(email => email.subject.toUpperCase().includes(text.toUpperCase()) ||
            email.body.toUpperCase().includes(text.toUpperCase()))
    }

    if ((text === '' || !text) && !isStarred && (readFilter === 'read' || readFilter ==='unread')) // all read/unread emails, no search
    {
        emails = getEmailsReadFilter(readFilter)
    }

    if (!!text && text !== '' && !isStarred && (readFilter === 'read' || readFilter ==='unread')) // all read/unread emails, searching
    {
        let readOrUnreadEmails = getEmailsReadFilter(readFilter);
        emails = readOrUnreadEmails.filter(email => email.subject.toUpperCase().includes(text.toUpperCase()) ||
            email.body.toUpperCase().includes(text.toUpperCase()))
    }

    if (!!text && text !== '' && isStarred && (readFilter === 'read' || readFilter ==='unread')) // all read/unread Starred emails, searching
    {
        let starredEmails = getStarredEmails();
        let filteredEmails;
        if (readFilter === 'read') {
           filteredEmails = starredEmails.filter((email) => email.isRead === true)
        }
        if (readFilter === 'unread') {
            filteredEmails = starredEmails.filter((email) => email.isRead === false) 
        }
        emails = filteredEmails.filter(email => email.subject.toUpperCase().includes(text.toUpperCase()) ||
        email.body.toUpperCase().includes(text.toUpperCase()))

    }

    if ((text === '' || !text) && isStarred && (readFilter === 'read' || readFilter ==='unread')) // all read/unread Starred emails, no search
    {
        let starredEmails = getStarredEmails();
        if (readFilter === 'read') {
            emails = starredEmails.filter((email) => email.isRead === true)
        }
        if (readFilter === 'unread') {
             emails = starredEmails.filter((email) => email.isRead === false)
           
        } 
    }



        if (sortByName) {
            
            var sortByName = emails.sort(function (email1, email2) {
                return email1.subject.toUpperCase() < email2.subject.toUpperCase() ? -1 : (email1.subject.toUpperCase() > email2.subject.toUpperCase() ? 1 : 0)
            })
            emails = [...sortByName];
        } 
        

    return Promise.resolve(emails)
}



function getAllEmails() {
    return [...gEmails]
}






function getEmailsReadFilter(filterByRead) {
    if (filterByRead === 'read') {
        let filteredEmails = gEmails.filter((email) => email.isRead === true)
        return [...filteredEmails]
    }
    if (filterByRead === 'unread') {
        let filteredEmails = gEmails.filter((email) => email.isRead === false)
        return [...filteredEmails]
    }
    if (filterByRead === 'all') return [...gEmails]
}

function getStarredEmails() {
    let starredEmails = gEmails.filter((email) => email.isStarred === true)
    return [...starredEmails]
}

function markReadById(emailId) {

    let editEmail = gEmails.find(email => email.id === emailId)
    editEmail = { ...editEmail }
    editEmail.isRead = true;
    console.log(editEmail)
    gEmails = gEmails.map(email => editEmail.id === email.id ? editEmail : email);
    storageService.store('emails', gEmails)
    return Promise.resolve(editEmail)
}

function toggleReadById(emailId) {

    let editEmail = gEmails.find(email => email.id === emailId)

    editEmail = { ...editEmail }
    editEmail.isRead = (editEmail.isRead) ? false : true;
    gEmails = gEmails.map(email => editEmail.id === email.id ? editEmail : email);

    storageService.store('emails', gEmails)

    return Promise.resolve(editEmail)
}

function toggleStarById(emailId) {


    let editEmail = gEmails.find(email => email.id === emailId)

    editEmail = { ...editEmail }
    editEmail.isStarred = (editEmail.isStarred) ? false : true;

    gEmails = gEmails.map(email => editEmail.id === email.id ? editEmail : email);

    storageService.store('emails', gEmails)

    return Promise.resolve(editEmail)
}

function getEmailById(emailId) {
    let email = gEmails.find((email) => email.id === emailId);
    console.log(email)
    return Promise.resolve(email);
}

function deleteEmail(email) {

    gEmails = gEmails.filter((currEmail) => currEmail.id !== email.id)
    storageService.store('emails', gEmails)
    return Promise.resolve([...gEmails])
}

function getUnreadAmount() {
    let unreadEmails = gEmails.filter((email) => email.isRead === false)
    return unreadEmails.length
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
