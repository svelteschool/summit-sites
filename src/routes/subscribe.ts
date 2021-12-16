import type { RequestHandler } from '@sveltejs/kit';
import type { Locals } from '$lib/types';

// POST /subscribe
export const post: RequestHandler<Locals, FormData> = async (request) => {
	const rawResponse = await fetch(
		'https://emailoctopus.com/api/1.5/lists/a3d49b32-0df8-11eb-a3d0-06b4694bee2a/contacts',
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				api_key: process.env.EMAIL_API_KEY,
				email_address: request.body.get('email')
			})
		}
	);

	const response = await rawResponse.json();

	if (request.headers.accept !== 'application/json') {
		return {
			status: 303,
			headers: {
				location: '/'
			}
		};
	}

	return {
		status: rawResponse.status,
		body: response
	};
};
