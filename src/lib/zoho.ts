const ZOHO_API_URL = 'https://mail.zoho.com/api/accounts';

interface SendEmailParams {
  from: string;
  to: string;
  subject: string;
  html: string;
}

export async function sendEmail({ from, to, subject, html }: SendEmailParams) {
  const accountId = process.env.ZOHO_ACCOUNT_ID || 'ACCOUNT_ID';
  const oauthToken = process.env.ZOHO_OAUTH_TOKEN || 'OAUTH_TOKEN';

  const url = `${ZOHO_API_URL}/${accountId}/messages`;

  const headers = {
    'Authorization': `Zoho-oauthtoken ${oauthToken}`,
    'Content-Type': 'application/json',
  };

  const body = {
    fromAddress: from,
    toAddress: to,
    subject: subject,
    content: html,
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body),
    });

    if (response.ok) {
      console.log('Email sent successfully');
      return true;
    } else {
      const errorData = await response.json();
      console.error('Failed to send email:', errorData);
      return false;
    }
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}
