import React from "react";
import { useLocation } from "react-router-dom";
import "./Page2.css"; // Assuming you have the CSS saved in a 'styles.css' file

const ResultPage = () => {
  const location = useLocation();
  const formData = location.state || JSON.parse(localStorage.getItem("businessFormData"));

  // Sample competitor data (you can replace this with dynamic data later)
  const competitors = [
    {
      name: "Company A",
      domain: "www.companya.com",
      rank: "5th",
      country: "USA",
    },
    {
      name: "Company B",
      domain: "www.companyb.com",
      rank: "8th",
      country: "UK",
    },
    {
      name: "Company C",
      domain: "www.companyc.com",
      rank: "12th",
      country: "Canada",
    },
  ];

  // Sample quotation (this can be dynamically generated based on formData)
  const quotation = `For the target rank of ${formData.rankTarget}, 
    the estimated budget for SEO services is RS 5000. This includes competitor analysis, 
    keyword optimization, and monthly reports.`;

  return (
    <div className="results-container">
      <h2>Results</h2>

      {/* Competitor Section */}
      <div className="competitor-section">
        <h3>Top Competitors</h3>
        {competitors.map((competitor, index) => (
          <div key={index} className="competitor-card">
            <h4>{competitor.name}</h4>
            <p><strong>Domain:</strong> {competitor.domain}</p>
            <p><strong>Rank:</strong> {competitor.rank}</p>
            <p><strong>Country:</strong> {competitor.country}</p>
          </div>
        ))}
      </div>

      {/* Quotation Section */}
      <div className="quotation-section">
        <h3>Quotation for SEO Services</h3>
        <p>{quotation}</p>
      </div>
      <div className="quotation-section">
        <p>Note: valid till 48 hours after mandatory action required</p>
      </div>

      {/* Button for further action */}
      <button onClick={() => window.location.href = "/"}>Go Back</button>
    </div>
  );
};

export default ResultPage;
