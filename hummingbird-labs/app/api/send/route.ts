
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { ContactFormEmail } from '@/components/emails/contact-form-email';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, business, message } = body;

    const data = await resend.emails.send({
      from: 'Hummingbird Labs <onboarding@resend.dev>',
      to: ['robertgarabetian90@gmail.com'], // Replace with your email
      subject: `New Contact Form Submission from ${name}`,
      react: ContactFormEmail({ name, email, business, message }),
      reply_to: email,
    });

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error });
  }
}