import * as React from "react";

function SearchBox({ title, handleSearch }) {
  const [value, setValue] = React.useState("");
  return (
    <div className="search-container">
      <form className="search-form">
        <label htmlFor="searchById">{title}</label>
        <div className="input-container">
          <div className="input-with-icons">
            <input
              placeholder="EJ: MLA14186171"
              id="searchById"
              value={value}
              type="text"
              onChange={(e) => setValue(e.target.value)}
            />
            <button
              className="search-button"
              onClick={(event) => handleSearch(event, value)}
            >
              Buscar
            </button>
            {value.length !== 0 ? (
              <button
                onClick={() => setValue("")}
                className="icon-button-clear"
              >
                Limpiar input
                <svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  fill="gray"
                >
                  <path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z" />
                </svg>
              </button>
            ) : null}
            <button
              onClick={(event) => handleSearch(event, value)}
              className="icon-button-search"
            >
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                fill="gray"
              >
                <path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z" />
              </svg>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SearchBox;
