<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h3 align="center">Spotify - Generasi Gigih Final Project</h3>

  <p align="center">
    A replica of Spotify to Create a Playlist!
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details >
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#features">Features</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This is Spotify Generasi Gigih, a React front-end client that communicates with the Spotify API. This platform will connect to your Spotify account that displays information about your playlists and create a new one.

### Built With

- [<img src='https://raw.githubusercontent.com/zaiinhs/spotify-zainal/master/public/logo192.png' width='16'/> Create React App](https://create-react-app.dev/) to initialize the project.
- [⚡️ Chakra UI](https://chakra-ui.com/docs/getting-started) for styling and layout.
- [<img src='https://react-redux.js.org/img/redux_white.svg' width='16'/> React Redux](https://react-redux.js.org/) for state management.
- [<img src='https://iconape.com/wp-content/files/sm/371377/svg/371377.svg' width='16'/> React Router](https://reactrouter.com/web/guides/quick-start) to define routes in the application.
- [🐙 react-testing-library and jest](https://testing-library.com/) for testing.
- Written in [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) and [Typescript](https://www.typescriptlang.org/).
- Hosted on [Vercel](https://vercel.com/)🚀.

<!-- FEATURES THE PROJECT -->

## Features

If you have any suggestions/problems about the features, please let me know [here](https://github.com/zaiinhs/spotify-zainal/issues).

If you want to try this on https://spotigi.vercel.app/, please let me know your email. Because your email account must be registered in my development dashboard.

| Feature         | Description                                                                                                                                                                                                                                                                                                                                                               |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Login Users     | To redirect to the login page Spotify asks you to allow the app to access account information such as profile and playlists. Authorization using [Implicit Grant Flows](https://developer.spotify.com/documentation/general/guides/authorization-guide/#implicit-grant-flow), so if you refresh the page you are automatically logged out or when your token has expired. |
| Home Page       | A home page for your playlists. If you click the card will redirect to your spotify playlists.                                                                                                                                                                                                                                                                            |
| Search          | To search for other tracks/artists based on the keywords entered. Limited to 15 tracks/artist.                                                                                                                                                                                                                                                                            |
| Create Playlist | To make a new private playlist to your Spotify account.                                                                                                                                                                                                                                                                                                                   |
| User Profile    | After login, you can see your profile picture and username on the top right corner of the page. If you click it will redirect to your spotify profile.                                                                                                                                                                                                                    |

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

1. You’ll need to have Node >= 10.16, npm >= 6+ or yarn >= 0.25+

- npm
  ```sh
  npm install npm@latest -g
  ```

2. You'll need to have Spotify Account.

### Installation

1. Get Spotify API CLIENT_ID at [https://developer.spotify.com/](https://developer.spotify.com/dashboard/applications). Please refer to the [Documentation](https://developer.spotify.com/documentation/general/guides/app-settings/).
2. Clone the repo
   ```sh
   git clone https://github.com/zaiinhs/spotify-zainal.git
   ```
3. Go to the project directory
   ```sh
   cd spotify-web-clone
   ```
4. Install NPM packages
   ```sh
   npm install
   ```
5. Rename `.env.example` to `.env`. Enter your API to your `.env` file
   ```JS
   REACT_APP_BASE_URL=http://localhost:3000/
   REACT_APP_SPOTIFY_CLIENT_ID=YOURCLIENTID
   ```
6. Runs the app in development mode. Open http://localhost:3000 to view it in the browser
   ```sh
   npm start
   ```
   or
   ```sh
   yarn start
   ```

<!-- CONTACT -->

## Contact

Zainal Abidin - [@zaiinhs](https://www.linkedin.com/in/zaiinhs/)
