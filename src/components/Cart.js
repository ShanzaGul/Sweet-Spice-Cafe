import React,{useState,useEffect} from 'react'
import {Card,Button, Container,Row} from 'react-bootstrap'

const Cart = ({cartData,handleRemoveCart,amount})=> {
    var bill = 0;
    const [showBill , setBill] = useState(false);
    const [name,setName] = useState('');
    const [address,setAddress]=useState('');
    const [phone , setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [confirmbill,setconfirmbill] = useState(false);
    const handlelog = () =>{
        setBill(true);
    }

    const handlelogt = () =>{
         setBill(false);
    }
    
    useEffect(() => {
       handlelogt();
       bill = 0;
       
    }, [cartData])
    
     const handleSubmit = (event) =>{
     event.preventDefault();
     console.log(name,email,address,phone);
     setconfirmbill(true);
    }
    const cardBody = " Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
    const CartList = cartData.length ? (
        cartData.map(cart => {
            var totalprice = cart.m.price*cart.amount;
            bill = bill + totalprice;
          return (
                        <Card border="light  mb-5"  key={cart.id}>
                            <div className="divFoodCard text-center" >
                                <Card.Img src={cart.m.src} className="imgFoodCard" />
                                <div className="bodyFoodCard">
                                    <Card.Header> 
                                        {cart.m.title}
                                    </Card.Header>
                                        <Card.Body>
                                            <Card.Text>
                                                {cardBody}                
                                            </Card.Text>
                                                <div className="d-flex flex-column">
                                                <p>{cart.amount} Serving</p>
                                                <div className="p-1" style={{fontWeight:'700',fontFamily:'monospace'}}>PKR.{totalprice}</div>
                                               
                                                <Button variant="outline-warning"  onClick={()=>{ handleRemoveCart(cart.id)}}>Remove</Button>{' '}
                                            </div>
                                        </Card.Body>
                                </div>
                            </div>
                        </Card>
          )
        })
      ) : (
        <div className="text-center p-5">Order some Tasty food :) <br></br> Your CART is EMPTY</div>
      );
      const checkoutbtn = cartData.length ? ( <div> <Button variant="outline-success" block onClick={()=>{ handlelog()}}>Check Out</Button></div>) : (<div></div>)
     
    
    const output = (showBill===true) ? (
      
      <Container>
      <Row className="justify-content-center">
      <form onSubmit={handleSubmit}>

        <div className="form-group pt-3 pb-2">
          <input type="email" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}} required></input>
        </div>

        <div className="form-group pt-3 pb-2">
          <input type="text" placeholder="Name" value={name} onChange={(e)=>{setName(e.target.value)}} required></input>       
        </div>

        <div className="form-group pt-3 pb-2">
          <input type="text" placeholder="Address"  value={address} onChange={(e)=>{setAddress(e.target.value)}} required></input>        
        </div>
        
        <div className="form-group pt-3 pb-2">
          <input type="tel"  value={phone} pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="312-345-6789" onChange={(e)=>{setPhone(e.target.value)}} required></input>        
        </div>
      
        <div className="text-center">
            <h4 style={{color:'burlywood', fontFamily:'monospace' }}>Total Bill = PKR.{bill}</h4>
            <h1 style={{color:'burlywood'}}>Cash on Delievery</h1>
        </div>
        <button className="btn btn-success">Confirm Order</button>
      </form>
      </Row>
      </Container>
      
     
    
    ) : (<div>
        <div>{CartList}</div>
         <div>{checkoutbtn}</div>
       </div>) ;

    
    
    const confirm = (confirmbill===true) ? (
    <Container>
        <Row className="justify-content-center pt-3">
        <Card>
            <Card.Header style={{color:'burlywood'}}><h3>Thank You for Ordering</h3></Card.Header>
            <Card.Body>
                <Card.Title>Dear {name}</Card.Title>
                <Card.Text style={{color:'burlywood'}}>
                Your order at {address} is on the way
                </Card.Text>
                <a href="/"><Button variant="primary">Go to Home</Button></a>
            </Card.Body>
            </Card>
        </Row>
    </Container>
    ) : (<div> {output}</div>);



    return (
        <div className="foodCard p-2">
             {confirm}
           </div>     
    )
}

export default Cart;
