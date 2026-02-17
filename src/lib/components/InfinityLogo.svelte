<script lang="ts">
	let { size = 40, className = '' } = $props();
</script>

<svg
	width={size}
	height={size * 0.5}
	viewBox="0 0 100 50"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
	class={className}
>
	<path
		d="M50 25C50 25 62 8 75 8C88 8 95 18 95 25C95 32 88 42 75 42C62 42 50 25 50 25ZM50 25C50 25 38 8 25 8C12 8 5 18 5 25C5 32 12 42 25 42C38 42 50 25 50 25Z"
		stroke="var(--color-rpa-accent)"
		stroke-width="3"
		stroke-linecap="round"
		stroke-linejoin="round"
		class="animate-draw-infinity"
	/>
</svg>
