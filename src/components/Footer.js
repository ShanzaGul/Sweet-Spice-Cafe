import React from 'react'
import Form from './Formm'
import {Container,Row,Col} from 'react-bootstrap'
import { FaFacebook,FaTwitter,FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
                 <Container fluid  className="footerCon">
                            <Row>
                            <Col lg={4} md={4} sm={12}>
                                   <div className="footer">
                                      <h2>Get in touch</h2>
                                      <h5>Ask Questions and Give us your feedback</h5>
                                      <a href="https://www.facebook.com/"><FaFacebook size="50" className="p-2"/></a>
                                      <a href="https://twitter.com/home"><FaTwitter size="50"  className="p-2"/></a>
                                      <a href="https://www.instagram.com/"><FaInstagram size="50"  className="p-2"/></a>
                                  </div>
                                </Col>
                                <Col lg={4} md={4} sm={12}>
                                   <div className="footer">
                                      <Form />
                                  </div>
                                </Col>
                                <Col lg={4} md={4} sm={12}>
                                  <div className="footer">
                                   <p><span dangerouslySetInnerHTML={{ "__html": "&copy;" }} />2020 Spice Sweet Inc.</p>
                                  <a href="/"><h5>Services</h5></a>
                                   <a href="/"><h5>Terms and Policies</h5></a>
                                  </div>
                                </Col>
                              
                               
                               
                            </Row>                    

                    </Container>
    
    )
}
