<script>
	import { getContext, createEventDispatcher } from "svelte";
	import Canvas from "$components/Canvas.svelte";
	const copy = getContext("copy");

	const dispatch = createEventDispatcher();

	export let value;

	let invalid;
	let review;
	let isHuman;
	let path;

	function onSubmit() {
		invalid = undefined;
		if (review) return;
		if (path.length > 4) {
			review = true;
			setTimeout(() => {
				review = false;
				dispatch("update", { isHuman, path });
			}, 1500);
		} else invalid = "You must draw a circle";
	}
</script>

<fieldset>
	<div class="step human">
		<div>
			<label for="human">Are you a human?</label>
			<input type="checkbox" id="human" name="human" bind:checked={isHuman} />
		</div>
		<div class="draw" class:visible={isHuman}>
			<p>{@html copy.humanPrompt}</p>
			<Canvas human={true} bind:path disabled={review} />
		</div>
	</div>
</fieldset>

{#if isHuman}
	<button disabled={review} on:click|preventDefault={onSubmit}>{value}</button>
{/if}

{#if invalid}
	<p class="invalid">{invalid}</p>
{/if}

{#if review}
	<p class="review">{copy.humanReview}</p>
{/if}

<style>
	fieldset {
		border: none;
		padding: 0;
	}

	label {
		margin-bottom: 4px;
	}

	fieldset div {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		margin-bottom: 8px;
	}

	.human {
		margin: 0;
	}

	input[type="checkbox"] {
		width: 1.5em;
		height: 1.5em;
	}

	.draw {
		display: none;
		margin: 0;
	}

	.draw.visible {
		display: block;
	}

	.invalid {
		color: red;
	}

	.review {
		color: green;
	}
</style>
