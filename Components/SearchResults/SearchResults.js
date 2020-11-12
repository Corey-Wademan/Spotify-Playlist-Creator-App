import React, { Component } from 'react'
import Tracklist from './Components/Tracklist/Tracklis';

export default class SearchResults extends Component {
    render() {
        return (
            <div className="SearchResults">
                <h2>Results</h2>
                <Tracklist />
            </div>
        )
    }
}
