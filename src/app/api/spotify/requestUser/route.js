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

