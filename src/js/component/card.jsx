import React from 'react';
import ReactIMG from './../../img/rigo-baby.jpg';

import './../../styles/index.css';
const Mycard = (props) =>{
return(
  
  <div className="col ">
    <div className="card text-center" >
    <img src={ReactIMG} className="card-img-top"  alt="Card image cap"/>
    <div className="card-body">
    <h4 className="card-title">{props.Cardtitle}</h4>
        <p className="card-text"><p >{props.Cardtext}</p></p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
    </div>
    </div>
    

)
};

export default Mycard;