<form name="contact" netlify netlify-honeypot="bot-field" on:submit={handleSubmit}>
	<p hidden>
		<label>
			Don’t fill this out if you’re human: <input name="bot-field" />
		</label>
	</p>

	<label for="name">Name:</label>
	<input type="text" id="name" name="name" required bind:value={name} />

	<label for="email">E-Mail-Adresse:</label>
	<input type="email" id="email" name="email" required bind:value={email} />

	<label for="subject">Betreff:</label>
	<input type="text" id="subject" name="subject" required bind:value={subject} />

	<label for="message">Nachricht:</label>
	<textarea id="message" name="message" required bind:value={message} />

	<button type="submit">Senden</button>
</form>
