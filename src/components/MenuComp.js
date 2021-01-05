import React from 'react'
import {Row,Col} from 'react-bootstrap'
import img from '../images/breakfast.png'
import img2 from '../images/lunch.png'
import img3 from '../images/specials.png'

export default function MenuComp() {

   
    return (<div>
            <Row>
                        <Col className="menuCol" sm={12} lg={4} md={4}>
                            <a href="/menu/breakfast" className="menu-nav__item">
                            <div className="menuColDiv">
                               <h3 className="menu-nav__heading pt-5 mb-0 pb-0">Breakfast <br></br>menu</h3>
                                <div className="imgDiv">
                                  <img className="imgMenu" src={img} alt="udh" ></img>
                                </div>
                            </div>
                            </a>
                        </Col>

                        <Col className="menuCol" sm={12} lg={4} md={4}>
                            <a href="/menu/lunch" className="menu-nav__item">
                            <div className="menuColDiv">
                               <h3 className="menu-nav__heading pt-5 mb-0 pb-0">Lunch <br></br>menu</h3>
                                <div className="imgDiv">
                                  <img className="imgMenu" src={img2} alt="udh" ></img>
                                </div>
                            </div>
                            </a>
                        </Col>

                        <Col className="menuCol" sm={12} lg={4} md={4}>
                            <a href="/menu/specials" className="menu-nav__item">
                            <div className="menuColDiv">
                               <h3 className="menu-nav__heading pt-5 mb-0 pb-0">Specials <br></br>menu</h3>
                                <div className="imgDiv">
                                  <img className="imgMenu" src={img3} alt="udh" ></img>
                                </div>
                            </div>
                            </a>
                        </Col>
                    </Row>
            
          </div>
    )
}
