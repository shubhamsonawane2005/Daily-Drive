import { useState } from "react";
import "../pages/searchbar.css";
// const SearchBar = ({ onFromChange, onToChange, fromValue, toValue }) => {
const HomeSearch = ({
  onFromChange,
  onToChange,
  fromValue,
  toValue,
  onSearchClick,
  onDateChange,
  dateValue,
}) => {
  const [passengers, setPassengers] = useState(1);
  return (
    <div className="body_search">
      <div className="search-bar">
        <div className="search-field">
          <span className="icon">📍</span>
          <input
            type="text"
            placeholder="From"
            value={fromValue}
            onChange={onFromChange}
          />
        </div>
        <div className="search-field">
          <span className="icon">📍</span>
          <input
            type="text"
            placeholder="To"
            value={toValue}
            onChange={onToChange}
          />
        </div>
        <div className="search-field">
          <span className="icon">📅</span>
          <input type="date" value={dateValue} onChange={onDateChange} />
        </div>
        <div className="search-field">
          <span className=" icon">
            <i className="bi bi-person-fill"></i>
          </span>
          {/* <input type="number" min="1" defaultValue="1" max="6" /> */}
          <input
            type="number"
            min="1"
            max="6"
            value={passengers}
            onChange={(e) => setPassengers(e.target.value)}
          />
        </div>
        {/* <button className="search-button"  >Search</button> */}
        <button className="search-button" onClick={onSearchClick}>
          Search
        </button>
      </div>
    </div>
  );
};

export default HomeSearch;
