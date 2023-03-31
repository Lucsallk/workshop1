export const load = async ({ fetch, params }) => {
	async function getPosts() {
		const response = await fetch(`http://pge-srv-062/Person/GetById?personId=${params.slug}`);
		const posts = await response.json();
		return posts;
	}

	return {
		getPosts: getPosts()
	};
};

export const actions = {
	deactivePerson: async ({ params }) => {
		const response = await fetch(`http://pge-srv-062/Person/Deactivate?personId=${params.slug}`, {
			method: 'DELETE',
		});
		console.log(response);

		return { success: true };
	}
};
