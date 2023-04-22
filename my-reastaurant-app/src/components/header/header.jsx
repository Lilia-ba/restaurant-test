import React from "react";
import './header.css';
import background2 from '../../assets/images/Photo3.png';



function Header() {
    return (
             <div className="header">
                     <div className="logo" 
                            style={{ 
                            backgroundImage:`url(${background2})`,
                            width:"307px",
                            height:"77px"
                           }}>
                    
                     </div>

                    
                    <div className="nav-bar">
                         <a href="#"><div>Home</div></a>
                          <div> <a href="#">About </a></div>
                          <a href="#"> <div>Contact</div></a>
                     </div>
                    
         
            </div>
    )
}
export default Header;