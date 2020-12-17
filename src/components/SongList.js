import React, { useState, useEffect } from 'react'
import NewSongForm from './NewSongForm'
import { v4 as uuidv4 } from 'uuid'; 

const SongList = () => {
    const [songs, setSongs] = useState([
        { title: 'almost home', id: uuidv4() },
        { title: 'memory gospel', id: uuidv4() },
        { title: 'this wild darkness', id: uuidv4() }
    ])
    const addSong = (title) => {
        setSongs([...songs, {title: title, id: uuidv4()}])
    }
    useEffect(() => {
        console.log('Hook ran');
    }, [songs])
    return (  
        <div className="song-list">
            <ul>
                {songs.map(song => {
                    return (<li key={song.id}>{song.title}</li>)
                })}
            </ul>
            <NewSongForm addSong={addSong}/>
        </div>

    );
}
 
export default SongList;

