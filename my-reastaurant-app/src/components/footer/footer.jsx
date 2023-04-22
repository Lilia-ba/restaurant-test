import React from "react";
import './footer.css';
import background3 from '../../assets/images/img-avocado.jpeg';

function Footer() {
     return <div>    <div className="footer">
                         <div className="footer-foto" style={{backgroundImage: `url(${background3})`
                                                            }}>

                         </div>
                         <div className="footer-description">
                              <h3> Maecenas nulla neque</h3>
                               <p> Phasellus dui velit, 
                                   feugiat sed elit ut, facilisis aliquam metus. Ut id bibendum erat.
                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                   Maecenas interdum porttitor imperdiet. Integer facilisis.
                                   Phasellus dui velit, 
                                   feugiat sed elit ut, facilisis aliquam metus. Ut id bibendum erat.
                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                   Maecenas interdum porttit



                               </p>
                              <button className="footer-btn">Read More</button>
                        </div>
                   </div>
                   <div className="copyright" >Copyright  2045 Simple House | Design: TemplateMo</div>
                   <div></div>
            </div>
}

export default Footer;