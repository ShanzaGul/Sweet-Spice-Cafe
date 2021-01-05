import { Container,Row} from 'react-bootstrap'
import MenuItemCard from './MenuItemCard'
export default function Breakfast() {
    
    const breafastlist = [
        {
          "id": 1,
          "title": "Banana Pancakes",
          "src": "../images/banana_pancakes_62919_16x9.jpg",
          "price": 350,
          "am" : 1
        },
        {
          "id": 2,
          "title": "Buckwheat Pancakes",
          "src": "../images/buckwheatpancakes_80141_16x9.jpg",
          "price": 400,
          "am" : 1
        },
        {
          "id": 3,
          "title": "Butter Poached Egg",
          "src": "../images/butter-poached_egg_in_a_26822_16x9.jpg",
          "price": 250,
          "am" : 1
        },
        {
          "id": 4,
          "title": "Hash Browns and Beans",
          "src": "../images/hash_browns_and_beans_86080_16x9.jpg",
          "price": 400,
          "am" : 1
        },
        {
          "id": 5,
          "title": "Ultimate English Omelette",
          "src": "../images/ultimate_english_39468_16x9.jpg",
          "price": 250,
          "am" : 1
        },
        {
          "id": 6,
          "title": "Vegan Fried Breakfast",
          "src": "../images/vegan_fried_breakfast_34182_16x9.jpg",
          "price": 550,
          "am" : 1
        }
      
      ]
      const card = breafastlist.map(item=>{
               return  <MenuItemCard key= {item.id} src= {item.src} title={item.title} />
      }
      )
  
    return (
        <div>
        <Container>
        <h1 className="text-center p-2">Yummy Breakfast Menu</h1>
        <Row className="justify-content-center">
         {card}</Row>
        </Container>
        </div>
    )
}


