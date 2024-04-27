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
    	 
          <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-3 mt-1">
              
				<Mycard  Cardtitle='Mi foto1' Cardtext='Lorem ipsum dod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute ifugiat nulla pariatur'
                               />
				<Mycard  Cardtitle='Mi foto2' Cardtext='Lorem ipsum dod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute ifugiat nulla pariatur'
                               />
				<Mycard  Cardtitle='Mi foto3' Cardtext='Ut enim ad minima veniam, lisequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?' />
				<Mycard  Cardtitle='Mi foto4' Cardtext='Lorem ipsum dod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute ifugiat nulla pariatur'
                               />
				
			
			
			</div>
			</div>
			</div>
			<About  FooterAnio='2024' 
                    Company='MY4geeks2024'/>
		
		</div>
	
			
		

		
		
	);
};

export default Home;
