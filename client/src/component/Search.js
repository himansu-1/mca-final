import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import "./component styling/Search.css";
import StudentCardBody from "./StudentCardBody";
import StudentContext from "../contextstate/StudentContext";

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [change, setChange] = useState(false);
  const context = useContext(StudentContext);
  const { setShowHeader } = context;
  setShowHeader("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const performSearch = async () => {
    if (query.trim() === "") {
      setResults([]);
      return;
    }

    try {
      const nameResponse = await axios.get(
        `http://localhost:4000/api/studentinfo/search?name=${query}`
      );
      const addressResponse = await axios.get(
        `http://localhost:4000/api/studentinfo/search?address=${query}`
      );
      const orgResponse = await axios.get(
        `http://localhost:4000/api/studentinfo/search?business_organization=${query}`
      );

      const combine = [
        ...nameResponse.data,
        ...addressResponse.data,
        ...orgResponse.data,
      ];
      // console.log(combine)
      const unique = combine.reduce((acc, current) => {
        const x = acc.find((item) => item._id === current._id);
        if (!x) {
          acc.push(current);
        }
        return acc;
      }, []);
      setResults(unique);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  useEffect(() => {
    performSearch();
  }, [query]);

  return (
    <>
    <div className="parent-search">

    <div>
      <div className="w-100 d-flex justify-content-center py-3">
        <div id="search-wrapper">
          <i class="search-icon fas fa-search"></i>

          <input
            type="text"
            id="search"
            value={query}
            onChange={handleInputChange}
            placeholder="Search Here"
          />
          {/* <button id="search-button">
            <i class="fas fa-search"></i>
          </button> */}
        </div>
      </div>
    </div>
        
    {
        results.length > 0 ? (
      <div className={`mx-3 d-flex p-1 serching-dilog-box body`}>
        {/* <StudentCard /> */}
        <div className="row justify-content-center">
          {results.map((student,index) => {
            return (
                // <div>{student[index].name}</div>
              <StudentCardBody
                key={student._id}
                student={student}
                year={student.passing_year}
              />
            );
          })}
        </div>
      </div>):""
      }
      </div>
      </>
  );
};

export default Search;
