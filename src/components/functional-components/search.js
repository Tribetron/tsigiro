import React from "react";

function Search() {
  return (
    <div className="col-lg-12">
      <div className="ltn__search-widget mb-30">
        <form action="#">
          <input
            type="text"
            name="search"
            placeholder="Search your keyword..."
          />
          <button type="submit">
            <i className="fas fa-search" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Search;
