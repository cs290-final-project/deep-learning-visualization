import React from 'react';
import './Navigation.css';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div class="App">
           <NavLink to="/">Create</NavLink>
           <NavLink to="/Train">Train</NavLink>
           <NavLink to="/Metrics">Metrics</NavLink>
           <NavLink to="/Predict">Predict</NavLink>
       </div>
    );
}
 
export default Navigation;