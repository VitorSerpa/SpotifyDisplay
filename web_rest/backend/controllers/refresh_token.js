import axios from "axios";

const refreshToken = "BQASYKC-g007PLMMoGqZmkJFfJl88WCSTYjHNygirE0vMWcDqUsPQ81IlADYJsdHyPVI1nPR9J3nJso6Jk1-KfCyMatc354UVoHGgPMSUH71_mjtDrVGjFQkX8JpGm4beEtKTQpfaL3td7DaSO3rcQ_55XlJ6oeKPmVto5n7kRzgyNViAVv5JyuaDuLDlWYa4xQ5E8vZvUaTTJFWgkq8ToCgJH3y2nSkX0xUHFSXKSdjXPe3jF4wZIYozHrW1kXT";
const url = "https://accounts.spotify.com/api/token";

const refreshAcessToken = async (req, res) => {
    try {
        const body = new URLSearchParams({
            client_id: process.env.CLIENT_ID,
            grant_type: 'refresh_token',
            refresh_token: refreshToken,
        });

        const result = await axios.post(url, body, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });

        const response = await result.json();
        res.send(response.data)
    } catch (error) {
        res.send(error)
    }
}

export default refreshAcessToken;