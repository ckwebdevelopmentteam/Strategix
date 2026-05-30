import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Create a transporter using SMTP
    // NOTE: You will need to add your SMTP credentials to your .env.local file
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER, // e.g. your company email address
        pass: process.env.SMTP_PASS, // e.g. app password or SMTP password
      },
    });

    // Format the email content based on fields from different forms
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
        <h2 style="color: #0F172A; border-bottom: 2px solid #3366CC; padding-bottom: 10px;">New Lead Submission from Strategix Website</h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #f0f0f0;"><strong>Name:</strong></td>
            <td style="padding: 10px; border-bottom: 1px solid #f0f0f0;">${data.fullName || data.name || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #f0f0f0;"><strong>Email:</strong></td>
            <td style="padding: 10px; border-bottom: 1px solid #f0f0f0;">${data.email || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #f0f0f0;"><strong>Phone:</strong></td>
            <td style="padding: 10px; border-bottom: 1px solid #f0f0f0;">${data.phone || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #f0f0f0;"><strong>Facility Type:</strong></td>
            <td style="padding: 10px; border-bottom: 1px solid #f0f0f0;">${data.facility || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #f0f0f0;"><strong>Emirate:</strong></td>
            <td style="padding: 10px; border-bottom: 1px solid #f0f0f0;">${data.emirate || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #f0f0f0;"><strong>Budget:</strong></td>
            <td style="padding: 10px; border-bottom: 1px solid #f0f0f0;">${data.budget || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #f0f0f0;"><strong>Service Requested:</strong></td>
            <td style="padding: 10px; border-bottom: 1px solid #f0f0f0;">${data.service || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 10px;"><strong>Message:</strong></td>
            <td style="padding: 10px;">${data.message || 'N/A'}</td>
          </tr>
        </table>
        <p style="margin-top: 30px; font-size: 12px; color: #888;">This email was generated automatically by the Strategix UAE website lead form.</p>
      </div>
    `;

    // Setup email data
    const mailOptions = {
      from: process.env.SMTP_FROM || '"Strategix Website" <noreply@strategixuae.com>',
      to: 'info@strategixuae.com', 
      subject: 'New Lead Submission - Strategix Healthcare', 
      html: htmlContent, 
    };

    // Send mail
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Lead submitted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, error: 'Failed to send lead' }, { status: 500 });
  }
}
