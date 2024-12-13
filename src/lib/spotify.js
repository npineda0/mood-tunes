// //node_modules library
// import SpotifyWebApi from 'spotify-web-api-node';

// export const scopes = [
//     "user-read-email",
//     "user-read-private",
//     "playlist-read-collaborative",
//     "streaming",
//     "user-read-private",
//     "user-library-read",
//     "user-top-read",
//     // "user-library-modify",
//     "user-read-playback-state",
//     "user-modify-playback-state",
//     "user-read-currently-playing",
//     "user-read-recently-played",
//     "user-follow-read",
//   ].join(",");
  
// const params = {
// scope: scopes,
// };

// const queryParamString = new URLSearchParams(params);

// //link to authorize users 
// const LOGIN_URL =
// "https://accounts.spotify.com/authorize?" + queryParamString.toString();

// // stores env variables
// const spotifyApi = new SpotifyWebApi({
//   clientId: process.env.SPOTIFY_CLIENT_ID,
//   clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
//   //redirectUri: process.env.SPOTIFY_REDIRECT_URI,
// });

// export default spotifyApi;

// export { LOGIN_URL };