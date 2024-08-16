const apiURL = "https://ws.audioscrobbler.com/2.0/";

export default function getLatestTrack() {
    const recentTracks = fetch(
        `${apiURL}?method=user.getrecenttracks&user=${import.meta.env.LFM_USER}&api_key=${import.meta.env.LFM_API_KEY}&format=json`,
    );

    console.log(recentTracks);
}
