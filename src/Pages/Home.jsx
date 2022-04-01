import React, { Component } from "react";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import config from "../lib/config";

class Home extends Component {
  state = {
    accessToken: "",
    isAuthorize: false,
    tracks: [],
  };

  getHashParams() {
    const hashParams = {};
    const r = /([^&;=]+)=?([^&;]*)/g;
    const q = window.location.hash.substring(1);
    let e = r.exec(q);

    while (e) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
      e = r.exec(q);
    }
    return hashParams;
  }

  componentDidMount() {
    const params = this.getHashParams();
    const { access_token: accessToken } = params;

    this.setState({ accessToken, isAuthorize: accessToken !== undefined });
  }

  getSpotify() {
    const state = Date.now().toString();
    const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;

    return `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=http://localhost:3000&state=${state}&scope=${config.SPOTIFY_SCOPE}`;
  }

  onSuccessSearch(tracks) {
    this.setState({ tracks });
  }

  render() {
    return (
      <>
        {!this.state.isAuthorize && (
          <main className="auth__content">
            <p>Generasi GIGIH 2.0</p>
            <button className="auth__button">
              <a href={this.getSpotify()}>LOGIN</a>
            </button>
          </main>
        )}

        {this.state.isAuthorize && (
          <main className="container" id="home">
            <SearchBar
              accessToken={this.state.accessToken}
              onSuccess={(tracks) => this.onSuccessSearch(tracks)}
            />

            <div className="home__content">
              {this.state.tracks.length === 0 && <p>No tracks</p>}

              <div className="home__cards">
                {this.state.tracks.map((data) => (
                  <Card
                    key={data.album.id}
                    imagesUrl={data.album.images[0]?.url}
                    title={data.name}
                    album={data.album.name}
                    artist={data.artists[0].name}
                  />
                ))}
              </div>
            </div>
          </main>
        )}
      </>
    );
  }
}

export default Home;
