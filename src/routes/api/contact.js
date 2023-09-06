import nodemailer from 'nodemailer';

const userEmail = process.env.EMAIL_USER;
const userPassword = process.env.EMAIL_PASS;

export async function post(request) {
	const { name, email, message } = request.body;

	// E-Mail-Einstellungen erstellen
	let transporter = nodemailer.createTransport({
		service: 'gmail', // Zum Beispiel für Gmail
		auth: {
			user: userEmail, // Ihre E-Mail
			pass: userPassword // Ihr E-Mail-Passwort
		}
	});

	// E-Mail-Optionen
	let mailOptions = {
		from: userEmail,
		to: 'RECIPIENT_EMAIL@gmail.com',
		subject: 'Neue Kontaktanfrage',
		text: `Name: ${name}\nEmail: ${email}\nNachricht: ${message}`
	};

	// E-Mail versenden
	try {
		let info = await transporter.sendMail(mailOptions);
		return {
			status: 200,
			body: { message: `E-Mail gesendet: ${info.response}` }
		};
	} catch (error) {
		return {
			status: 500,
			body: { error: error.message }
		};
	}
}
