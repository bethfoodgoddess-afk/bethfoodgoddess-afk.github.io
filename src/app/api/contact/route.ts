
import { type NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { sendEmail } from '@/lib/email';

const contactFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().optional(),
  budget: z.string().optional(),
  message: z.string(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsedData = contactFormSchema.parse(body);

    const { name, email, message } = parsedData;

    const emailSent = await sendEmail({
      from: 'contacto@misitioweb.com',
      to: 'destination@example.com',
      subject: `New contact form submission from ${name}`,
      html: `<p>You have a new contact form submission from:</p>
             <p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong></p>
             <p>${message}</p>`,
    });

    if (emailSent) {
      return NextResponse.json({ message: 'Email sent successfully' });
    } else {
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues }, { status: 400 });
    }
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
  }
}
