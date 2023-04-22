import React from 'react';
import './about.css';
import backgroundAbout1 from '../../assets/images/about-01.jpeg';
import backgroundAbout2 from '../../assets/images/about-02.jpeg';
import backgroundAbout3 from '../../assets/images/about-03.jpeg';
import backgroundAbout4 from '../../assets/images/about-04.jpeg';
import fcb from '../../assets/images/facebook.png';
import linkedin from '../../assets/images/in.png'
import twitter from '../../assets/images/twitter.png';
import tik from '../../assets/images/tik.png';
import insta from '../../assets/images/insta.png';




function About() {
     const aboutCards = [
        {
            id:1,
            foto:backgroundAbout1,
            fullName:"Florence Nelson",
            position:"Kitchen Manager",
            aboutJob:"Aenean sapien sem, ultricies sed vulputate et, auctor vel mauris. Integer sit amet diam eget est facilisis lacinia vitae.",
            cocialMedia:[linkedin,fcb,tik,twitter,insta]
            
        },
        {
            id:2,
            foto:backgroundAbout2,
            fullName:"Daisy Walker",
            position:"Executive Chef",
            aboutJob:"Aenean sapien sem, ultricies sed vulputate et, auctor vel mauris. Integer sit amet diam eget est facilisis lacinia vitae.",
            cocialMedia:linkedin,tik
            
        },
        {
            id:3,
            foto:backgroundAbout3,
            fullName:"Jenifer Soft",
            position:"Founder and SEO",
            aboutJob:"Aenean sapien sem, ultricies sed vulputate et, auctor vel mauris. Integer sit amet diam eget est facilisis lacinia vitae.",
            
            
        } ,
        
        {
            id:4,
            foto:backgroundAbout4,
            fullName:"Valentina Martin",
            position:"Culinary Director",
            aboutJob:"Aenean sapien sem, ultricies sed vulputate et, auctor vel mauris. Integer sit amet diam eget est facilisis lacinia vitae.",
            cocialMedia:[linkedin,tik,insta,twitter,fcb]
            
        }
 ]

     const aboutCardList = aboutCards.map((aboutCard) =>  {

        return ( <div className='about-card'>
                                <div className='about-foto'  
                                      style={{backgroundImage:`url(${aboutCard.foto})`
                                        }}>
                                                                
                              </div>
                                 <div className='about-description'>
                                     <div className='title'><h2>{aboutCard.fullName}</h2></div>
                                     <div className='position'><h4>{aboutCard.position} </h4></div>
                                     <div className='about-job'>{aboutCard.aboutJob}</div>
                                     <div className='icons'>
                                             <div className='fcb'  style={{backgroundImage:`url(${fcb})`  }}></div>
                                             <div className='insta'  style={{backgroundImage:`url(${insta})` }}></div>
                                             <div className='twitter'  style={{backgroundImage:`url(${twitter})`}}></div>
                                             <div className='tik'        style={{backgroundImage:`url(${tik})`}}></div>
                                             <div className='linkedin'        style={{backgroundImage:`url(${linkedin})`}} ></div>
                                     </div>


                               </div>





                </div>
             )

        })




    return   <div className='about-cards-list'>
                   

                   {aboutCardList}
             </div>


}

export default About;

