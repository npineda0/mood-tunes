//import { SpotifyCredentials } from "@/lib/Spotify/spotifySearchCredentials";
import { SpotifyCredentials } from "../../../../lib/Spotify/spotifySearchCredentials";
import { NextResponse } from "next/server";
import { getUsername } from "../../../../lib/Spotify/getUserProfile/getUserProfile";
//import { resourceLimits } from "worker_threads";

export async function POST(request) {
    const { access_token } = await request.json();
    const response = await getUsername(access_token);

    return NextResponse.json({ response })
}



// export async function POST(request) {
//     const { access_token } = await request.json();

//     const response = await fetch(SpotifyCredentials.USER_ID_ENDPOINT, {
//         method: 'GET',
//         headers: {
//             Authorization: `Bearer ${access_token}`,
//         },
//     });

//     //return await response.json();
//     const data = await response.json();

//     //const profile = await getUsername(access_token);

//     return NextResponse.json({ data })
// }

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