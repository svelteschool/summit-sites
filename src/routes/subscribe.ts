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
				api_key: '935aea23-c4b6-451a-a638-1fadc96a7420',
				email_address: request.body.get('email')
			})
		}
	);

	const response = await rawResponse.json();

	if (request.headers.accept !== 'application/json') {
		return {
			status: 303,
			headers: {
				location: '/subscribe'
			}
		};
	}

	return {
		status: rawResponse.status,
		body: response
	};
};
