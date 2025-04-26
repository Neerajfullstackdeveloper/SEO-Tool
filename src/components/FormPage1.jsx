// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import './Form.css';

// const BusinessForm = () => {
//   const [formData, setFormData] = useState({
//     companyName: "",
//     domainName: "",
//     country: "",
//     rankTarget: "",
//     keywords: Array(10).fill(""),
//   });
//   const navigate = useNavigate();  // Use navigate instead of history

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name.startsWith("keyword")) {
//       const index = parseInt(name.split("-")[1]);
//       setFormData((prevData) => {
//         const newKeywords = [...prevData.keywords];
//         newKeywords[index] = value;
//         return { ...prevData, keywords: newKeywords };
//       });
//     } else {
//       setFormData((prevData) => ({ ...prevData, [name]: value }));
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Store form data in localStorage
//     localStorage.setItem("businessFormData", JSON.stringify(formData));
//     navigate("/result");  // Use navigate to go to the result page
//   };
//   return (
//     <div>
//       <h2>Enter Business Details</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Company Name:</label>
//           <input
//             type="text"
//             name="companyName"
//             value={formData.companyName}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Domain Name:</label>
//           <input
//             type="text"
//             name="domainName"
//             value={formData.domainName}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Country:</label>
//           <input
//             type="text"
//             name="country"
//             value={formData.country}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Target Rank:</label>
//           <input
//             type="text"
//             name="rankTarget"
//             value={formData.rankTarget}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Keywords (1-10):</label>
//           {formData.keywords.map((keyword, index) => (
//             <input
//               key={index}
//               type="text"
//               name={`keyword-${index}`}
//               value={keyword}
//               onChange={handleChange}
//               placeholder={`Keyword ${index + 1}`}
//             />
//           ))}
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// // export default BusinessForm;
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import './Form.css';

// const BusinessForm = () => {
//   const [formData, setFormData] = useState({
//     companyName: "",
//     domainName: "",
//     country: "", // Single country field
//     rankTargets: [""], // Multiple rank targets
//     keywords: Array(10).fill(""),
//   });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name.startsWith("keyword")) {
//       const index = parseInt(name.split("-")[1]);
//       setFormData((prevData) => {
//         const newKeywords = [...prevData.keywords];
//         newKeywords[index] = value;
//         return { ...prevData, keywords: newKeywords };
//       });
//     } else if (name.startsWith("rankTarget")) {
//       const index = parseInt(name.split("-")[1]);
//       setFormData((prevData) => {
//         const newRankTargets = [...prevData.rankTargets];
//         newRankTargets[index] = value;
//         return { ...prevData, rankTargets: newRankTargets };
//       });
//     } else {
//       setFormData((prevData) => ({ ...prevData, [name]: value }));
//     }
//   };

//   const addRankTarget = () => {
//     setFormData(prevData => ({
//       ...prevData,
//       rankTargets: [...prevData.rankTargets, ""]
//     }));
//   };

//   const removeRankTarget = (index) => {
//     setFormData(prevData => {
//       const newRankTargets = [...prevData.rankTargets];
//       newRankTargets.splice(index, 1);
//       return {
//         ...prevData,
//         rankTargets: newRankTargets.length > 0 ? newRankTargets : [""]
//       };
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Filter out empty rank targets before saving
//     const filteredData = {
//       ...formData,
//       rankTargets: formData.rankTargets.filter(rank => rank.trim() !== "")
//     };
//     localStorage.setItem("businessFormData", JSON.stringify(filteredData));
//     navigate("/result");
//   };

//   return (
//     <div className="form-container">
//       <h2>Enter Business Details</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Company Name:</label>
//           <input
//             type="text"
//             name="companyName"
//             value={formData.companyName}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Domain Name:</label>
//           <input
//             type="text"
//             name="domainName"
//             value={formData.domainName}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Country:</label>
//           <input
//             type="text"
//             name="country"
//             value={formData.country}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Target Ranks:</label>
//           {formData.rankTargets.map((rank, index) => (
//             <div key={`rank-${index}`} className="input-group">
//               <input
//                 type="text"
//                 name={`rankTarget-${index}`}
//                 value={rank}
//                 onChange={handleChange}
//                 placeholder={`Rank ${index + 1}`}
//                 required={index === 0}
//               />
//               {formData.rankTargets.length > 1 && (
//                 <button
//                   type="button"
//                   onClick={() => removeRankTarget(index)}
//                   className="button-icon remove-button"
//                 >
//                   -
//                 </button>
//               )}
//             </div>
//           ))}
//           <button
//             type="button"
//             onClick={addRankTarget}
//             className="button-icon add-button"
//           >
//             +
//           </button>
//         </div>
//         <div className="form-group">
//           <label>Keywords (1-10):</label>
//           {formData.keywords.map((keyword, index) => (
//             <input
//               key={`keyword-${index}`}
//               type="text"
//               name={`keyword-${index}`}
//               value={keyword}
//               onChange={handleChange}
//               placeholder={`Keyword ${index + 1}`}
//             />
//           ))}
//         </div>
//         <button type="submit" className="submit-button">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default BusinessForm;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Form.css';

const BusinessForm = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    domainName: "",
    country: "",
    rankTargets: [""],
    keywords: Array(10).fill(""),
  });
  const navigate = useNavigate();

  // Apply dark/light mode class to body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("keyword")) {
      const index = parseInt(name.split("-")[1]);
      setFormData((prevData) => {
        const newKeywords = [...prevData.keywords];
        newKeywords[index] = value;
        return { ...prevData, keywords: newKeywords };
      });
    } else if (name.startsWith("rankTarget")) {
      const index = parseInt(name.split("-")[1]);
      setFormData((prevData) => {
        const newRankTargets = [...prevData.rankTargets];
        newRankTargets[index] = value;
        return { ...prevData, rankTargets: newRankTargets };
      });
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const addRankTarget = () => {
    setFormData(prevData => ({
      ...prevData,
      rankTargets: [...prevData.rankTargets, ""]
    }));
  };

  const removeRankTarget = (index) => {
    setFormData(prevData => {
      const newRankTargets = [...prevData.rankTargets];
      newRankTargets.splice(index, 1);
      return {
        ...prevData,
        rankTargets: newRankTargets.length > 0 ? newRankTargets : [""]
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const filteredData = {
      ...formData,
      rankTargets: formData.rankTargets.filter(rank => rank.trim() !== "")
    };
    localStorage.setItem("businessFormData", JSON.stringify(filteredData));
    navigate("/result");
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`form-container ${darkMode ? 'dark-mode' : ''}`}>
      <div className="mode-toggle">
        <button onClick={toggleDarkMode} className="toggle-button">
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>
      <h2>Enter Business Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Company Name:</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Domain Name:</label>
          <input
            type="text"
            name="domainName"
            value={formData.domainName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Country:</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Target Ranks:</label>
          {formData.rankTargets.map((rank, index) => (
            <div key={`rank-${index}`} className="input-group">
              <input
                type="text"
                name={`rankTarget-${index}`}
                value={rank}
                onChange={handleChange}
                placeholder={`Rank ${index + 1}`}
                required={index === 0}
              />
              {formData.rankTargets.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeRankTarget(index)}
                  className="button-icon remove-button"
                >
                  -
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={addRankTarget}
            className="button-icon add-button"
          >
            +
          </button>
        </div>
        <div className="form-group">
          <label>Keywords (1-10):</label>
          {formData.keywords.map((keyword, index) => (
            <input
              key={`keyword-${index}`}
              type="text"
              name={`keyword-${index}`}
              value={keyword}
              onChange={handleChange}
              placeholder={`Keyword ${index + 1}`}
            />
          ))}
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default BusinessForm;