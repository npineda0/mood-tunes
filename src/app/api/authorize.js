// const SPOTIFY_CLIENT_ID = `0bad4a8fcfab45a0a216e226b7164821`;
// const redirectUri = "http://localhost:3000";
// //const baseURL = `https://accounts.spotify.com/api`;

// function generateRandomString(length) {
//   let text = "";
//   const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

//   for (let i = 0; i < length; i++) {
//     text += possible.charAt(Math.floor(Math.random() * possible.length));
//   }
//   return text
// }

// async function generateCodeChallenge(codeVerifier) {
//   function base64encode(string) {
//     return btoa(String.fromCharCode.apply(null, Array.from(string)))
//       .replace(/\+/g, "-")
//       .replace(/\//g, "_")
//       .replace(/=+$/, "")
//   }

//   const encoder = new TextEncoder();
//   const data = encoder.encode(codeVerifier);
//   const digest = await window.crypto.subtle.digest("SHA-256", data);

//   return base64encode(new Uint8Array(digest));
// }

// const codeVerifier = generateRandomString(128);

// let urlParams = new URLSearchParams();

// if (typeof window !== "undefined") {
//   urlParams = new URLSearchParams(window.location.search);
// }

// export const authorize = async () => {
//   generateCodeChallenge(codeVerifier).then(codeChallenge => {
//     const state = generateRandomString(16);
//     const scope =
//       "user-read-private user-read-email streaming user-read-playback-state user-modify-playback-state";

//     sessionStorage.setItem("code_verifier", codeVerifier);

//     const args = new URLSearchParams({
//       response_type: "code",
//       client_id: SPOTIFY_CLIENT_ID,
//       scope: scope,
//       redirect_uri: redirectUri,
//       state: state,
//       code_challenge_method: "S256",
//       code_challenge: codeChallenge
//     })

//     window.location.href = "https://accounts.spotify.com/authorize?" + args;
//   })
// }

// export const getToken = async (code) => {
//   const codeVerifier = sessionStorage.getItem("code_verifier");

//   const body = new URLSearchParams({
//     client_id: SPOTIFY_CLIENT_ID,
//     grant_type: "authorization_code",
//     code: code,
//     redirect_uri: redirectUri ,
//     code_verifier: codeVerifier
//   })
//   try {
//     const response = await fetch("https://accounts.spotify.com/api/token", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded", 
//       },
//       body: body,
//     })

//     return await response.json();
//   } catch (error) {
//     window.location.href = "/";
//   }
// }

// export const refreshSpotifyToken = async () => {
//   const body = new URLSearchParams({
//     client_id: SPOTIFY_CLIENT_ID,
//     grant_type: "refresh_token",
//     refresh_token: currentToken.refresh_token,
//   })
//   try {
//     const response = await fetch("https://accounts.spotify.com/api/token", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded"
//       },
//       body: body
//     })

//     return await response.json();
//   } catch (err) {
//     console.log(err);
//   }
// }