// Context.js

//context ((Warehouse))
// Provider (Delivery Boy )
// consumer / we can use directly (useContext ) (person  who can recive the order)

// any componet can get the data from any where
import React, { useContext, useEffect, useState } from "react";

const API_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

const AppContext = React.createContext();

// Now we create Provider for delivery the data and make sure children always c is small
const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [isError, setIsError] = useState({ show: "false", msg: "" });
  const [quary, setQuary] = useState("titanic");

  const getMovie = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      if (data.Response === "True") {
        setIsError({ show: false, msg: "" });
        setIsLoading(false);
        setMovie(data.Search);
      } else {
        setIsError({ show: true, msg: data.Error });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // This is Debouncing means when you type for search any thing the start searching after 1 second
    let timeOut = setTimeout(() => {
      getMovie(`${API_URL}&s=${quary}`);
    }, 1000);
    return () => clearTimeout(timeOut);
  }, [quary]);

  return (
    <AppContext.Provider
      //   and here we give the data
      value={{ isLoading, isError, movie, quary, setQuary }}
    >
      {children}
    </AppContext.Provider>
  );
};

// here I am createing globle custom hook to access the data easly from any where

const useGlobalContext = () => {
  return useContext(AppContext);
};

// this is make is simple and easy

export { AppContext, AppProvider, useGlobalContext };
