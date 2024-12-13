'use client'
import { useContext, useEffect } from 'react'
import Image from 'next/image'
import addIcon from '../../public/add.png';
import removeIcon from '../../public/minus.png'
import { SpotifyContext } from '../context/SpotifyContextProvider'

function SongContainer({ content, isRemovable = false }) {
  const { playlist: { addToPlaylist, removeFromPlaylist } } = useContext(SpotifyContext);

  return (
    <div className='songContainer'>
      <div className='songContainerHeader'>
        <h4 className='songTitle'>{content.song_name}</h4>
        <p className='ligth-text'>{content.artist}  |  {content.album}</p>
      </div>
      <span className='viewSongContainer'>
        <Image
          className='viewSongContainerImg'
          src={isRemovable ? removeIcon : addIcon}
          alt='add or remove icon'
          onClick={() => {
            if(!isRemovable){
              addToPlaylist(content);
            } else {
              removeFromPlaylist(content.id);
            }
          }}
        />
      </span>
    </div>
  )
}

export default SongContainer