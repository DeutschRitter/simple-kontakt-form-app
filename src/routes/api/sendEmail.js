// src/routes/api/sendEmail.js
import nodemailer from 'nodemailer';

export async function post(request) {
	const { name, email, nachricht } = request.body;

	const transporter = nodemailer.createTransport({
		service: 'gmail', // oder ein anderer E-Mail-Anbieter
		auth: {
			user: process.env.EMAIL_USER,
			pass: process.env.EMAIL_PASS
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
			body: { error: 'Error sending email.' }
		};
	}
}
