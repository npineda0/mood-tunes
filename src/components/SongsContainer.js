'use client'
import SongContainer from "./SongContainer"
import { useContext, useEffect } from "react"
import { SpotifyContext } from "../context/SpotifyContextProvider"

function SongsContainer() {
  const { songs: { resultSongs } } = useContext(SpotifyContext);

  return (
    <div className='songsContainer'>
      <div className='songscontainerTxt'>
        <h2 className='songsHeader'>Results</h2>
        <hr className='songscontainerLine' />
        <div className='songscontainerSection'>
          {resultSongs.map((song) => {
            return (
              <SongContainer
                key={song.id}
                content={song}
                isRemovable={false}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default SongsContainer