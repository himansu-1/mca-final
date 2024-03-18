import React, { useContext } from 'react';
import StudentContext from '../contextstate/StudentContext';

const Home = () => {
    const context = useContext(StudentContext)
    const {setShowHeader} = context
    setShowHeader("")
    return <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam voluptatibus sunt dignissimos, id eius, cumque esse temporibus excepturi alias vitae qui.</div>;
}

export default Home;