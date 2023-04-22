import React from "react";
import './welcome.css';
import dishes1  from '../../assets/images/01.jpeg';
import dishes2  from '../../assets/images/02.jpeg';
import dishes3  from '../../assets/images/03.jpeg';
import dishes4  from '../../assets/images/04.jpeg';
import Footer from "../footer/footer";
import About from "../../pages/about/about";

function Welcome() {
    const wet = ["q","e","t","t",]

 const cards =  [
            {
            id:1,
            style:dishes1,
            title1:`Pizza "Margarita"`,
            description1:"Lorem ipsum dolorres sit consectury",
            price1:"65$-86$"
          },

            {
            id:2,
            style:dishes2,
            title1:`Pizza "Margarita"`,
            description1:"Lorem ipsum dolorres sit consectury",
            price1:"77$-87$"
          },

                {
                id:3,
                style:dishes3,
                title1:`Pizza "Margarita"`,
                description1:"Lorem ipsum dolorres sit consectury",
                price1:"65-86"},

                  {
                    id:4,
                    style:dishes4,
                    title1:`Pizza "Margarita"`,
                    description1:"Lorem ipsum dolorres sit consectury",
                    price1:"76-86"},  
                    
                    {
                        id:1,
                        style:dishes1,
                        title1:`Pizza "Margarita"`,
                        description1:"Lorem ipsum dolorres sit consectury",
                        price1:"65$-86$"
                      },  


                      {
                        id:1,
                        style:dishes1,
                        title1:`Pizza "Margarita"`,
                        description1:"Lorem ipsum dolorres sit consectury",
                        price1:"65$-86$-88$"
                      },



                      {
                        id:1,
                        style:dishes1,
                        title1:`Pizza "Margarita"`,
                        description1:"Lorem ipsum dolorres sit consectury",
                        price1:"65$-86$-90"
                      },

                      {
                        id:1,
                        style:dishes1,
                        title1:`Pizza "Margarita"`,
                        description1:"Lorem ipsum dolorres sit consectury",
                        price1:"65$-86$"
                      },



        
        ];

        const cardsList = cards.map((card)   => {
            return   <div className="card-shallow">
            
                          <div className="card">
                              <div className="card-photo" style={{backgroundImage:`url(${card.style})`
                                                                }}> 
                                 </div>
                               <div className="card-not-photo">
                                  <div className="title"> <h3>{card.title1}</h3></div>
                                  <div className="description">{card.description1}</div>
                                   <h3>{card.price1}</h3>
                               </div>   
                        </div>
                        </div>
                   

                         } );
                    
     
        

    const cardText = {
           title:"Pizza",
           description:"Lorem ipsum dolor, sit amet consectetur ",
           price:"69$-76$"

    }




    return <div className="welcome">

        
             <h1>Welcome to Simple House</h1>
              <div className="text"> Lorem ipsum dolor, sit amet consectetur
                                     adipisicing elit. Deleniti eum voluptatem quia,
                                     blanditiis sint cupiditate  odit error doloremque? 
                                     Beatae, nisi quia unde eveniet pariatur minima doloremque 
                                     ipsum  neque iste facilis?
             </div>

              <div className="btns">
                  <button>Pizza</button>
                  <button>Salad</button>
                  <button>Noodle</button>

             </div>

             <div className="cards">
                    <div className="card-shallow">
                        <div className="card">
                             <div className="card-photo" style={{backgroundImage:`url(${dishes1})`
                                                                }}>  </div>
                             <div className="card-not-photo">
                                 <div className="title"> <h3>{cardText.title}</h3></div>
                                 <div className="description">{cardText.description}</div>
                                  <h3>{cardText.price}</h3>
                              </div>   
                         </div>

                        
                    </div>
                  

                     {cardsList}
                 
             </div>
 
        <Footer />
        <About />
     
    </div>
}

export default Welcome;