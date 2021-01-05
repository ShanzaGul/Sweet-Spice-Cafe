import React from 'react'
import {Container,Row,Col,Image}  from 'react-bootstrap'
import img from '../images/cooks.png'
import img2 from '../images/item-1-2.png'
import img3 from '../images/item-2-2.png'
import img4 from '../images/bg.png'
import imgg from '../images/imgg.png'


import {useSpring, animated,config} from 'react-spring'





export default function About() {
      const props = useSpring({
            opacity: 1,
            marginTop: 0,
            from: { opacity: 0,
                  marginTop: 100  },
                  delay:200,
                  config:config.slow})
    return (
        <div>
              <Container>
              <Row className="justify-content-center">
                    <div className="imgabout">
                       <Image src={img} alt="img" fluid />
                    </div>
              </Row>

              <Row className="justify-content-center p-5">
                    <div className="aboutcaption text-wrap text-center">
                    <animated.h3 style={props}>Our Talented Team of Chefs work enthusiatically to make the Delicious Food for our Dearest Customers</animated.h3>
                    </div>
              </Row>
              <Row className="justify-content-center p-1">
                   <Image src={img4} alt="img" fluid />
              </Row>
              <Row className="justify-content-center p-1">
              <Col>
                       <div> 
                        <h4 className="text-center text-wrap" style={{width:"20rem"}}>a place where you’ll find <br></br>MADE FROM SCRATCH CLASSICS<br></br> you expect</h4>
                        <img src={img2} alt="img" style={{width:"auto",height:"100px" ,marginLeft:"12%"}}></img>
                       </div>
              </Col>
              <Col>
                   <div>
                        <h4 className="text-center text-wrap" style={{width:"20rem"}}>some <br></br>TASTY CONCOCTIONS <br></br>you don't.</h4>
                        <img src={img3} alt="img" style={{width:"auto",height:"100px",marginLeft:"30%"}}></img>

                    </div>
              </Col>

              <Col>
                   <div>
                        <h4 className="text-center text-wrap" style={{width:"20rem"}}> and a bowl of <br></br>FRESH AND PURE <br></br>you’ll love</h4>
                        <img src={imgg} alt="img" style={{width:"auto",height:"150px",marginLeft:"30%"}}></img>

                    </div>
              </Col>
                      
              </Row>
              
            
               
             
              </Container>
        
        </div>
    )
}
