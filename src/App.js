import {  Routes, Route } from "react-router-dom";
import Home from "./All-pages/Home";
import SingleMovie from "./All-pages/SingleMovie";
import ErrorPage from "./All-pages/ErrorPage";
import "./App.css"
function App() {
  return (
    <>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Movie/:id" element={<SingleMovie />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
     
    </>
  );
}

export default App;
