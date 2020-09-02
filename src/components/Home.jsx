import React from 'react'
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import customer from './Customer';
import Customer from './Customer';
import { Redirect, Route } from 'react-router-dom'


 const Home = () => {
     let user = localStorage.getItem('user');
    return (
        <div className="wrapper"  data="blue">
            {!localStorage.getItem('Token') ? <Redirect to={{ pathname: '/login'}} /> : null}
            <Sidebar></Sidebar>
            <div className="main-panel" data="blue">
             <Navbar></Navbar>
                <div className="content">
                    <Customer></Customer>
                </div>

            </div>

        </div>
    )
}
 export default Home;

