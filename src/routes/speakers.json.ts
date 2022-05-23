export const get = async () => {
    const resp = await fetch('https://sessionize.com/api/v2/xg2w43dc/view/All')
    let { speakers } = await resp.json()

    const topSpeakersFirst = speakers.sort((a, b) => Number(b.isTopSpeaker) - Number(a.isTopSpeaker))

    const richFirst = topSpeakersFirst.sort((a, b) => {
        if (a.fullName === 'Rich Harris') return -1
        return 0
    })

    const withMoreSoon = richFirst.push({
        bio: 'These are just the first. More speakers announced soon. Want to speak at the event? Send in a proposal 👆',
        isTopSpeaker: false,
        fullName: 'More coming soon...',
    })

    return {
        status: 200,
        body: richFirst
    };
}