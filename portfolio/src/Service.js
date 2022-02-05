import React from 'react';
import "./App.css";
import "./Service.css"
function Service() {
    return (
        <div className='service componet__space'>
            <div className='heading'>
                <h1 className='heading'>My Services</h1>
                <p className='heading p__color'>Here are services I provide:</p>
                <p className='heading p__color'></p>
            </div>
            <div className='container'>
                <div className='row'>
                    {/* <div className='col__3'>
                        <div className='service__box pointer'>
                                <div className='icon'>
                                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                                
                                </div>
                                <div className='service__meta'>
                                        <h1 className='service__text'>
                                            Web Development
                                        </h1>
                                        <p className='p service__text p__color'>Hello</p>
                                        <p className='p service__text p__color'>Hello</p>
                                        <p className='p service__text p__color'>Hello</p>
                                </div>
                        </div>
                    </div> */}

                    <div className='col__3'>
                        <div className='service__box pointer'>
                                <div className='icon'>
                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path><line x1="2" y1="20" x2="2" y2="20"></line></svg>

                                </div>
                                <div className='service__meta'>
                                <h1 className='service__text'>
                                            Mobile Development
                                        </h1>
                                        <p className='p service__text p__color'>In today's world, mobile devices are the main machines that websites are bing veiwed on.</p>
                                        <p className='p service__text p__color'>Developing a website that is designed to perform in today's competitive marketplace is essential.

</p>
                                        <p className='p service__text p__color'>Hello</p>
                                </div>
                        </div>
                    </div>
                    <div className='col__3'>
                        <div className='service__box pointer'>
                                <div className='icon'>
                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path><line x1="2" y1="20" x2="2" y2="20"></line></svg>

                                </div>
                                <div className='service__meta'>
                                <h1 className='service__text'>
                                            Web Development
                                        </h1>
                                        <p className='p service__text p__color'>A professional and clean website is important for any business to succeed in the online world. </p>
                                        <p className='p service__text p__color'>Modern web design is more involved than creating an attractive website.</p>
                                        <p className='p service__text p__color'>Consideration of user experience, search engine optimization, ease of use, and technical details are things I focus on.</p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service;