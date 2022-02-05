import React from 'react';
import './Home.css'
import logo from "./logo.png";
function Home() {
    return (
      <div className="home">
          <div className='home__bg'>
                <div className='header d__flex align__items__center pxy__30'>
                <div className='logo'>
                    <img src={logo} alt=""/>
              </div>
              <div className='navigation pxy__30'>
                <ul className='navbar d__flex'>
                    <a href='#Home'><li className='nav__items mx__15'>Home</li></a>
                    <a href='#About'><li className='nav__items mx__15'>About</li></a>
                    <a href='#Service'><li className='nav__items mx__15'>Services</li></a>
                    <a href='#Portfolio'><li className='nav__items mx__15'>Projects</li></a>
                    <a href='#Contact'><li className='nav__items mx__15'>Contact</li></a>
                </ul>
              </div>
              </div>
              {/* Home Content */}
              <div className='containter'>
                  <div className='home__content'>
                    <div className='home__meta'>
                    <h1 className='home__text pz__10'>
                        Hi I'm Bailey Sisomphane,  <br></br>
                        a Full-Stack Web Developer <br></br>based in Dallas, TX
                    </h1>
                    {/* <h2 className='home__text pz__10'>
                        Hi, I'm Bailey Sisomphane
                    </h2>
                    <h3 className='home__text sweet'>
                        Full Stack Web Developer
                    </h3>
                    <h4 className='home__text pz__10'>
                        based in Dallas, TX
                    </h4> */}
                    </div>
                    </div>
              </div>
          </div>
      </div>
    );
  }
  
  export default Home;