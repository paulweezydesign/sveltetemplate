import "@kahi-ui/framework/dist/kahi-ui.framework.css";

import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;