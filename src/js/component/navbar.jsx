import React from 'react';
const NavBar = () =>{
return(
     
    <nav className="navbar fixed-top navbar-expand-sm bg-dark navbar-dark justify-content-between">
  <div className="container-fluid ">
    
    <a className="navbar-brand" href="#">Start Bootstrp</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
   
        <div className="collapse navbar-collapse justify-content-end " id="collapsibleNavbar">
      <ul className="navbar-nav">
      <li className="nav-item">
          <a className="nav-link" href="#">Home</a>
        </li> 
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>    
        
      </ul>
    </div>
    </div>
    
 
  
</nav>

)
};

export default NavBar;