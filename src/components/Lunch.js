import { Container,Row} from 'react-bootstrap'
import MenuItemCard from './MenuItemCard'




export default function Lunch() {
    
    const Lunchlist = [
        {
            "id": 7,
            "title": "Classic Chicken Burger",
            "src": "../images/classic_burgers_58632_16x9.jpg",
            "price": 350,
            "am" : 1
    
          },
          {
            "id": 8,
            "title": "Dal Makhani and Rice Bowl",
            "src": "../images/dal_makhani_30779_16x9.jpg",
            "price": 250,
            "am" : 1
          },
          {
            "id": 9,
            "title": "Fried Chicken Sandwich",
            "src": "../images/fried_chicken_sandwich_58048_16x9.jpg",
            "price": 250,
            "am" : 1
          },
          {
            "id": 10,
            "title": "Jerk Beef burger",
            "src": "../images/jerk_beef_burgers_51235_16x9.jpg",
            "price": 400,
            "am" : 1
          },
          {
            "id": 11,
            "title": "Mushroom Bhaji",
            "src": "../images/mushroom_bhaji_24858_16x9.jpg",
            "price": 250,
            "am" : 1
          },
          {
            "id": 12,
            "title": "Pot Kark Dal",
            "src": "../images/one_pot_dal_48517_16x9.jpg",
            "price": 200,
            "am" : 1
          },
          {
            "id": 13,
            "title": "Saag Aloo",
            "src": "../images/saag_aloo_32582_16x9.jpg",
            "price": 250,
            "am" : 1
          }, {
            "id": 14,
            "title": "Vegetable Curry",
            "src": "../images/vegetablecurry_80763_16x9.jpg",
            "price": 250,
            "am" : 1
          }
    
    ]
      const card = Lunchlist.map(item=>{
               return  <MenuItemCard key= {item.id} src= {item.src} title={item.title} />
      }
      )
  
    return (
        <div>
        <Container>
        <h1 className="text-center p-2"> New Lunch Menu</h1>
        <Row className="justify-content-center">
         {card}</Row>
        </Container>
        </div>
    )
}


