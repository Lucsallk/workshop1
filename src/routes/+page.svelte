<script>
	export let data;
	$: ({ getPosts } = data);
</script>

<main class="flex justify-center mt-5">
	<div class="flex flex-col">
		{#each getPosts as { fullName, cpf, personId }}
			<div class="bg-pge-cinza my-1 p-2 rounded-lg text-start font-medium hover:bg-neutral-500">
				<a href="/{personId}">
                    {fullName} - {cpf}
                </a>
			</div>
		{/each}
	</div>
</main>
