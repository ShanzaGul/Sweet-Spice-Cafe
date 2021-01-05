import React, { useEffect, useState } from 'react';
import {FaPlusCircle} from "react-icons/fa"
import {FaMinusCircle} from "react-icons/fa"
import {Card,Modal,Button} from 'react-bootstrap'




  const Food =({value,setCartData,cartData})=> { 
  
  const [amount,setAmount] = useState(1);
  

  const [cart,setCart] = useState([]);

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setAmount(1);

  };
  const handleShow = () => setShow(true);

  const [modalInfo,setModalInfo]=useState([]);

  const handleModalData = (arr) => {
    setModalInfo(arr);
  }

  const handleAmountDec = (m)=>{
    if(amount>1)
    { setAmount(amount-1);}
  }

  const handleAmountInc = (m) =>{
    setAmount(amount+1);
  }

  const handleAddToCart = (m) =>{
    var id = m.id;
    var obj = { m, id:m.id ,amount};
    if(cartData.length>0)
    {
      cartData.map(dat=> {
        if(dat.m.id===id)
        {
          cartData = cartData.filter(cart => cart.id !== id);
        }
        
          setCart([...cart , obj]);
          setCartData([...cartData,obj])
          return cartData;
      } )
    }
    else{
      setCart([...cart , obj]);
      setCartData([...cartData,obj])
     
    }
    
    handleClose();
  }

 

  var minusBtn = 0;
  var empty ;
  var cardBody = " Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
    if(minusBtn===1)
        {  empty = <FaMinusCircle  size="30" color="red" className="p-1"/>;
        }
    else {
        empty = "";
        }
   
   
   const [data,setData]=useState([]);

   const getData=()=>{
     var path = '';
     if(value===0)
     {
       path ='breakfast.json'
     }
     else if (value===1)
     {
       path = 'Lunch.json';
     }
     else if (value===3)
     {
       path = 'Specials.json';
     }
    fetch(path
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        return response.json();
      })
      .then(function(myJson) {
        setData(myJson)
      });
  }
  useEffect(()=>{
    getData();
  })
  
  
  
  



  const CheeseList = (value===1) ? (
          (  <div>
                <div className="radio">
                    <label style={{fontFamily:'cursive'}}><input type="radio"  name="variation" value="AddCheese"></input> Cheese</label>
                </div>
                <div className="radio">
                    <label style={{fontFamily:'cursive'}}><input type="radio" name="variation" value="NoCheese" className="p-1"></input> No Cheese</label>
                </div>
              </div>)
  ) : (
     <div></div>
);







  const foodList = data.length ? (
    data.map(food => {
      return (
                 <div onClick={handleShow} key={food.id}>
                    <Card border="light  mb-5" onClick={()=>{ handleModalData(food)}} className="foodwalacard">
                        <div className="divFoodCard" >
                            <Card.Img src={food.src} className="imgFoodCard" />
                            <div className="bodyFoodCard">
                                <Card.Header> 
                                    {food.title}
                                </Card.Header>
                                    <Card.Body>
                                        <Card.Text>
                                            {cardBody}                            
                                        </Card.Text>
                                            <div className="d-flex flex-row">
                                            <div className="p-1" style={{fontWeight:'700',fontFamily:'cursive'}}>PKR.{food.price}</div>
                                            <FaPlusCircle  size="30" color="green" className="p-1"/>
                                            {empty}
                                        </div>
                                    </Card.Body>
                            </div>
                        </div>
                    </Card>
                        </div>
      )
    })
  ) : (
    <div className="center">Nothing to show</div>
  );


  



   
    return (
        <div className="foodCard p-2">
       
            {foodList}

            <Modal size="lg" show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title style={{fontFamily:'cursive'}}>
                        {modalInfo.title}
                        </Modal.Title>
                    </Modal.Header>
                        <Modal.Body className="d-flex flex-column">
                                <img  src={modalInfo.src} style={{width:"100%"}} alt="img">
                                </img>
                                <div className="d-flex flex-column">
                                    <div className="p-2" style={{fontFamily:'cursive'}}>{cardBody}</div>
                                        {CheeseList}
                                    <div className="form-group">
                                        <label   style={{fontFamily:'cursive'}}>Any Instructions you wanna give for the order:</label>
                                        <textarea className="form-control" rows="2" id="comment" style={{fontFamily:'cursive'}}></textarea>
                                    </div>
                                    <div className="form-group">
                                    <label   style={{fontFamily:'cursive'}}>PKR.{modalInfo.price}</label>
                                    </div>

                                </div>
                                <div className="d-flex flex-row"> 
                                  <button className="btnMinus" onClick={()=>handleAmountDec(modalInfo,amount)}><FaMinusCircle  size="30" color="red" className="p-1"/></button>
                                  <h4  className="p-2">{amount}</h4>
                                  <button className="btnAdd" onClick={()=>handleAmountInc(modalInfo,amount)}> <FaPlusCircle  size="30" color="green" className="p-1"/></button>
                                  <Button variant="secondary" size="lg" block onClick={()=>handleAddToCart(modalInfo)}>ADD TO CART</Button>
                                </div>
                            
                        </Modal.Body>
                    <Modal.Footer>
                    </Modal.Footer>
            </Modal>
        </div>

    )
}

export default Food;