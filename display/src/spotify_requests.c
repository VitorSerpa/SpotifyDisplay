#include <stdio.h>
#include <stdlib.h>

// POST https://accounts.spotify.com/api/token 
// URLPARAMS:{client_id: process.env.CLIENT_ID,
//            grant_type: 'refresh_token',
//            refresh_token: refreshToken,} 
//Retorna com o novo token de acesso
int refresh_acess_token(){
    return 0;
}


//GET "https://api.spotify.com/v1/me/player/currently-playing"
//Header: Authorization: `Bearer ${accessToken} -> AcessToken gerado pelo refresh (expira em 1 hora)
//Retorna com os dados da musica
//Info necessarios: Capa da Musica, Nome Musica, Artista, Duração da musica, Progresso do Player, Estado do Player
int get_music_info(){
    return 0;
}