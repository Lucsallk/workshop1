<script>
	import icone from '$lib/images/icone.svg';
	export let data;
	$: ({ getPosts } = data);

	// $: console.log(getPosts.birthDate);
	// function parseDate(data) {
	// 	let test = data.getPosts.birthDate;
	// 	let date = test.split('T');
	// 	return date[0];
	// }
	let test = data.getPosts.birthDate;
	let date = test.split('T');
	date = date[0];
	// const teste = formatDate(getPosts.birthDate);
</script>

<main class="flex flex-col items-center justify-center mt-10">
	<div class="flex max-w-4xl p-4 items-center bg-pge-cinza rounded-lg">
		<img src={icone} alt="icone" class="h-52" />

		<div class="flex flex-col">
			<h1 class="text-2xl mb-2">{getPosts.fullName}</h1>
			<div class="grid grid-cols-2 gap-2 text-lg">
				<div>
					<span class="border-b border-black">
						CPF: <input
							class="bg-transparent focus:outline-none font-medium px-2 rounded-r-md"
							type="text"
							value={getPosts.cpf}
						/>
					</span>
				</div>
				<div>
					<span class="border-b border-black">
						RG: <input
							class="bg-transparent focus:outline-none font-medium px-2 rounded-r-md"
							type="text"
							value={getPosts.rg}
						/>
					</span>
				</div>
				<div>
					<span class="border-b border-black">
						Pis: <input
							class="bg-transparent focus:outline-none font-medium px-2 rounded-r-md"
							type="text"
							value={getPosts.pisNumber}
						/>
					</span>
				</div>
				<div>
					<span class="border-b border-black">
						Nascimento: <input
							class="bg-transparent focus:outline-none font-medium px-2 rounded-r-md"
							type="date"
							value={date}
						/>
					</span>
				</div>
				<div>
					<span class="border-b border-black">
						Gênero: <input
							class="bg-transparent focus:outline-none font-medium px-2 w-40 rounded-r-md"
							type="text"
							value={getPosts.gender}
						/>
					</span>
				</div>
				<div>
					<span class="border-b border-black">
						Nacionalidade: <input
							class="bg-transparent focus:outline-none font-medium px-2 w-24 rounded-r-md"
							type="text"
							value={getPosts.nacionality}
						/>
					</span>
				</div>
				<div class="col-span-2">
					<span class="border-b border-black">
						Email: <input
							class="bg-transparent focus:outline-none font-medium w-5/6 px-2 rounded-r-md"
							type="email"
							value={getPosts.email}
						/>
					</span>
				</div>
				<div class="col-span-2">
					<span class="border-b border-black">
						Endereço: <input
							class="bg-transparent focus:outline-none font-medium w-5/6 px-2 rounded-r-md"
							type="email"
							value={getPosts.address}
						/>
					</span>
				</div>
				<div>
					<span class="border-b border-black">
						Telefone: <input
							class="bg-transparent focus:outline-none font-medium px-2 rounded-r-md"
							type="text"
							value={getPosts.phoneNumber}
						/>
					</span>
				</div>
				<div>
					<span class="border-b border-black">
						Local de nascimento: <input
							class="bg-transparent focus:outline-none font-medium px-2 w-24 rounded-r-md"
							type="text"
							value={getPosts.birthPlace}
						/>
					</span>
				</div>
				<div class="col-span-2">
					<span class="border-b border-black">
						Nome da Mãe: <input
							class="bg-transparent focus:outline-none font-medium px-2 rounded-r-md"
							type="text"
							value={getPosts.motherName}
						/>
					</span>
				</div>
			</div>
		</div>
	</div>
	<div class="flex mt-4">
		<button
			class="bg-pge mr-2 hover:bg-neutral-500 rounded-md p-2 text-md font-medium text-white"
			type="submit"
		>
			Alterar dados
		</button>
		<form method="POST" action="?/deactivePerson">
			<button class="bg-red-700 hover:bg-red-500 rounded-md p-2 text-md font-medium text-white">
				Desativar membro
			</button>
		</form>
	</div>
</main>
