<script>
	let showPopup = false;

	async function handleSubmit(event) {
		event.preventDefault();

		const formData = new FormData(event.target);
		const response = await fetch('/danke', {
			method: 'POST',
			body: formData
		});

		if (response.ok) {
			showPopup = true;
		} else {
			// Fehlerbehandlung, z.B. eine Fehlermeldung anzeigen
			console.error('Form submission failed');
		}
	}
</script>

<form
	on:submit={handleSubmit}
	name="netlify-form-example"
	netlify-honeypot="bot-field"
	data-netlify="true"
>
	<input type="hidden" name="form-name" value="netlify-form-example" />
	<label for="name">Name</label>
	<input name="name" id="name" required placeholder="Name" type="text" />
	<label for="email">Email</label>
	<input name="email" id="email" required placeholder="Email" type="email" />
	<label for="message">Message</label>
	<input name="message" id="message" required placeholder="Message" type="text" />
	<input type="submit" value="Submit" />
</form>

{#if showPopup}
	<div class="popup">
		Danke! Ihre Nachricht wurde versendet.
		<button on:click={() => (showPopup = false)}>Schließen</button>
	</div>
{/if}

<style>
	.popup {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		padding: 20px;
		background-color: #fff;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		z-index: 1000;
	}
</style>
