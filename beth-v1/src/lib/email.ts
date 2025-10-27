import { sendEmail as sendEmailWithZoho } from './zoho';
import { sendEmail as sendEmailWithGoogle } from './google';

interface SendEmailParams {
  from: string;
  to: string;
  subject: string;
  html: string;
}

export async function sendEmail(params: SendEmailParams) {
  const provider = process.env.EMAIL_PROVIDER || 'zoho'; // Default to zoho

  if (provider === 'google') {
    return await sendEmailWithGoogle(params);
  } else {
    return await sendEmailWithZoho(params);
  }
}
