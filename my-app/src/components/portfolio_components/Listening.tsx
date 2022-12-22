import React, { useEffect, useState } from "react";
import querystring from "querystring";
import { Buffer } from "buffer";
import spot_98 from "../../assets/spot_98.png";

//TYPESCRIPT MISSING AFTER

function Listening() {
  const [songInfo, setSongInfo] = useState(null); // figure out way to set this response so it works. Whole thing may need reengineering and typescript adding

  const ENDPOINT: string = "https://accounts.spotify.com/api/token";
  const NOW_PLAYING: string =
    "https://api.spotify.com/v1/me/player/currently-playing";
  //or https://api.spotify.com/v1/me/top/artists || https://api.spotify.com/v1/me/player/recently-played || https://api.spotify.com/v1/me/player/currently-playing - updated with scope for api

  //typescript it with interface....
  const CLIENT_SECRET = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
  const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  const REFRESH_TOKEN = process.env.REACT_APP_SPOTIFY_REFRESH_TOKEN;

  //getNowPlayingItem awaits getNowPlaying() which in itself awaits awaitToken(). Nesting.
  async function getNowPlayingItem(
    client_id: string | undefined,
    client_secret: string | undefined,
    refresh_token: string | undefined
  ) {
    const response = await getNowPlaying(
      client_id,
      client_secret,
      refresh_token
    );
    if (!response.ok) {
      throw new Error("Sorry, data cannot be fetched. Check network tab.");
    }
    const data = await response.json();
    if (songInfo === null) {
      setSongInfo(data);
    }
  }

  useEffect(() => {
    console.log("songInfo", songInfo);
  });

  //getNowPlaying func passes await awaitToken(), waits for token to return, then passes that into a fetch for NOW_PLAYING url.
  async function getNowPlaying(
    client_id: string | undefined,
    client_secret: string | undefined,
    refresh_token: string | undefined
  ) {
    const { access_token } = await awaitToken(
      client_id,
      client_secret,
      refresh_token
    );
    return fetch(NOW_PLAYING, {
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

  //getNowPlayingItem(), is called, passing down the three required params from your env setting. These will then flow down into the subsequent funcs as its parent func.
  getNowPlayingItem(CLIENT_ID, CLIENT_SECRET, REFRESH_TOKEN);
  if (songInfo != null) {
    console.log("song info if statement", songInfo["item"]["name"]);
  }
  return (
    <>
      <div className="listening">
        <ul className="tree-view">
          <li>
            <h3>Listening</h3>
          </li>

          <li>
            <img src={spot_98} alt="spotify-logo" className="spotify-logo-98" />
          </li>
          <li>
            <h3>er</h3>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Listening;
