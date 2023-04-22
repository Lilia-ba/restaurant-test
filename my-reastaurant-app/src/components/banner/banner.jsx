import React from "react";
import './banner.css';
import background from '../../assets/images/foto.jpeg';
import background1 from '../../assets/images/photo1.png';
import Header from "../header/header";

function Banner() {

    return ( <div>
        
        
              <div className="banner" 
                   style={{ 
                   backgroundImage:`url(${background})`,
                   width:"100%",
                   height:"500px"
        
        
                  }}>
        
                 
                    <Header />
                 </div>
                 
          
    
    </div>)
}

export default Banner;