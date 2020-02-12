const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (name, email) => {
    const msg = {
        to: email,
        from: 'agrawaljatin22@gmail.com',
        subject: 'Welcome to Task Manager App',
        text: `Welcome ${name}! Thanks for signing up.`
    };
    sgMail.send(msg);
}

const sendCancelEmail = (name, email) => {
    const msg = {
        to: email,
        from: 'agrawaljatin22@gmail.com',
        subject: 'Sorry To See You Go',
        text: `We are sad, ${name} that you are leaving.`
    };
    sgMail.send(msg);
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}