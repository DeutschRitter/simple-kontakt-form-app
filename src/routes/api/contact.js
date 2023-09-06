import nodemailer from 'nodemailer';

export async function post(request) {
	const { name, email, message } = request.body;

	// E-Mail-Einstellungen erstellen
	let transporter = nodemailer.createTransport({
		service: 'gmail', // Zum Beispiel für Gmail
		auth: {
			user: 'alexander.ritter1978@gmail.com', // Ihre E-Mail
			pass: 'YOUR_EMAIL_PASSWORD' // Ihr E-Mail-Passwort
		}
	});

	// E-Mail-Optionen
	let mailOptions = {
		from: 'alexander.ritter1978@gmail.com',
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
			body: { error: 'Ein Fehler ist aufgetreten beim Senden der E-Mail.' }
		};
	}
}
