import React, { Component } from 'react';
import Tracklist from './Components/Tracklist/Tracklist';

export default class Playlist extends Component {
    render() {
        return (
            <div className="Playlist">
                <input defaultValue={NewPlaylist}/>
                <Tracklist />
                <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        )
    }
}



