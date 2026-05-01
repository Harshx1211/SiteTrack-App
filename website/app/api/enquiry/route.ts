import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Use server-side Supabase with anon key — enquiries table is public insert
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { name, company, email, phone, service_type, property_address, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email and message are required.' }, { status: 400 });
    }

    // Email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    const { error } = await supabase.from('enquiries').insert({
      name:             name.trim(),
      company:          company?.trim() || null,
      email:            email.trim().toLowerCase(),
      phone:            phone?.trim() || null,
      service_type:     service_type || null,
      property_address: property_address?.trim() || null,
      message:          message.trim(),
    });

    if (error) {
      console.error('Supabase enquiry insert error:', error);
      return NextResponse.json({ error: 'Failed to save enquiry.' }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error('Enquiry API error:', err);
    return NextResponse.json({ error: 'Unexpected error.' }, { status: 500 });
  }
}
