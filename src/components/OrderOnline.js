import React,{useState} from 'react'
import {Container,Nav,Tab ,Row,Col} from 'react-bootstrap'
import BreakFastMenu from './Food'
import LunchMenu from './Food'
import SpecialsMenu from './Food'
import Cart from './Cart'
import {FaShoppingCart} from 'react-icons/fa'



export default function OrderOnline() {
    
  const [cartData,setCartData] = useState([]);

  const handleRemoveCart = (id)=>{
    var c = cartData.filter(cart => cart.id !== id);
    cartData.map(item=> {
    if(item.id===id)
    {
      item.am = 1;
    }
    return cartData;}
    )
    setCartData(c);
    
  }


  
    return (
        <div>
          <Container>
           <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                    <Nav fill variant="tabs" className="flex-column mb-1">

                        <Nav.Item>
                        <Nav.Link eventKey="first">BreakFast</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                        <Nav.Link eventKey="second">Lunch</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                        <Nav.Link eventKey="third">Specials</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                        <Nav.Link eventKey="Fourth"><FaShoppingCart size="30" />{cartData.length}</Nav.Link>
                        </Nav.Item>

                    </Nav>
                    </Col>
                    <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                          <BreakFastMenu value={0} setCartData={setCartData} cartData={cartData} />
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <LunchMenu value={1} setCartData={setCartData} cartData={cartData} />
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <SpecialsMenu value={3} setCartData={setCartData} cartData={cartData} />
                        </Tab.Pane>
                        <Tab.Pane eventKey="Fourth">
                          <Cart cartData={cartData} handleRemoveCart={handleRemoveCart} />
                        </Tab.Pane>

                    </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
           </Container>
           
        </div>
    )
}
