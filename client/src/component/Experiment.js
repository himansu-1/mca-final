import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './component styling/Search.css'

const Experiment = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [change, setChange] = useState(false)

  const handleInputChange = (event) => {
      setQuery(event.target.value);
  };

  const performSearch = async () => {
      if (query.trim() === '') {
          setResults([]);
          console.log("success")
          return;
      }

      try {
          const nameResponse = await axios.get(`http://localhost:4000/api/studentinfo/search?name=${query}`);
          const addressResponse = await axios.get(`http://localhost:4000/api/studentinfo/search?address=${query}`);
          const orgResponse = await axios.get(`http://localhost:4000/api/studentinfo/search?business_organization=${query}`);
          
          const combine = [...nameResponse.data, ...addressResponse.data, ...orgResponse.data]
          // console.log(combine)
          const unique = combine.reduce((acc, current)=>{
            const x = acc.find(item=>item._id === current._id)
            if (!x) {
              acc.push(current)
            }
            return acc
          },[])
          setResults(unique);
      } catch (error) {
          console.error('Error fetching search results:', error);
      }
  };

  useEffect(() => {
      performSearch();
  }, [query]);

  return (
      <div>
          {/* <input 
              className='mySearch'
              type="text" 
              value={query} 
              onChange={handleInputChange} 
              placeholder="Search Here"
          /> */}
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
            <button id="search-button">Search</button>
            </div>
          </div>
          <ul>
              {
              results.map((item, index) => (
                  <>
                  {/* <li key={index}>{item[index].name}</li>
                  <li key={index + 1}>{item[index + 1].name}</li>
                  <li key={index + 2}>{item[index + 2].name}</li> */}
                  </>
              ))
              }
          </ul>
      </div>
  );
}

export default Experiment;