import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const name = String(formData.get("name") || "");
    const phone = String(formData.get("phone") || "");
    const email = String(formData.get("email") || "");
    const designation = String(formData.get("designation") || "");
    const message = String(formData.get("message") || "");
    const resume = formData.get("resume") as unknown as File | null;

    // Resume handling
    const attachments: any[] = [];
    if (resume && typeof resume.arrayBuffer === "function") {
      const buf = Buffer.from(await resume.arrayBuffer());
      attachments.push({
        filename: resume.name,
        content: buf,
      });
    }

    // Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER, // your Gmail address
        pass: process.env.MAIL_PASS, // app password
      },
    });

    await transporter.sendMail({
      from: `"Zycure Careers" <${process.env.MAIL_USER}>`,
      to: "jaibhalla35@gmail.com",
      subject: `New Application: ${designation} - ${name}`,
      text: `
Name: ${name}
Phone: ${phone}
Email: ${email}
Designation: ${designation}

Message:
${message}
      `,
      html: `
        <h2>New Career Application</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Designation:</b> ${designation}</p>
        <p><b>Message:</b><br/>${message.replace(/\n/g, "<br/>")}</p>
      `,
      attachments,
    });

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json(
      { error: err.message || "Mail send failed" },
      { status: 500 }
    );
  }
}
