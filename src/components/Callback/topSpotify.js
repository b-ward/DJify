
async function getTopSpotify(accessToken,timePeriod) {
    var spotifyHeaders = new Headers();
    spotifyHeaders.append('Content-Type', 'application/json');
    spotifyHeaders.append('Authorization', 'Bearer ' + accessToken);

    var myInit = {
    method: 'GET',
    headers: spotifyHeaders,
    mode: 'cors',
    cache: 'default'
    };
    
    var topSpotifyRequest = new Request(`https://api.spotify.com/v1/me/top/tracks?time_range=${timePeriod}&limit=10`, myInit);
    let response = await fetch(topSpotifyRequest);
    let topSpotifyData = await response.text();
    topSpotifyData = JSON.parse(topSpotifyData);
    var topSpotifyDataTransformed = [];
    for (let i = 0; i < topSpotifyData["items"].length; i++) {
        topSpotifyDataTransformed.push({
            id: i,
            songName: topSpotifyData["items"][i]["name"],
            artist: topSpotifyData["items"][i]["artists"][0]["name"],
            length: topSpotifyData["items"][i]["duration_ms"],
            image: topSpotifyData["items"][i]["album"]["images"][0]["url"],
            preview: topSpotifyData["items"][i]["preview_url"]
        })
    }
    //{id:1,name:"Crosses",Length:15649,Image:"www.asd..."}
    return topSpotifyDataTransformed;
}

export default getTopSpotify;

//https://accounts.spotify.com/authorize?client_id=8dd16f29afcd4475a2e14131e2e0004d&redirect_uri=https:%2F%2Fdjify.netlify.app%2F&scope=user-top-read&response_type=token&state=12

