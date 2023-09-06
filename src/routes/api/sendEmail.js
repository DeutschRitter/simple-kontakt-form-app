// src/routes/api/sendEmail.js
import nodemailer from 'nodemailer';

export async function post(request) {
	const { name, email, nachricht } = request.body;

	const transporter = nodemailer.createTransport({
		host: 'smtp-mail.outlook.com',
		port: 587,
		secure: false, // Nutze TLS. SSL wird auf false gesetzt, da das Port nicht 465 ist.
		auth: {
			user: process.env.EMAIL_USER,
			pass: process.env.EMAIL_PASS
		},
		tls: {
			ciphers: 'SSLv3'
		}
	});

	const mailOptions = {
		from: email,
		to: process.env.EMAIL_USER,
		subject: `Neue Nachricht von ${name}`,
		text: nachricht
	};

	try {
		await transporter.sendMail(mailOptions);
		return {
			status: 200,
			body: { message: 'Email sent successfully.' }
		};
	} catch (error) {
		return {
			status: 500,
			body: { error: error.message } // Sendet die genaue Fehlermeldung zurück
		};
	}
}
