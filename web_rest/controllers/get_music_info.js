import axios from "axios";
import { accessToken } from "./callback.js";

const get_music_info = async (req, res) => {
    try {
        const response = await axios.get(
            "https://api.spotify.com/v1/me/player/currently-playing",
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );

        res.json(response.data);
    } catch (err) {
        console.log(err.response?.data);

        res.status(500).json(err.response?.data);
    }
};

export default get_music_info;