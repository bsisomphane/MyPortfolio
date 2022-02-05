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
                            Hi, I am a 22 year old Full-Stack Web Developer based in Dallas, TX. I have a subtlety that users and clients alike will notice from the start. My full-stack web developer portfolio features a simple black background on which every other element is aligned. The website is professionally designed, with a preference for impeccable clearness. Readers are introduced to self-descriptive text as it loads, with other contents such as the blog post, skills and portfolio details as you scroll.
                            </p>
                            <div className='about__button d__flex align__items__center'>
                                <a href='https://docs.google.com/document/d/199PWglRCoo6oOzwX7V3JX759nOJELeEh_LIJmJDvASE/edit?usp=sharing'><button className='about btn pointer'>Download CV</button></a>
                                <a href='#Contact'><button className='about btn pointer'>Hire Me</button></a>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About