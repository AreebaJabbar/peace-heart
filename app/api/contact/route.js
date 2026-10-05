import { NextResponse } from 'next/server';
import { saveMessage } from '../../../lib/db';

export const dynamic = 'force-dynamic';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Please fill in all required fields.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    const result = await saveMessage({
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
    });

    if (result.success) {
      return NextResponse.json({
        success: true,
        message: 'Thanks for reaching out! We will get back to you within 24 hours.',
      });
    } else {
      return NextResponse.json(
        { error: 'Could not save message. Please try again later.' },
        { status: 500 }
      );
    }
  } catch (err) {
    console.error('Contact API Error:', err);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}
