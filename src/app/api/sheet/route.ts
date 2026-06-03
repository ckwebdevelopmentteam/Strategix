import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Map data to Google Sheet column names
    const sheetData = {
      "Full Name *": data.name || '',
      "Phone Number *": data.phone || '',
      "Email Address *": data.email || '',
      "Type of Facility *": data.facilityType || '',
      "Preferred Emirate *": data.emirate || '',
      "Approximate Investment Budget (Optional)": data.budget || 'N/A'
    };

    const formData = new URLSearchParams();
    Object.entries(sheetData).forEach(([key, value]) => {
      formData.append(key, value as string);
    });

    // Send to Google Apps Script Webhook
    await fetch('https://script.google.com/macros/s/AKfycby9e2CalD9kzcg-qJagUQeFOGRVUSqPr_Y91TZdn76zOUWz_gKz-t836tLPJ3BARKNvNQ/exec', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString()
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error sending to Google Sheet:', error);
    return NextResponse.json({ success: false, error: 'Failed to send to Google Sheet' }, { status: 500 });
  }
}
