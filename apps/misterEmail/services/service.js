
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
    sortBy,
    addEmail,
    getSentEmails

    
}

let gEmails =  storageService.load('emails') || createEmails();



function createEmails() {
    const emails = [
        createEmail('Tal', 'Wassap?', 'Pick up! lorem ipsummmm eriatherig reoigearoigh go iherag orehg eagh regoihreagregoi herag oih', true, false, 1551133930594, false, 'Ben'),
        createEmail('Tal', 'Hello?', 'asdasdasd!', false, false, 1551133930594, false, 'Ben'),
        createEmail('Tal', 'asd?', 'dfhdfh', false, false, 1551133930594, false, 'Ben'),
        createEmail('Tal', 'Wassaasdasdp?', 'asfasfasf', false, false, 1551133930594, false, 'Ben'),
        createEmail('Tal', 'Wasssadasdap?', 'asfasfasf', false, false, 1551133930594, false, 'Ben'),
        createEmail('Tal', 'Wasadsfsdasdsap?', 'bfsafasf', false, false, 1551133930594, false, 'Ben'),
        createEmail('Tal', 'Wassdfsdfsap?', 'hghgfjghfj', false, false, 1551133930594, false, 'Ben'),
        createEmail('Tal', 'Wagdfgssap?', 'sadasdasd', false, false, 1551133930594, false, 'Ben'),
        createEmail('Tal', 'Wahgfhssap?', 'dsgsdgsdg', false, false, 1551133930594, false, 'Ben'),
        createEmail('Tal', 'Wajhjhssap?', 'hgjghfjghfj', false, false, 1551133930594, false, 'Ben')]
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

  

function getEmails(readFilter, isStarred, text, sortByName, isSent) {
    let emails = [];

    if ( (text === '' || !text) && !isStarred && readFilter === 'all' && !isSent) emails = [...gEmails] // no filter activated, no search

    if (!!text && text !== '' && !isStarred && readFilter === 'all'  && !isSent) // search on all
    {
        emails = gEmails.filter(email => email.subject.toUpperCase().includes(text.toUpperCase()) ||
            email.body.toUpperCase().includes(text.toUpperCase()))
    }

    if ( (text === '' || !text) && isStarred && readFilter === 'all'  && !isSent) // all starred emails, no search
    {
     
        emails = getStarredEmails();
    }

    if (!!text && text !== '' && isStarred && readFilter === 'all'  && !isSent) // all starred emails, searching 
    {
        let starredEmails = getStarredEmails();
        emails = starredEmails.filter(email => email.subject.toUpperCase().includes(text.toUpperCase()) ||
            email.body.toUpperCase().includes(text.toUpperCase()))
    }

    if ((text === '' || !text) && !isStarred && (readFilter === 'read' || readFilter ==='unread')  && !isSent) // all read/unread emails, no search
    {
        emails = getEmailsReadFilter(readFilter)
    }

    if (!!text && text !== '' && !isStarred && (readFilter === 'read' || readFilter ==='unread')  && !isSent) // all read/unread emails, searching
    {
        let readOrUnreadEmails = getEmailsReadFilter(readFilter);
        emails = readOrUnreadEmails.filter(email => email.subject.toUpperCase().includes(text.toUpperCase()) ||
            email.body.toUpperCase().includes(text.toUpperCase()))
    }

    if (!!text && text !== '' && isStarred && (readFilter === 'read' || readFilter ==='unread')  && !isSent) // all read/unread Starred emails, searching
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

    if ((text === '' || !text) && isStarred && (readFilter === 'read' || readFilter ==='unread')  && !isSent) // all read/unread Starred emails, no search
    {
        let starredEmails = getStarredEmails();
        if (readFilter === 'read') {
            emails = starredEmails.filter((email) => email.isRead === true)
        }
        if (readFilter === 'unread') {
             emails = starredEmails.filter((email) => email.isRead === false)
           
        } 
    }

    if ( (text === '' || !text) && !isStarred  &&  readFilter === 'all' && isSent) //  no search, sent emails
    {
        emails = gEmails.filter((email) => email.isSent === true)
    }

    if ( !!text && text !== '' && !isStarred  &&  readFilter === 'all' && isSent) //  searching , on all sent emails
    {
        let sentEmails = gEmails.filter((email) => email.isSent === true)
        emails = sentEmails.filter(email => email.subject.toUpperCase().includes(text.toUpperCase()) ||
        email.body.toUpperCase().includes(text.toUpperCase()))
    }



    if ((text === '' || !text) && !isStarred && (readFilter === 'read' || readFilter ==='unread')  && isSent) // all read/unread sent emails, no search, noStarred
    {
       
        let sentEmails = getSentEmails();
        if (readFilter === 'read') {
            emails =  sentEmails.filter((email) => email.isRead === true)
        }
        if (readFilter === 'unread') {
             emails =  sentEmails.filter((email) => email.isRead === false)
           
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

function getSentEmails() {
    let sentEmails = gEmails.filter((email) => email.isSent === true)
    return [...sentEmails]
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

function addEmail(to, subject, body) {
    const newEmail = createEmail(to, subject, body, false, false, new Date().getTime(), true, 'talkabesa@gmail.com');
    gEmails = [newEmail, ...gEmails]
    storageService.store('emails', gEmails)
    return newEmail
}

// return gMail.filter(mail => {  
//     return book.title.includes(filterBy.name)
//         && ((mail.listPrice.amount >= filterBy.priceFrom) || (filterBy.priceFrom === ''))
//         && ((mail.listPrice.amount <= filterBy.priceTo) || (filterBy.priceTo === ''))

// })


function createEmail(to, subject, body, isRead, isStarred, sentAt, isSent, from) {
    return {
        id: getRandomID(),
        to,
        subject,
        body,
        isRead,
        isStarred,
        sentAt: new Date(sentAt).toString(),
        isSent,
        from
    }

}
