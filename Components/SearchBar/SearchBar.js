import React from 'react';
import './SearchBar.css';

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
        }

        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
    }

    search() {
        this.props.onSearch(this.state.searchTerm)
    };

    handleTermChange(event) {
        let termChange = event.target.value;
        this.setState({ searchTerm: termChange })
    };



    render() {
        return (
            <div className="SearchBar">
                <input placeholder="Enter A Song, Album, or Artist" 
                       onChange={this.handleTermChange} 
                        />
                <button className="SearchButton">SEARCH</button>
            </div>
        )
    }
}
