import "svelte";
import HelloWorld from "../components/hello-world.svelte";

const helloWorld = new HelloWorld({
	target: document.body,
});

export default helloWorld;
