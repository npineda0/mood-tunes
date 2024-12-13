'use client'
import { useEffect, useState } from "react"
import SongContainer from "./SongContainer"
//import Button from "./Button";
//import ErrorBox from "./ErrorBox";
import { useContext } from 'react';
import { SpotifyContext } from '../context/SpotifyContextProvider';
import { useSession } from "next-auth/react";
import createNewPlaylist from "../lib/Spotify/createNewPlaylist/createNewPlaylist";

function PlaylistContainer() {
    const [playlistName, setPlaylistName] = useState('New Playlist');
    const { token: { getAccessToken }, playlist: { playlistSongs } } = useContext(SpotifyContext)
    const { data: session } = useSession();
    const refresh_token = session?.token.accessToken;

    const [buttonColor, setButtonColor] = useState('gray');
    const [buttonText, setButtonText] = useState('Save this in Spotify');
    const [errorModal, setErrorModal] = useState(false);

    const handleChange = ({ target }) => {
        setPlaylistName(target.value);
    }

    const handleSuccessCall = () => {
        setButtonColor('green');
        setButtonText('Ready! 🥳');
        resetButtonText();
    }

    const handleErrorCall = () => {
        setButtonColor('red');
        setButtonText('Try again in a second!');
        setErrorModal(true);
        resetButtonText();
    }

    const resetButtonText = () => {
        setTimeout(() => setButtonText('Save this in Spotify'), 3000);
    }

    const createPlaylist = async () => {
        setButtonColor('gray');
        setErrorModal(false);
        try {
            const access_token = await getAccessToken(refresh_token);
            const response = await createNewPlaylist(access_token, playlistName,  playlistSongs);
            console.log(response);
            handleSuccessCall();
            return response;
        } catch (e) {
            setErrorModal(true);
            handleErrorCall();
            console.log(e);
            return e;
        }
    }

    useEffect(() => {
        if (playlistSongs.length > 0) {
            setButtonColor('green');
        } else {
            setButtonColor('gray');
        }
    }, [playlistSongs])

    return (
        <div className='playlistContainer'>
            <div className='playlistContainerView songs-container'>
                <input
                    className='playlistContainerInput header-bold max-w-full rounded-2xl rounded-b-none focus-visible:outline-2 focus-visible:outline-white hover:opacity-70'
                    style={{ background: 'none' }}
                    value={playlistName}
                    placeholder="Playlist Name"
                    onChange={handleChange}
                />
                <hr className='playlistContainerLine' />
                <div className='playlistContainerSong'>
                    {playlistSongs.map((song) => {
                        return (
                            <SongContainer
                                key={song.id}
                                content={song}
                                isRemovable={true}
                            />
                        )
                    })}
                </div>

               

                <div className='playlistContainerButton'>
                    <button className='button' color={buttonColor} toggle={() => createPlaylist()}>{buttonText}</button>
                </div>
            </div>
        </div>
    )
}

export default PlaylistContainer