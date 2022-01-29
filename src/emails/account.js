const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

// sgMail.setApiKey(sendgridAPIKey)
// sgMail.send({
//     to : 'pgangwar_be19@thapar.edu',
//     from : 'gangwarpriyanshi@gmail.com',
//     subject : 'This is to test new API key!',
//     text: 'I hope this one actually gets to you.'
// })

const sendWelcomeEmail = (email,name) =>{
    sgMail.send({
        to : email,
        from : email,
        subject : 'Thanks for joining in!',
        text : `Welcome to the app,${name}.Let me know how you get along with the app.`,
    })
}

const sendCancelationEmail = (email,name) =>{
    sgMail.send({
        to : email,
        from : email,
        subject : 'Sorry to see you go!',
        text : `Goodbye, ${name}.I hope to see you back sometime soon.`,
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}