import React from 'react'

function Sidebar(props) {
    return (
        <div className="sidebar" data="blue">
        <div className="sidebar-wrapper">
             <ul className="nav">
             <li class="active ">
            <a href="./dashboard.html">
              <i class="tim-icons icon-chart-pie-36"></i>
              <p>Dashboard</p>
            </a>
          </li>
             </ul>
        </div>
    </div>
    )
}



export default Sidebar

