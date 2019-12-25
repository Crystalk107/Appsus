// import {createMail} from './dataMail.js'


let gEmail = []

createEmails()
function createEmails() {

    gEmail.push(createEmail('Tal', 'Wassap?', 'Pick up!', false, 1551133930594))
    gEmail.push(createEmail('Tal', 'Hello?', 'asdasdasd!', false, 1551133930594))
    gEmail.push(createEmail('Tal', 'asd?', 'dfhdfh', false, 1551133930594))
    gEmail.push(createEmail('Tal', 'Wassaasdasdp?', 'asfasfasf', false, 1551133930594))
    gEmail.push(createEmail('Tal', 'Wasssadasdap?', 'asfasfasf', false, 1551133930594))
    gEmail.push(createEmail('Tal', 'Wasadsfsdasdsap?', 'bfsafasf', false, 1551133930594))
    gEmail.push(createEmail('Tal', 'Wassdfsdfsap?', 'hghgfjghfj', false, 1551133930594))
    gEmail.push(createEmail('Tal', 'Wagdfgssap?', 'sadasdasd', false, 1551133930594))
    gEmail.push(createEmail('Tal', 'Wahgfhssap?', 'dsgsdgsdg', false, 1551133930594))
    gEmail.push(createEmail('Tal', 'Wajhjhssap?', 'hgjghfjghfj', false, 1551133930594))
    console.log(gEmail)

}

function getEmails() {
    if (!filterBy) return [...gEmail];


    // return gMail.filter(mail => {  
    //     return book.title.includes(filterBy.name)
    //         && ((mail.listPrice.amount >= filterBy.priceFrom) || (filterBy.priceFrom === ''))
    //         && ((mail.listPrice.amount <= filterBy.priceTo) || (filterBy.priceTo === ''))

    // })



}

function createEmail(subject, body, isRead, sentAt) {
    return {
        from,
        subject,
        body,
        isRead,
        sentAt: new Date(sentAt)
    }

}
