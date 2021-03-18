import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form>
        <div class="mb-3">
          <input
            type="text"
            size="33"
            id="search-city"
            placeholder="Enter City Name"
            autocomplete="off"
          />
          <button type="submit" class="btn btn-info" id="search-button">
            <i class="fas fa-search"></i>
          </button>{""}

          <button type="submit" class="btn btn-secondary" id="location-button">
            <i class="fas fa-location-arrow"></i>
          </button>
        </div>
      </form>
    </div>
  );
}
