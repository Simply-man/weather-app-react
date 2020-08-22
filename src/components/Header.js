import React from "react";
import Search from "./Search";
import "../styles/Header.css";
import placeMarker from "../img/placeMarker.png";

function Header({ locationPlace, setQuery, loadingDisplay, setLoading }) {
  return (
    <header>
      <div className="nav">
        <div className="location">
          {!loadingDisplay ? (
            ""
          ) : (
            <>
              <img src={placeMarker} className="img" alt="location" />
              <p>{locationPlace}</p>
            </>
          )}
        </div>
        <Search setQuery={setQuery} setLoading={setLoading} />
      </div>
    </header>
  );
}

export default Header;
