import React from "react";
import "./Project.css";
import Project1 from './portfolio-1.jpg';
import Project2 from './portfolio-2.jpg';
import Project3 from './portfolio-3.jpg';
import Project4 from './portfolio-4.jpg';

function Project() {
  return (
    <div className="project component__space" id="Portfolio">
      <div className="heading">
        <h1 className="heading">My Latest Projects</h1>
        <p className="heading p__color">
          Below are recent projects that I have worked on!
        </p>
        <p className="heading p__color">
          
        </p>
      </div>
       <div className="container">
           <div className="row">
             
             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project1} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Going Somewhere?</h5>
                     <h4 className="project__text">Web App using APIs and Local storage to serve data.</h4>
                     <a href='https://bsisomphane.github.io/Project1/' className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project2} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">PasswordGenerator</h5>
                     <h4 className="project__text">This application uses HTML, CSS, and JavaScript to create a random password.</h4>
                     <a href='https://bsisomphane.github.io/PasswordGenerator/' className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>


             {/* <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project3} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Development</h5>
                     <h4 className="project__text">Getting tickets to the big show</h4>
                     <a href="#" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div> */}


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project4} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Looped In</h5>
                     <h4 className="project__text">Looped In uses Java Script to </h4>
                     <a href='https://loopedinproject.herokuapp.com/dashboard' className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project3} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Development</h5>
                     <h4 className="project__text">Getting tickets to the big show</h4>
                     <a href='https://bsisomphane.github.io/DayPlanner/' className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>


              <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project4} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Tech Blog</h5>
                     <h4 className="project__text">This App allows a user to post about whatever they wish. It supports account creation with secure password hashing and storage as well as the ability to login. </h4>
                     <a href='https://bsisomphane.github.io/Tech-Blog/' className="project__btn">View Details</a>
                     </div>
                 </div>
             </div> 
             
             <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
            <a href='https://github.com/bsisomphane'><button className='about btn pointer'>View More</button></a>
             </div>

           </div>
       </div>
    </div>
  );
}

export default Project;