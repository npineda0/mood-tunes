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


