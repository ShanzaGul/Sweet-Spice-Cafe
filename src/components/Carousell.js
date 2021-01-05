import React from 'react'
import {Carousel} from 'react-bootstrap'
import img from '../images/women.png'
import img3 from '../images/man2.png'
import img2 from '../images/man.png'

export default function Carousell() {
    return (
        <div>
            <Carousel>

              <Carousel.Item interval={1000}>
              <div className="d-flex flex-row carouselBox text-center" style={{color:'black'}}>
                      <img
                          className="imgcarousel"
                          src={img}
                          alt="First slide"
                        />
                        <div className="captioncarousel">
                            <div className="cap">
                            <h3>Customer Name</h3>
                            <h5 >Customer Review</h5>
                            <p className="p-lg-5"> Nulla vitae elit libero, a pharetra augue mollis interdum.
                            Nulla vitae elit libero, a pharetra augue mollis interdum.
                            Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </div>
                        </div>
              </div>
              </Carousel.Item>
           

              <Carousel.Item interval={1000}>
              <div className="d-flex flex-row carouselBox text-center" style={{color:'black'}}>
                      <img
                          className="imgcarousel"
                          src={img2}
                          alt="First slide"
                        />
                        <div className="captioncarousel">
                        <div className="cap">
                            <h3>Customer Name</h3>
                            <h5>Customer Review</h5>
                            <p className="p-lg-5"> Nulla vitae elit libero, a pharetra augue mollis interdum.
                            Nulla vitae elit libero, a pharetra augue mollis interdum.
                            Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </div>
                        </div>
              </div>
              </Carousel.Item>

              <Carousel.Item interval={1000}>
              <div className="d-flex flex-row carouselBox text-center" style={{color:'black'}}>
                      <img
                          className="imgcarousel"
                          src={img3}
                          alt="First slide"
                        />
                        <div className="captioncarousel">
                        <div className="cap">
                            <h3>Customer Name</h3>
                            <h5>Customer Review</h5>
                            <p className="p-lg-5"> Nulla vitae elit libero, a pharetra augue mollis interdum.
                            Nulla vitae elit libero, a pharetra augue mollis interdum.
                            Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </div>
                        </div>
              </div>
              </Carousel.Item>
             
              
          </Carousel>
        </div>
    )
}
