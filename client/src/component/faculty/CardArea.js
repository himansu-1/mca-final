import React, { useEffect, useState } from "react";
import "../component styling/CardArea.css";
import SingleCard from "./SingleCard";
import axios from "axios";
 
const CardArea = () => {
  const [results, setResults] = useState([])

  const getStaf = async () => {
    const response = await axios.get("http://localhost:4000/staf/stafInfo/getAllStaf")
    const results = response.data
    setResults(response.data)
    // console.log(results)
  }

  useEffect(() => {
    getStaf()
    console.log(results)
    // results.map((data,index)=>{console.log(data.name)})
  }, [])
  return (
    <>
      <div className="d-flex justify-content-start mx-5 px-5">
        <h3>This is the Faculty Section</h3>
      </div>
      <hr className="mx-5" />
      <div class="box-area">
        {
          results.map((data, index) => {
            // <div>helo</div>
            if (index == 3) {return}
            return <SingleCard key={data._id} img={data.profile_img} name={data.name} designation={data.email} bio={data.profession} />
          })
        }
      </div>
    </>
  );
};

export default CardArea;
