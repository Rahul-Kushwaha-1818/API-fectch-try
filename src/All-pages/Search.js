import React from "react";
import { useGlobalContext } from "./context";

const Search = () => {
  const { quary, setQuary, isError } = useGlobalContext();
  return (
    <>
      <section className="search-section">
        <h2>Search Your Favourite Movie here</h2>
        <form action="#" onSubmit={(e) => e.preventDefault()}>
          <div>
            <input
              type="text"
              placeholder="Search here"
              value={quary}
              onChange={(e) => setQuary(e.target.value)}
            />
          </div>
        </form>
        <div className="card-error">
          <p>{isError.show && isError.msg}</p>
        </div>
      </section>
    </>
  );
};

export default Search;
