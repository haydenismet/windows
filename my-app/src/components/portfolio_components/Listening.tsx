import React, { useEffect, useState } from "react";
import querystring from "querystring";
import { Buffer } from "buffer";
import spot_98 from "../../assets/spot_98.png";

//Typescript may need a complete restructure here - check through already typescripted bits and any missing typescript bits. See if can be refactored once learnt more or gotten review. Includes things such as interfaces.

function Listening() {
  const [currentSong, setCurrentSong] = useState<{
    albumImageUrl: string;
    artist: string;
    isPlaying?: boolean;
    songUrl: string;
    releaseDate?: string;
    title: string;
  }>({
    albumImageUrl: "",
    artist: "",
    isPlaying: false,
    songUrl: "",
    releaseDate: "",
    title: "",
  });

  const [recentSong, setRecentSong] = useState<
    {
      albumImageUrl: string;
      artist: string;
      songUrl: string;
      releaseDate: string;
      title: string;
    }[]
  >([
    {
      albumImageUrl: "",
      artist: "",
      songUrl: "",
      releaseDate: "",
      title: "",
    },
  ]);

  const [topSong, setTopSong] = useState<
    {
      albumImageUrl: string;
      artist: string;
      songUrl: string;
      releaseDate: string;
      title: string;
    }[]
  >([
    {
      albumImageUrl: "",
      artist: "",
      songUrl: "",
      releaseDate: "",
      title: "",
    },
  ]);

  const ENDPOINT: string = "https://accounts.spotify.com/api/token";
  const NOW_PLAYING: string =
    "https://api.spotify.com/v1/me/player/currently-playing";
  const RECENTLY_PLAYED: string =
    "https://api.spotify.com/v1/me/player/recently-played";
  const TOP_ARTISTS: string = "https://api.spotify.com/v1/me/top/artists";
  const CLIENT_SECRET = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
  const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  const REFRESH_TOKEN = process.env.REACT_APP_SPOTIFY_REFRESH_TOKEN;

  useEffect(() => {
    //getNowPlayingItem awaits getNowPlaying() which in itself awaits awaitToken(). Nesting.
    //getNowPlayingItem(), is called, passing down the three required params from your env setting. These will then flow down into the subsequent funcs as its parent func.
    getNowPlayingItem(CLIENT_ID, CLIENT_SECRET, REFRESH_TOKEN, NOW_PLAYING);
    getNowPlayingItem(CLIENT_ID, CLIENT_SECRET, REFRESH_TOKEN, RECENTLY_PLAYED);
    getNowPlayingItem(CLIENT_ID, CLIENT_SECRET, REFRESH_TOKEN, TOP_ARTISTS);
  }, []);

  async function getNowPlayingItem(
    client_id: string | undefined,
    client_secret: string | undefined,
    refresh_token: string | undefined,
    urlEndpoint: string
  ) {
    const response = await getNowPlaying(
      client_id,
      client_secret,
      refresh_token,
      urlEndpoint
    );
    if (!response.ok) {
      throw new Error("Sorry, data cannot be fetched. Check network tab.");
    }
    const data = await response.json();

    let returnedCurrent;
    let returnedRecent;
    let returnedTop: any;
    switch (urlEndpoint) {
      case "https://api.spotify.com/v1/me/player/currently-playing":
        returnedCurrent = {
          albumImageUrl: data.item.album.images[1].url,
          artist: data.item.artists.map((art: any) => art.name),
          isPlaying: data.is_playing,
          songUrl: data.item.external_urls.spotify,
          releaseDate: data.item.album.release_date,
          title: data.item.name,
        };
        if (returnedCurrent) {
          setCurrentSong(returnedCurrent);
        }
        break;
      case "https://api.spotify.com/v1/me/player/recently-played":
        let recentlyPlayed = data.items.slice(0, 3);

        returnedRecent = recentlyPlayed.map((item: any) => ({
          albumImageUrl: item.track.album.images[1].url,
          artist: item.track.artists.map((art: any) => art.name),
          songUrl: item.track.external_urls.spotify,
          releaseDate: item.track.album.release_date,
          title: item.track.name,
        }));

        if (returnedRecent) {
          setRecentSong(returnedRecent);
        }
        break;
      case "https://api.spotify.com/v1/me/top/artists":
        let topArtists = data.items.slice(0, 3);

        returnedTop = topArtists.map((item: any) => ({
          albumImageUrl: item.images[1].url,
          artist: item.name,
          songUrl: item.href,
          title: item.name,
        }));

        if (returnedTop) {
          setTopSong(returnedTop);
        }

        break;
      default:
        return "whoops, not workin";
    }
  }

  //console.log(currentSong);
  console.log(recentSong);
  //console.log(topSong);
  //getNowPlaying func passes await awaitToken(), waits for token to return, then passes that into a fetch for NOW_PLAYING url.
  async function getNowPlaying(
    client_id: string | undefined,
    client_secret: string | undefined,
    refresh_token: string | undefined,
    urlEndpoint: string
  ) {
    const { access_token } = await awaitToken(
      client_id,
      client_secret,
      refresh_token
    );
    return fetch(urlEndpoint, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
  }

  //await token refresh if required.
  async function awaitToken(
    client_id: string | undefined,
    client_secret: string | undefined,
    refresh_token: string | undefined
  ) {
    const basic: string = Buffer.from(`${client_id}:${client_secret}`).toString(
      "base64"
    );
    const response = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Basic ${basic}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: querystring.stringify({
        grant_type: "refresh_token",
        refresh_token: refresh_token,
      }),
    });
    return response.json();
  }

  return (
    <>
      <div className="listening">
        <ul className="tree-view">
          <li className="listening-header">
            <img src={spot_98} alt="spotify-logo" className="spotify-logo-98" />
            <h3>Spotify Jamz</h3>
          </li>

          <div className="current-song-container">
            {currentSong.albumImageUrl &&
            currentSong.title &&
            currentSong.artist ? (
              <li>
                <div className="current-song-info">
                  <h3>Currently Playing</h3>

                  <h3>{currentSong.artist[0]} </h3>
                  <h3>{currentSong.title} </h3>
                  <img
                    src={
                      currentSong ? currentSong.albumImageUrl : "Not loaded yet"
                    }
                    alt="current-track-cover"
                    className="current-track-cover"
                  />
                </div>
              </li>
            ) : (
              <div className="not-currently-listening">
                <p>Not listening right now!</p>
                <p>But check out my favourites...</p>
              </div>
            )}
          </div>
          <div className="recent-song-container">
            <h3>Recently Played</h3>
            {recentSong ? (
              recentSong.map((song, index) => {
                return (
                  <li className="recent-song-info">
                    <h3>{song.artist} </h3>
                    <h3>{song.title} </h3>
                    <img
                      src={song ? song.albumImageUrl : "Not loaded yet"}
                      alt="recent-track-cover"
                      className="recent-track-cover"
                    />
                  </li>
                );
              })
            ) : (
              <div className="not-currently-listening">
                <p>No favourites are appearing right now</p>
              </div>
            )}
          </div>

          <div className="top-song-container">
            <h3>Top Artists</h3>
            {topSong ? (
              topSong.map((song, index) => {
                return (
                  <li className="top-song-info">
                    <h3>{song.artist} </h3>

                    <img
                      src={song ? song.albumImageUrl : "Not loaded yet"}
                      alt="top-track-cover"
                      className="top-track-cover"
                    />
                  </li>
                );
              })
            ) : (
              <div className="not-currently-listening">
                <p>No top songs are appearing right now</p>
              </div>
            )}
          </div>
        </ul>
      </div>
    </>
  );
}

export default Listening;
