"use client";
import Link from "next/link";
//import { getSession } from "next-auth/react";


export default function Questionnaire() {

  return (
    <div className="playlistContainer">
        <div className="playlistDisplay"></div>
        <div className="playlistBtnContainer">
        <Link className="createBtnLink" href="/playlist/questionnaire">
          <button className="createBtn">Create Another Playlist</button>
        </Link> <br></br>
          <button className="listenBtn" href="">Listen on Spotify</button>
        </div>
    </div>
  );
}
