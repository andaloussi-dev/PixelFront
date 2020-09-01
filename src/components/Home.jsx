import React from 'react'
import Navbar from './Navbar';
import Sidebar from './Sidebar';

 const Home = () => {
     let user = localStorage.getItem('user');
    return (
        <div>
            <Navbar></Navbar>
            <Sidebar></Sidebar>
        </div>
    )
}
 export default Home;

