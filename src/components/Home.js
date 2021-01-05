import React from 'react'
import {Jumbotron, Container,Row,Col,Button} from 'react-bootstrap'
import Carousel from './Carousell'
import MenuComp from './MenuComp'

export default function Home() {
    return (
        <div className="Home">
            <div className="Hero">
                <Jumbotron fluid className="inner">
                    <Container className="heading justify-content-center p-5">
                        <a href="/menu">
                        <h1 className="text-center p-5">New Winter<br></br> Menu</h1>
                        <p className="text-center p-1">Make Healthy Choices</p>
                        </a>
                    </Container>
                </Jumbotron>
            </div>

            <div className="sectionMenu">
                <Container fluid>
                    <MenuComp />
                    <Row className="ourStory">
                        <Col>
                            <div className="d-flex justify-content-center">
                            <a href="/order"><Button variant="outline-light" size="lg">ONLINE ORDER NOW</Button></a>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div>
                           <Jumbotron fluid className="imgCon">
                                <Container className="justify-content-center p-5 text-center">
                                    <a href="/about">
                                    <h1 className="pt-5">OUR STORY</h1>
                                    <p style={{color:"#91bdaa"}}><strong>
                                    Spice Sweet Café was started by a dad<br></br>
                                    And is run today by his daughter and two sons.<br></br>
                                    It was created for good people <br></br>who love
                                    feel-good food in a comfortable place.
                                    </strong>
                                    </p>
                                    <Button variant="outline-dark" size="lg">Read More</Button>
                                    </a>
                                   
                                </Container>
                            </Jumbotron>

                </div>
                      <Container fluid  className="carouselCon" id="carouselReviews">
                            <Row>
                                
                                    <div className="carousel">
                                    <Carousel />
                                    </div>
                               
                            </Row>                    

                    </Container>
            </div>
        </div>

    )
}
