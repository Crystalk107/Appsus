
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
        createEmail('Me', 'Thank You for Being Part of Our Community, CrysTal!',
         'Whether we’re trudging through the snows of Northrend, fighting in the chill of Volskaya, crossing the frozen Fields of Slaughter, or exploring the cold expanse of space, it warms the heart to know we’ve been on such amazing adventures together.\n'+
         'Thank you for a wonderful year and for making our community special. Your passion and creativity inspire us to create experiences we can all enjoy together, and we are looking forward to building even more for you to explore in the upcoming year!\n'+
         'We couldn’t do it without you. Thank you again.\n'+
         'Your Friends at Blizzard Entertainment', 
         true, true, 1572133930290, false, 'Blizzard Entertainment'),
        createEmail('Me', 'ScienceDaily: Latest Science News', 'ScienceDaily: Latest Science News.\n Cheers! Scientists take big step towards making the perfect head of beer', false, true, 1576133930290, false, 'ScienceDaily'),
        createEmail('Me', 'Your free trial is over', 'Your Avocode free trial is over \n The free trial for talkabesa\'s team has ended. Please log in and \n purchase a subscription within 14 days to keep working on your design \n projects.', true, false, 1577133930290, false, 'Avocode'),
        createEmail('Me', '[GitHub] A first-party GitHub OAuth application has been added to your account', 'Hey Crystalk107! \n A first-party GitHub OAuth application (GitHub Desktop) with repo, user, and workflow scopes was recently authorized to access your account. \n Visit https://github.com/settings/connections/applications/de0e3c7e9973e1c4dd77 for more information. \n To see this and other security events for your account, visit https://github.com/settings/security \n If you run into problems, please contact support by visiting https://github.com/contact \n Thanks, \n The GitHub Team ', false, false, 1577333930290, false, 'GitHub'),
        createEmail('Me', 'Testing sending emails', 'Sent email to myself! Great!', true, false, 1577333930290, true, 'Me' ),
        createEmail('Me', 'pax2 just went live on Twitch', 'Hey, crystalk! PAX2 is live! \n PAX WEST 2019 - HYDRA THEATRE \n Streaming Special Events \n Watch Now', false, false, 1577333930290, false, 'Twitch')]
    storageService.store('emails', emails)
   
    return emails

}

function addEmail(to, subject, body) {
    const newEmail = createEmail(to, subject, body, false, false, new Date().getTime(), true, 'me');
    gEmails = [newEmail, ...gEmails]
    storageService.store('emails', gEmails)
    return newEmail
}



function createEmail(to, subject, body, isRead, isStarred, sentAt, isSent, from) {
    return {
        id: getRandomID(),
        to,
        subject,
        body,
        isRead,
        isStarred,
        sentAt: moment(new Date(sentAt)).fromNow(),
        isSent,
        from
    }

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
                return email1.from.toUpperCase() < email2.from.toUpperCase() ? -1 : (email1.from.toUpperCase() > email2.from.toUpperCase() ? 1 : 0)
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


// return gMail.filter(mail => {  
//     return book.title.includes(filterBy.name)
//         && ((mail.listPrice.amount >= filterBy.priceFrom) || (filterBy.priceFrom === ''))
//         && ((mail.listPrice.amount <= filterBy.priceTo) || (filterBy.priceTo === ''))

// })


