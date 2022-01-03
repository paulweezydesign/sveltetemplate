<script>
	import {Anchor, Container, Heading, Text} from "@kahi-ui/framework";

	export let name;
</script>

<Container is="main">
	<Heading>Hello {name}!</Heading>

	<Text>
		Visit the <Anchor href="https://svelte.dev/tutorial" palette="accent">Svelte tutorial</Anchor>
		to learn how to build Svelte apps.
	</Text>
</Container>
