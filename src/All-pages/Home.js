//Home.js

import React from "react";
import Movie from "./AllMovie";
import Search from "./Search";
// import { AppContext } from "./context"; this is normal method use to get the data

// import { useGlobalContext } from "./context";

const Home = () => {
  // const name = useContext(AppContext); this is do for maoking it moresimplify and easy to access
  // const name = useGlobalContext(); Now, we need only this line and we can get the data
  return (
    <>
      <Search />
      <Movie />
    </>
  );
};

export default Home;
