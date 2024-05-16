import axios from 'axios';
import React, { useEffect, useState } from 'react';


const Experiment = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

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
          })
          console.log(unique)
          // setResults(response.data);
      } catch (error) {
          console.error('Error fetching search results:', error);
      }
  };

  useEffect(() => {
      performSearch();
      results.map((i,index)=>{
        console.log(index)
        console.log(i.name)
        // console.log(i[index].name)

      })
  }, [query]);

  return (
      <div>
          <input 
              type="text" 
              value={query} 
              onChange={handleInputChange} 
              placeholder="Search by name"
          />
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