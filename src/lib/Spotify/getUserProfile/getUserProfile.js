import { SpotifyCredentials } from "../spotifySearchCredentials";
//const profile = await fetchProfile(accessToken);

export const getUsername = async (access_token) => {
    const result = await fetch(SpotifyCredentials.USER_ID_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        }
    });
    // const { display_name } = await response.json();
    // console.log(display_name)
    // return display_name;

    const data = await result.json();

    return data;
    //const profile = await getUsername(access_token);
};




// async function fetchProfile(token) {
//     const result = await fetch("https://api.spotify.com/v1/me", {
//         method: "GET", headers: { Authorization: `Bearer ${token}` }
//     });

//     return await result.json();
// }

// export default fetchProfile(token);

// export const getUserProfile = async (access_token) => {
//     const result = await fetch(SpotifyCredentials.USER_ID_ENDPOINT, {
//         method: "GET",
//         headers: {
//             Authorization: `Bearer ${access_token}`,
//         }
//     });
//     const { display_name } = await result.json();
//     return display_name;

// }
    // try {
    //     const result = await fetch(SpotifyCredentials.USER_ID_ENDPOINT, {
    //     method: "GET", headers: { Authorization: `Bearer ${access_token}` }
    // });

    // return await result.json();
    // } catch (e) {
    //     console.log(e);
    //     return [];
    // }
    
// const response = await fetch(SpotifyCredentials.USER_ID_ENDPOINT, {
//     headers: {
//         Authorization: `Bearer ${access_token}`,
//     }
// });
// const { id } = await response.json();
// return id;
// const response = await fetch(SpotifyCredentials.USER_ID_ENDPOINT, {
//     method: "GET",
//     headers: {
//         Authorization: `Bearer ${access_token}`,
//     }
// });
// const { display_name } = await response.json();
// return display_name;