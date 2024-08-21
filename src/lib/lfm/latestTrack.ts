import axios from "axios";

const API_KEY = import.meta.env.LFM_API_KEY; // Replace with your Last.fm API key

interface Track {
    name: string;
    artist: string;
    album: string;
    date: {
        uts: number; // Unix timestamp
        text: string; // Date in human-readable format
    };
}

interface UserRecentTracksResponse {
    recenttracks: {
        track: Track[];
        "@attr": {
            user: string;
        };
    };
}

/**
 * Get the latest track of a user from Last.fm
 * @param username - The Last.fm username
 * @returns The latest track or an error message
 */
async function getLatestTrack(username: string): Promise<Track | string> {
    const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks`;
    const params = {
        user: username,
        api_key: API_KEY,
        format: "json",
        limit: 1, // We only want the latest track
    };

    try {
        const response = await axios.get<UserRecentTracksResponse>(url, {
            params,
        });
        const tracks = response.data.recenttracks.track;

        if (tracks.length === 0) {
            return "No recent tracks found for this user.";
        }

        return tracks[0]; // Return the latest track
    } catch (error) {
        console.error("Error fetching data from Last.fm:", error);
        return "An error occurred while fetching the latest track.";
    }
}

// Example usage:
getLatestTrack("lxjv")
    .then((track) => {
        console.log(track.artist);
    })
    .catch((error) => {
        console.error(error);
    });
