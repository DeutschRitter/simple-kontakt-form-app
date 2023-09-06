<!-- src/routes/kontakt.svelte -->
<script>
	let name = '';
	let email = '';
	let nachricht = '';

	async function sendForm() {
		const response = await fetch('/api/sendEmail', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ name, email, nachricht })
		});
		const data = await response.json();
		if (response.ok) {
			alert('Danke für deine Nachricht!');
			name = '';
			email = '';
			nachricht = '';
		} else {
			alert(`Ein Fehler ist aufgetreten: ${data.error}`);
		}
	}
</script>

<form on:submit|preventDefault={sendForm}>
	<input bind:value={name} placeholder="Name" required />
	<input type="email" bind:value={email} placeholder="Email" required />
	<textarea bind:value={nachricht} placeholder="Deine Nachricht" required />
	<button type="submit">Senden</button>
</form>
