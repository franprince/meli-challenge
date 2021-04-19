import * as React from "react";

function SearchBox({ title, handleSearch }) {
  const [value, setValue] = React.useState("");
  return (
    <div className="search-container">
      <form className="search-form">
        <label htmlFor="searchById">{title}</label>
        <div>
          <input
            placeholder="EJ: MLA14186171"
            id="searchById"
            value={value}
            type="text"
            onChange={(e) => setValue(e.target.value)}
          />
          <button onClick={(event) => handleSearch(event, value)}>
            Buscar
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchBox;
