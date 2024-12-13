import { SpotifyCredentials } from "../../../../lib/Spotify/spotifySearchCredentials";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { refresh_token } = await request.json();

    const response = await fetch(SpotifyCredentials.SPOTIFY_TOKEN_ENDPOINT, {
        method: 'POST',
        headers: {
            Authorization: 'Basic ' + SpotifyCredentials.basic,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            grant_type: "refresh_token",
            refresh_token,
            code: refresh_token,
            redirect_uri: 'http://localhost:3000/api/auth/callback/spotify',
        }),
    });

    const {access_token, expires_in} = await response.json()
    return NextResponse.json({access_token, expires_in})
}