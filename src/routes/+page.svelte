<script>
	let name = '';
	let email = '';
	let message = '';

	async function submitForm() {
		const response = await fetch('/api/contact', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ name, email, message })
		});

		if (response.ok) {
			alert('Nachricht gesendet!');
		} else {
			alert('Ein Fehler ist aufgetreten.');
		}
	}
</script>

<form on:submit|preventDefault={submitForm}>
	<input bind:value={name} placeholder="Name" />
	<input bind:value={email} type="email" placeholder="Email" />
	<textarea bind:value={message} placeholder="Nachricht" />
	<button type="submit">Senden</button>
</form>
