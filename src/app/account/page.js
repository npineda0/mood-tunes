"use client";
import { signOut, signIn, useSession} from "next-auth/react";
import Link from "next/link";
import { SpotifyContext } from "../../context/SpotifyContextProvider";
//import { getUserProfile } from '../../lib/Spotify/getUserProfile/getUserProfile';
//import {userName} from '../api/spotify/requestUser/route';
import getUsername from '../../lib/Spotify/getUserProfile/getUserProfile';
//mport {profile} from '../api/spotify/requestUser/route';
//import React from 'react';

export default function Account() {
  const { data: session } = useSession();
  
  // const displayUser = async () => {
  //   const profile = await getUsername;
  // }
  
  if (session) {
    return (
      <main className='accountContainer'>
        <p className='accountTxt'> Welcome,{' '}
        {session.status === 'authenticated'
          ? session.data.user?.name || 'stranger'
          : 'friend'}! </p>
        <Link href='/'>
          <button className="accountBtn">Create Playlist</button>
        </Link>
        <button onClick={() => signOut()} className='accountBtn'>Logout of Spotify</button>
      </main>
    )
  } else {
    return (
      <main className='accountContainer'>
        <p className='accountTxt'> Login with your spotify account to view account details!</p>
        <button onClick={() => signIn()} className='accountBtn'>Login with Spotify</button>
      </main>
    )
  }
}

{/* <p className='accountTxt'> Welcome,{' '}
{session.status === 'authenticated'
  ? session.data.user?.name || 'stranger'
  : 'friend'}!</p> */}