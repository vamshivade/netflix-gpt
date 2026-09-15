import { useState } from "react";
import "./SearchGPT.css";
import { useSelector } from "react-redux";
import useGoogleGenAI from "../../hooks/useGoogleGenAI";

const SearchGPT = () => {
  const isGptLoading = useSelector((store) => store.searchGpt.isGptLoading);
  const [inputContents, setInputContents] = useState("");
  const { fetchGoogleAI, errorMessage, result } = useGoogleGenAI();

  const handleSearch = () => {
    fetchGoogleAI(inputContents);
  };

  return (
    <div className="searchgpt-container">
      <div className="search-box">
        <input
          type="text"
          placeholder="search movies"
          value={inputContents}
          onChange={(event) => setInputContents(event.target.value)}
        />
        <button type="button" onClick={handleSearch} disabled={isGptLoading}>
          {isGptLoading ? "Loading..." : "Search"}
        </button>
      </div>

      {errorMessage && (
        <div
          className="search-error"
          style={{ color: "red", marginTop: "12px" }}
        >
          {errorMessage}
        </div>
      )}

      {result && (
        <div className="search-results" style={{ marginTop: "12px" }}>
          {result}
        </div>
      )}
    </div>
  );
};

export default SearchGPT;
