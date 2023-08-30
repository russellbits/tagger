import { supabase } from '$lib/supabaseClient';

export async function load() {
	const { data: articles } = await supabase.from('articles').select();
	const { data: labels } = await supabase.from('labels').select();
	const uniqueLabels = labels.reduce((accumulator, label) => {
		const name = label.name;

		// Check if the name is not already in the accumulator
		if (!accumulator.some((obj) => obj.name === name)) {
			accumulator.push(label);
		}

		return accumulator;
	}, []);

	return {
		articles: articles ?? [],
		labels: uniqueLabels ?? []
	};
}
