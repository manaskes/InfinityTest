import React, { useState } from "react";
import axios from "axios";
import "./style.css"; // Import CSS file

const SearchForm = () => {
  const [username, setUsername] = useState("");
  const [fields, setFields] = useState([]);
  const [searchValues, setSearchValues] = useState({});
  const [results, setResults] = useState([]);


  const handleChange = (field, value) => {
    setSearchValues({ ...searchValues, [field]: value });
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:3030/api/v1/test/search?UserName=${username}`);
      console.log(response.data.data)
      alert("Data show successfully" , response.data.data)
      setResults(response.data);
    } catch (error) {
      console.error("Error searching:", error);
    }
  };

  return (
    <div className="container">
      <h2>Search Form</h2>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter Username"
      />

      {fields.map((field) => (
        <input
          key={field.fieldname}
          type="text"
          placeholder={field.fieldname}
          onChange={(e) => handleChange(field.fieldname, e.target.value)}
        />
      ))}

      <button onClick={handleSearch}>Search</button>

      {results.length > 0 && (
        <div className="table-container">
          <table>
            <thead>
              <tr>
                {Object.keys(results[0]).map((key) => (
                  <th key={key}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {results.map((row, index) => (
                <tr key={index}>
                  {Object.values(row).map((val, i) => (
                    <td key={i}>{val}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default SearchForm;
