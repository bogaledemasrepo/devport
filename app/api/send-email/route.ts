import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface EmailRequest {
  to: string;
  subject: string;
  message: string;
}

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, subject, message } = await req.json();
    const to = process.env.EMAIL_USER;
    if (!to || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const htmlContent = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e4e4e7; border-radius: 12px;">
        <h2 style="color: #09090b;">New Contact Form Message</h2>
        <p><strong>From:</strong> ${firstName} ${lastName} (${email})</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr style="border: none; border-top: 1px solid #e4e4e7; margin: 20px 0;" />
        <div style="background-color: #f8fafc; padding: 16px; border-radius: 8px; white-space: pre-wrap;">
          ${message}
        </div>
      </div>
    `;

    const mailOptions = {
      from: "Portfolio Contact <${onboarding@resend.dev}>",
      to: process.env.EMAIL_USER, // Replace with your target email address
      replyTo: email,
      subject: `Inquiry: ${subject}`,
      html: htmlContent,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: `Failed to send email: ${(error as Error).message}` },
      { status: 500 }
    );
  }
}
