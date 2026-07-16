import express from "express";
import auth_spotify from "./controllers/auth_spotify.js";
import get_music_info from "./controllers/get_music_info.js";
import callback from "./controllers/callback.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/auth_spotify", auth_spotify);
app.post("/callback", callback);
app.get("/get_music_info", get_music_info);

app.listen(3000, "127.0.0.1", () => {
    console.log("Servidor rodando em http://127.0.0.1:3000/");
});