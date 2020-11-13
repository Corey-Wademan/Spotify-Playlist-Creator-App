import React, { Component } from 'react';
import './Playlist.css'
import Tracklist from '../Tracklist/Tracklist';

export default class Playlist extends Component {
    constructor(props) {
        super(props);

        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleNameChange(event) {
        this.props.onNameChange(event.target.value)
    };


    render() {
        return (
            <div className="Playlist">
               {<input defaultValue={'NewPlaylist'} 
                       onChange={this.handleNameChange}
                        />}
                <Tracklist tracks={this.props.playListTracks}
                            onRemove={this.props.onRemove}
                            isRemoval={true}
                            
                            
                            />
                <button 
                    className="Playlist-save"
                    onClick={this.props.onSave}
                >SAVE TO SPOTIFY</button>
            </div>
        )
    }
}



