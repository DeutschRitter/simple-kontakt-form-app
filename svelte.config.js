import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
		// ... Sie können hier weitere Konfigurationsoptionen hinzufügen, falls benötigt.
	}
};

export default config;
