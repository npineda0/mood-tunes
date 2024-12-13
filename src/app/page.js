'use client'
//mport { useSession } from "next-auth/react";
//import {getUsername} from "../lib/Spotify/getUserProfile/getUserProfile";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import SongSearcher from '../components/SongSearcher';
import SongsContainer from '../components/SongsContainer';
import PlaylistContainer from '../components/PlaylistContainer';

export default function Home() {
  const { data: session } = useSession();

  //console.log(session);

  if (session) {
    
    return (
      <main className="homeContainerLogin">
        <p className="homeDesc">
        Create your custom mood playlist with MoodTunes!
        </p>
      
        <section className="componentContainer">
          <SongSearcher />
          <SongsContainer />
          <PlaylistContainer />
        </section>
      </main>
    )
  } else {
    return (
      <main className="homeContainer">
      <p className="homeDesc">

       Welcome to Mood Tunes! Your personal playlist generator! Discover
        music you love to match vibes. Just login with Spotify, create your perfect playlist, and customize
       it with ease, all while enjoying a personalized visual experience
       that matches your mood.
      </p>
        <button onClick={() => signIn()} className="homeLoginBtn">Login with Spotify</button>
      </main>
    )
  }
}

