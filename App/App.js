import React from 'react';
import './App.css'
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';



export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchResults: [
                {
                 name: 'result1',
                 artist: 'artist result1',
                 album: 'album result1',
                 id: 'result 1'
                },
                {
                name: 'result12',
                artist: 'artist result2',
                album: 'album result2',
                id: 'result 2'
                }
            ],
            playListName: 'Jam',
            playListTracks: [
                {
                    name: 'name1',
                    artist: 'artist1',
                    album: 'album1',
                    id: 'id1',
                }
            ]
        }

        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
    };

    //methods

    addTrack(track) {
        let tracks = this.state.playListTracks;
        if (tracks.find(savedTrack => savedTrack.id === track.id)) {
            return;
        }
        tracks.push(track)
        this.setState({
            playListTracks: tracks
     })
    };

    removeTrack(track) {
        let tracks = this.state.playListTracks;
        tracks.filter(savedTrack => savedTrack.id !== track.id);
        this.set({
            playListTracks: tracks
        })
    };


    render() {
        return (
            <div>
                <h1>Ja<span className="highlight">mmm</span>ing</h1>
                <div className="App">
                <SearchBar />
                    <div className="App-playlist">
                        <SearchResults 
                            searchResults={this.state.searchResults} 
                            onAdd={this.addTrack}
                            />
                        <Playlist 
                            playListName={this.state.playListName}
                            playListTracks={this.state.playListTracks}
                            onRemove={this.removeTrack}
                            />
                    </div>
                </div>
            </div>
        )
    }
}