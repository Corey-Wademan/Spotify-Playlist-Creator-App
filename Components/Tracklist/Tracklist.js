import React, { Component } from 'react';
import './Tracklist.css'
import Track from '../Track/Track';
import SearchResults from '../SearchResults/SearchResults';

export default class Tracklist extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        return (
            <div className="TrackList">
                {
                    this.props.tracks.map((track) => {
                        return (
                            <Track track={track} 
                                   key={track.id}
                                   onAdd={this.props.onAdd}/>
                        )
                    })
                }
                
            </div>
        )
    }
}



