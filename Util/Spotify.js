let accessToken;
const clientId = // insert personal client id here - blank for security purposes
const redirectURI = 'http://localhost:3000'

const Spotify = {
    getAccessToken() {
        if (accessToken) {
            return accessToken;
        }

        // check for access token match
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expirationMatch = window.location.href.match(/expires_in=([^&]*)/);

        if (accessTokenMatch && expirationMatch) {
            accessToken = accessTokenMatch[1];
            const expiresIn = Number(expirationMatch[1]);

            // clears parameters allowing us to grab a new access token when it expires
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
            return accessToken;
        } else {
            const accessURL = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
            window.location = accessURL;
        }
    }
}

export default Spotify
