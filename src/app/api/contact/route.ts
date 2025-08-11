import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // SMTP 자격증명 (환경변수 우선 사용)
    const smtpUser = process.env.NAVER_USER || 'dlacoaud92@naver.com';
    const smtpPass = process.env.NAVER_APP_PASSWORD;

    if (!smtpUser || !smtpPass) {
      return NextResponse.json({ error: 'SMTP 자격증명이 설정되지 않았습니다. 서버 환경변수 NAVER_USER, NAVER_APP_PASSWORD를 확인하세요.' }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.naver.com',
      port: 465,
      secure: true,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const mailOptions = {
      from: smtpUser,
      to: smtpUser,
      replyTo: email,
      subject: `[Portfolio] ${subject} - ${name}`,
      text: `From: ${name} <${email}>\nSubject: ${subject}\n\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}


