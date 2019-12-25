// import {createMail} from './dataMail.js'


let gMail =[]

createMails()
function createMails(){

    gMail.push(createMail( 'Wassap?', 'Pick up!',  false ,1551133930594))
    gMail.push(createMail( 'Hello?', 'asdasdasd!',  false ,1551133930594))
    gMail.push(createMail( 'asd?', 'dfhdfh',  false ,1551133930594))
    gMail.push(createMail( 'Wassaasdasdp?', 'asfasfasf',  false ,1551133930594))
    gMail.push(createMail( 'Wasssadasdap?', 'asfasfasf',  false ,1551133930594))
    gMail.push(createMail( 'Wasadsfsdasdsap?', 'bfsafasf',  false ,1551133930594))
    gMail.push(createMail( 'Wassdfsdfsap?', 'hghgfjghfj',  false ,1551133930594))
    gMail.push(createMail( 'Wagdfgssap?', 'sadasdasd',  false ,1551133930594))
    gMail.push(createMail( 'Wahgfhssap?', 'dsgsdgsdg',  false ,1551133930594))
    gMail.push(createMail( 'Wajhjhssap?', 'hgjghfjghfj',  false ,1551133930594))
    console.log(gMail)

}

function getMiles(){
        if (!filterBy) return [...gMail];
        return gMail.filter(mail => {  
            return book.title.includes(filterBy.name)
                && ((mail.listPrice.amount >= filterBy.priceFrom) || (filterBy.priceFrom === ''))
                && ((mail.listPrice.amount <= filterBy.priceTo) || (filterBy.priceTo === ''))
 
        })
    
    
    
}

function createMail(subject,body, isRead, sentAt){
    return {
        subject,
        body,
        isRead,
        sentAt : new Date(sentAt)
    }

}
