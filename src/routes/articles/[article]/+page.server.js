import { supabase } from '$lib/supabaseClient';

export async function load({ params }) {
	// console.log('Parameters available: ', params);
	const slug = params.article;
	// console.log('Requested slug was: ', slug);
	const { data: article, error } = await supabase
		.from('articles')
		.select()
		.eq('slug', slug)
		.single();

	if (error) {
		console.error(error);
		return {
			status: 500,
			error: `Russell, failed to load article with slug ${slug}`
		};
	} else {
		console.log('Data is now: ', article);
	}

	return {
		props: {
			article
		}
	};
}
