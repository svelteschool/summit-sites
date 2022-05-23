export const get = async () => {
	const resp = await fetch('https://sessionize.com/api/v2/xg2w43dc/view/All')
	let { sessions, speakers } = await resp.json()

	sessions = sessions.map(session => ({ ...session, speakers: session.speakers.map(sessionSpeaker => speakers.find(speaker => speaker.id === sessionSpeaker)) }))

	// const isPublished = ['329933', '326239', '324095', '324443', '327225', '331014', '321950', '330396', '322000', '321413', '320713']

	// const exposedSessions = sessions.reduce((acc, session) => isPublished.includes(session.id) ? [...acc, session] : acc, [])

	return {
		status: 200,
		body: sessions
	};
};
