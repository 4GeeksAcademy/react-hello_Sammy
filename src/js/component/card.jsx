import React from 'react';
import ReactIMG from './../../img/rigo-baby.jpg';

import './../../styles/index.css';
const Mycard = () =>{
return(
  
  <div className="col ">
    <div className="card text-center" >
    <img src={ReactIMG} className="card-img-top"  alt="Card image cap"/>
    <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
    </div>
    </div>
    

)
};

export default Mycard;