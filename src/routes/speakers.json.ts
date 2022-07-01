export const get = async () => {
    const resp = await fetch('https://sessionize.com/api/v2/xg2w43dc/view/All')
    let { speakers } = await resp.json()

    const topSpeakersFirst = speakers.sort((a, b) => Number(b.isTopSpeaker) - Number(a.isTopSpeaker))

    const richFirst = topSpeakersFirst.sort((a, b) => {
        if (a.fullName === 'Rich Harris') return -1
        return 0
    })
    return {
        status: 200,
        body: richFirst
    };
}