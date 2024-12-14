'use client'
import { useContext, useEffect, useState } from 'react'
import { useSession } from 'next-auth/react';
import { SpotifyContext } from '../context/SpotifyContextProvider';
import requestSongs from '../lib/Spotify/requestSongs/requestSongs';

function SongSearcher() {
    const [songName, setSongName] = useState('');
    const { token: { getAccessToken }, songs: { setResultSongs } } = useContext(SpotifyContext);
    const { data: session } = useSession();
    const refresh_token = session?.token.accessToken;

    const handleChange = ({ target }) => {
        setSongName(target.value);
    }

    const handleSearchError = () => {
        return (
            <div>Error</div>
        )
    }

    const searchSongs = async () => {
        if (songName) {
            const access_token = await getAccessToken(refresh_token);
            const songs = await requestSongs(access_token, songName);
            setResultSongs(songs);
            
            if (songs.length === 0) {
                handleSearchError();
            }
        } else {
            setResultSongs([]);
        }
    }

    useEffect(() => {
        const pause = setTimeout(() => {
            searchSongs();
        }, 2000)
        return () => clearTimeout(pause);
    }, [songName])

    return (
        <section className='songSearcherSection'>
            <div className='songSearcherContent'>
                <p className='songSearchTitle'>Search for any song <i>“names”</i></p>
                <input
                    className='songSearchInput'
                    id='song_name'
                    name='song-name'
                    type='text'
                    placeholder='My song...'
                    maxLength='100'
                    value={songName}
                    onChange={handleChange}
                />
            </div>
        </section>
    )
}

export default SongSearcher