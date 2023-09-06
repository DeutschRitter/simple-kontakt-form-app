<form name="contact" action="/danke" method="POST" data-netlify="true">
	<input type="hidden" name="form-name" value="contact" />

	<div>
		<label for="name">Name:</label>
		<input type="text" id="name" name="name" required />
	</div>

	<div>
		<label for="email">Email:</label>
		<input type="email" id="email" name="email" required />
	</div>

	<div>
		<label for="message">Nachricht:</label>
		<textarea id="message" name="message" required />
	</div>

	<div>
		<button type="submit">Senden</button>
	</div>
</form>
