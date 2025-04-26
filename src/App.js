import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BusinessForm from "./components/FormPage1";
import ResultPage from "./components/Page2Display";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<BusinessForm />} > </Route>
        <Route path="/result" element={<ResultPage />} > </Route>
      </Routes>
    </>
  );
};

export default App;
