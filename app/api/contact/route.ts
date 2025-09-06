// app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { from_name, from_email, from_subject, message } = await req.json();

    if (!from_name || !from_email || !from_subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Nodemailer transporter (use App Password for Gmail!)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER, // your Gmail address
        pass: process.env.MAIL_PASS, // your App Password
      },
    });

    // Email options
    await transporter.sendMail({
      from: `"${from_name}" <${from_email}>`,
      to: "jaibhalla35@gmail.com", // where you want to receive the emails
      subject: from_subject,
      text: message,
      html: `<p><b>Name:</b> ${from_name}</p>
             <p><b>Email:</b> ${from_email}</p>
             <p><b>Subject:</b> ${from_subject}</p>
             <p><b>Message:</b> ${message}</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
