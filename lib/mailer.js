import nodemailer from 'nodemailer';

const smtpHost = process.env.SMTP_HOST;
const smtpPort = Number(process.env.SMTP_PORT || 465);
const smtpSecure = String(process.env.SMTP_SECURE || 'true') === 'true';
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;

if (!smtpHost || !smtpUser || !smtpPass) {
  // Avoid throwing on import in serverless env; errors will surface on send
  console.warn('SMTP configuration is incomplete. Please set SMTP_HOST, SMTP_USER, SMTP_PASS.');
}

export const transporter = nodemailer.createTransport({
  host: smtpHost,
  port: smtpPort,
  secure: smtpSecure,
  auth: { user: smtpUser, pass: smtpPass },
});

export async function sendContactEmail({ name, email, message, city, mobile }) {
  const fromAddress = process.env.MAIL_FROM || smtpUser;
  const toAddress = process.env.MAIL_TO || smtpUser;

  const subject = `Contact form: ${name || 'Website User'}`;
  const text = `From: ${name || 'Website User'} <${email || 'N/A'}>\nCity: ${city || 'N/A'}\nMobile: ${mobile || 'N/A'}\n\n${message || ''}`;
  const html = `
    <p><b>From:</b> ${name || 'Website User'} &lt;${email || 'N/A'}&gt;</p>
    <p><b>City:</b> ${city || 'N/A'}</p>
    <p><b>Mobile:</b> ${mobile || 'N/A'}</p>
    <hr />
    <p>${(message || '').replace(/\n/g, '<br/>')}</p>
  `;

  return transporter.sendMail({
    from: fromAddress,
    to: toAddress,
    replyTo: email || fromAddress,
    subject,
    text,
    html,
  });
}




