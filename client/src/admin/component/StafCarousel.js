import React from 'react';


const StafCarousel = () => {
    return (<>
    <div className="d-flex justify-content-between">
        <h3 className='mt-4 mx-2'>Staf Carousel Images</h3>
        <button type='button' className='btn btn-info m-2 mt-3'>Edit</button>
    </div>
        <hr />
        <div className="row p-1" style={{marginBottom:"10px"}}>
            <img src={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"} alt="Admin" className="px-2 m-1 mb-1 col" style={{height:"10rem"}}/>
            <img src={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"} alt="Admin" className="px-2 m-1 mb-1 col" style={{height:"10rem"}}/>
            <img src={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"} alt="Admin" className="px-2 m-1 mb-1 col" style={{height:"10rem"}}/>
        </div>
        </>);
}


export default StafCarousel;