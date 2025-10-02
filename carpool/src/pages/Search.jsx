import { useState } from "react";
import SearchData from "../components/Layout/SearchData";
import "../pages/search.css";
import SearchBar from "./searchbar";

const Search = () => {
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [fromCityInput, setFromCityInput] = useState("");
  const [toCityInput, setToCityInput] = useState("");
  const [date, setDate] = useState("");

  const handleFromChange = (e) => setFromCityInput(e.target.value);
  const handleToChange = (e) => setToCityInput(e.target.value);
  const handleDateChange = (e) => setDate(e.target.value);

  const handleSearchClick = () => {
    setFromCity(fromCityInput);
    setToCity(toCityInput);
  };
  return (
    <div className="search">
      <h1>Find The Ride</h1>
      <SearchBar
        onFromChange={handleFromChange}
        onToChange={handleToChange}
        fromValue={fromCityInput}
        toValue={toCityInput}
        onSearchClick={handleSearchClick}
        dateValue={date}
      />
      <div>
        <SearchData from={fromCity} to={toCity} date={date} />
      </div>
    </div>
  );
};

export default Search;
