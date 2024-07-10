import React, { useState, useEffect } from "react";
import search from "../Assets/search-icon.png";
import searchStyle from "./MobileSearch.module.css";

export const MobileSearch = ({
  onSearch,
  searchResults,
  navigateToProductDetails,
  setSearchQuery,
  setSearchResults,
  items,
  searchInputRef,
  searchOpen,
}) => {
  const [searchValue, setSearchValue] = useState("");

  const searchInput = {
    left: "-10px",
    display: "flex",
    alignItems: "center",
    position: "relative",
  };

  const searchIcon = {
    position: "absolute",
    left: "10px",
  };

  const searchTextInput = {
    width: "155px",
    height: "34px",
    border: "1px solid #46435B",
    borderRadius: "10px",
    fontSize: "16px",
    padding: "0 40px 0 40px",
    boxSizing: "border-box",
  };

  const searchResultsContainer = {
    position: "absolute",
    top: "100%",
    left: 0,
    width: "100%",
    backgroundColor: "#FFFFFF",
    border: "1px solid #46435B",
    borderRadius: "10px",
    padding: "10px", // Adjust padding as needed
    marginTop: "10px",
    zIndex: 999,
  };

  const searchResultItem = {
    display: "flex",
    flexDirection: "column",
    padding: "10px",
    margin: "5px",
    backgroundColor: "#93919e",
    cursor: "pointer", // Add a pointer cursor for clickable items
  };

  // Update the search value when the input changes
  const handleSearchChange = (e) => {
    const query = e.target.value;

    if (query.trim() === "") {
      setSearchResults([]);
    } else {
      const results = items.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
    }

    // Update the search value
    setSearchValue(query);
    setSearchQuery(query);
  };

  const handleSearchSubmit = () => {
    onSearch(searchValue);
  };

  const focus = (e) => {
    e.target.style.outline = "none";
  };

  // Handle clicking on a search result item
  const handleResultClick = (result) => {
    navigateToProductDetails(result.id);
  };

  // Handle the Enter key press
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (searchInputRef.current) {
        handleSearchSubmit();
      }
    } else if (e.key === " ") {
      e.preventDefault();
    }
  };

  useEffect(() => {
    if (searchOpen) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  return (
    <div style={searchInput}>
      <img style={searchIcon} src={search} alt="search-icon" />
      <input
        onFocus={focus}
        type="text"
        placeholder="Search"
        style={searchTextInput}
        value={searchValue}
        onChange={handleSearchChange}
        // onKeyDown={handleKeyDown}
      />

      {searchResults.length > 0 && (
        <div className={searchStyle.searchResultsContainer}>
          {searchResults.map((result) => (
            <div
              key={result.id}
              className={searchStyle.searchResultItem}
              onClick={() => handleResultClick(result)}
            >
              {result.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileSearch;
