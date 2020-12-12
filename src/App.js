import React, { useState } from "react";
import { database } from "./database";
import "./styles.css";

let databaseArray = Object.keys(database);

export default function App() {
  const [SelectedSongs, setSelectedSongs] = useState("All songs");

  function songsClickHandler(songs) {
    setSelectedSongs(songs);
  }

  return (
    <div>
      <div className="header">
        <h1 className="header title main-poster">
          Top Bollywoood Songs ( 2020 list)
        </h1>
      </div>
      <main className="main">
        <div className="wrap">
          <ul className="songs-collection">
            {databaseArray.map((songs, index) => {
              return (
                <li
                  onClick={() => songsClickHandler(songs)}
                  key={songs}
                  className="songs-collection-list button"
                >
                  {songs}
                </li>
              );
            })}
          </ul>
          {database[SelectedSongs].map((songs) => {
            return (
              <div className="songs">
                <div className="left-wrapper">
                  <img src={songs.poster} className="poster" alt="poster"></img>
                </div>
                <div className="right-wrapper">
                  <h1 className="songs-title">{songs.title}</h1>
                  <p className="songs-movie">{songs.movie}</p>
                  <h3 className="songs.singer">{songs.singer}</h3>
                  <h4 className="songs.availability">
                    Available On : {songs.availability}
                  </h4>

                  <h2 className="songs-rating">Ratings: {songs.rating} </h2>
                </div>
              </div>
            );
          })}
        </div>
        <footer>
          <div className="wrap">
            <h2 className="footer-text">
              <a href="https://github.com/rohiraanjali" target="blank">
                <img
                  src="https://www.flaticon.com/svg/static/icons/svg/733/733609.svg"
                  alt="icon"
                  className="social-icon"
                ></img>
              </a>

              <a
                href="https://www.linkedin.com/in/anjali-rohira-886a52187/"
                target="blank"
              >
                <img
                  src="https://www.flaticon.com/svg/static/icons/svg/124/124011.svg"
                  alt="icon"
                  className="social-icon"
                ></img>
              </a>

              <a href="https://twitter.com/anjali_rohira" target="blank">
                <img
                  src="https://www.flaticon.com/svg/static/icons/svg/733/733579.svg"
                  alt="icon"
                  className="social-icon"
                ></img>
              </a>
              <p> © anjali.rohira , 2020 </p>
            </h2>
          </div>
        </footer>
      </main>
    </div>
  );
}
