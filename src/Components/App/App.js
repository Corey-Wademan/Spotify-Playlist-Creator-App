import React from 'react';
import './App.css'
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../Util/Spotify';
require('dotenv').config();

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchResults: [],
            playListName: 'My Playlist',
            playListTracks: []
        }

        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
        this.updatePlaylistName = this.updatePlaylistName.bind(this);
        this.savePlaylist = this.savePlaylist.bind(this);
        this.search = this.search.bind(this);
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
        tracks = tracks.filter(savedTrack => savedTrack.id !== track.id);
        this.setState({
            playListTracks: tracks
        })
    };

    updatePlaylistName(name) {
        this.setState({
            playListName: name
        })
    };

    savePlaylist() {
        const trackURIs = this.state.playListTracks.map(track => track);
        Spotify.savePlaylist(this.state.playListName, trackURIs).then(() => {
            this.setState({
                playListName: 'New Playlist',
                playListTracks: []
            })
        })
    };

    search(searchTerm) {  
        Spotify.search(searchTerm).then(searchResults => {
                this.setState({
                    searchResults: searchResults
                });
        });
    };

    render() { 
        return (
            <div>
                <h1>Ja<span className="highlight">mmm</span>ing</h1>
                <div className="App">
                <SearchBar 
                    onSearch={this.search}
                />
                    <div className="App-playlist">
                        <SearchResults      
                            searchResults={this.state.searchResults} 
                            onAdd={this.addTrack}
                            onSearch={this.search}
                            />                        
                        <Playlist 
                            playListName={this.state.playListName}
                            playListTracks={this.state.playListTracks}
                            onRemove={this.removeTrack}
                            onNameChange={this.updatePlaylistName}
                            onSave={this.savePlaylist}
                            />
                    </div>
                </div>
            </div>
        )
    }
}


