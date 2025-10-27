import { Buffer } from 'buffer';

const GMAIL_API_URL = 'https://gmail.googleapis.com/gmail/v1/users/me/messages/send';

interface SendEmailParams {
  from: string;
  to: string;
  subject: string;
  html: string;
}

export async function sendEmail({ from, to, subject, html }: SendEmailParams) {
  const oauthToken = process.env.GOOGLE_OAUTH_TOKEN || 'GOOGLE_OAUTH_TOKEN';

  const emailLines = [
    `From: ${from}`,
    `To: ${to}`,
    'Content-type: text/html;charset=iso-8859-1',
    'MIME-Version: 1.0',
    `Subject: ${subject}`,
    '',
    html,
  ];
  const email = emailLines.join('\r\n');

  const base64EncodedEmail = Buffer.from(email).toString('base64url');

  const headers = {
    'Authorization': `Bearer ${oauthToken}`,
    'Content-Type': 'application/json',
  };

  const body = {
    raw: base64EncodedEmail,
  };

  try {
    const response = await fetch(GMAIL_API_URL, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body),
    });

    if (response.ok) {
      console.log('Email sent successfully via Google');
      return true;
    } else {
      const errorData = await response.json();
      console.error('Failed to send email via Google:', errorData);
      return false;
    }
  } catch (error) {
    console.error('Error sending email via Google:', error);
    return false;
  }
}
