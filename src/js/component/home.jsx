import React from "react";

//include images into your bundle
import Mycard from "./card.jsx";
import NavBar from "./navbar.jsx";
import Jumbotrom from "./jumb.jsx";
import About from "./about.jsx";

//create your first component
const Home = () => {
	return (
		<div >
			<NavBar />
		
		<div className="container">
		
			<div className="mt-5">	
				<Jumbotrom />
			</div>
         <div class="tab-content ">
    	 
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3 mt-1">
              
				<Mycard/>
				<Mycard/>
				<Mycard/>
				<Mycard/>
				
			
			
			</div>
			</div>
			</div>
			<About />
		
		</div>
	
			
		

		
		
	);
};

export default Home;
