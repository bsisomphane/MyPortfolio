import React from 'react';
import './Home.css'
import './About.css'
import aboutImg from './about.jpg';
function About() {
    return (
        <div className='about component__space'>
            <div className='container'>
                <div className='row'>
                    <div className='col__2'>
                        <img src={aboutImg} alt='' className='about__img' />
                    </div>
                    <div className='col__2'>
                        <h1 className='about__heading'>
                            About Me
                        </h1>
                        <h2 className='about__meta'>
                        </h2>
                            <p className='about__text p__color'>
                            Lorem ipsum dolor sit amet, laudem ceteros est id. In sit nemore ornatus, eum accumsan pertinax at. His modus populo diceret ne, te prompta copiosae nec. Qui idque dicant cu, ei oratio malorum has.
                            </p>
                            <p className='about__text p__color'>
                            Lorem ipsum dolor sit amet, laudem ceteros est id. In sit nemore ornatus, eum accumsan pertinax at. His modus populo diceret ne, te prompta copiosae nec. Qui idque dicant cu, ei oratio malorum has.
                            </p>
                            <p className='about__text p__color'>
                            Lorem ipsum dolor sit amet, laudem ceteros est id. In sit nemore ornatus, eum accumsan pertinax at. His modus populo diceret ne, te prompta copiosae nec. Qui idque dicant cu, ei oratio malorum has.
                            </p>
                            <p className='about__text p__color'>
                            Lorem ipsum dolor sit amet, laudem ceteros est id. In sit nemore ornatus, eum accumsan pertinax at. His modus populo diceret ne, te prompta copiosae nec. Qui idque dicant cu, ei oratio malorum has.
                            </p>
                            <p className='about__text p__color'>
                            Lorem ipsum dolor sit amet, laudem ceteros est id. In sit nemore ornatus, eum accumsan pertinax at. His modus populo diceret ne, te prompta copiosae nec. Qui idque dicant cu, ei oratio malorum has.
                            </p>
                            <div className='about__button d__flex align__items__center'>
                                <a href='#'><button className='about btn pointer'>Download CV</button></a>
                                <a href='#'><button className='about btn pointer'>Hire Me</button></a>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About