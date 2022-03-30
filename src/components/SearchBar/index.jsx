import { Component } from "react";
import config from "../../lib/config";
import "./style.css";

class SearchBar extends Component {
  state = {
    text: "",
  };

  handleInput(e) {
    this.setState({ text: e.target.value });
  }

  async onSubmit(e) {
    e.preventDefault();

    const { text } = this.state;

    var requestOptions = {
      headers: {
        Authorization: "Bearer " + this.props.accessToken,
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await fetch(
        `${config.SPOTIFY_BASE_URL}/search?type=track&q=${text}`,
        requestOptions
      ).then((data) => data.json());

      const tracks = response.tracks.items;
      this.props.onSuccess(tracks);
    } catch (e) {
      alert(e);
    }

    e.target.blur();
  }

  render() {
    return (
      <form className="search" onSubmit={(e) => this.onSubmit(e)}>
        <input
          type="text"
          placeholder="Search your favorite songs.."
          className="search__input"
          required
          onChange={(e) => this.handleInput(e)}
        />
        <button className="search__button" type="submit">
          Search
        </button>
      </form>
    );
  }
}

export default SearchBar;
