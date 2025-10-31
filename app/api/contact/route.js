import { NextResponse } from 'next/server';
import { sendContactEmail } from '../../../lib/mailer';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message, city, mobile } = body || {};

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    await sendContactEmail({ name, email, message, city, mobile });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Contact email error:', err);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}




