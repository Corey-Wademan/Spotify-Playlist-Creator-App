import React, { Component } from 'react';
import './Playlist.css'
import Tracklist from '../Tracklist/Tracklist';

export default class Playlist extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="Playlist">
               {<input defaultValue={'NewPlaylist'} />}
                <Tracklist tracks={this.props.playListTracks}
                            onRemove={this.props.onRemove}
                            isRemoval={this.props.true}/>
                <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        )
    }
}



