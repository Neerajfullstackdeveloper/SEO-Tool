import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BusinessForm from "./components/FormPage1";
import ResultPage from "./components/Page2Display";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BusinessForm />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </Router>
  );
};

export default App;
