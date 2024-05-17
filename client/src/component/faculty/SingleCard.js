import React, { useEffect } from 'react';

const SingleCard = (props) => {
    const {name, designation, bio, img} = props
    useEffect(() => {
      return () => {
        console.log(img)
      };
    }, [])
    return (
        <>

        
        <div class="single-box">
          <div class="img-area"></div>
          {/* <img src={img} className='my-img' alt='' /> */}
          <div class="img-text">
            <span class="header-text">
              <strong>{name}</strong>
            </span>
            <div class="line"></div>
            {/* <h6>{designation}</h6> */}
            <p>
                {bio}

            </p>
          </div>
        </div>
        </>
    )
}

export default SingleCard;