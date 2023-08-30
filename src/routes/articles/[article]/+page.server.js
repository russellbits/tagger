import { supabase } from '$lib/supabaseClient';

export async function load({ params }) {
	const { slug } = params;
	const { data: article, error } = await supabase
		.from('articles')
		.select()
		.eq('slug', slug)
		.single();

	if (error) {
		console.error(error);
		return {
			status: 500,
			error: `Failed to load article with slug ${slug}`
		};
	}

	return {
		props: {
			article
		}
	};
}
