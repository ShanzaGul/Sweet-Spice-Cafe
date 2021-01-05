import { Container,Row } from 'react-bootstrap'
import MenuItemCard from './MenuItemCard'




export default function Specials() {
    
    const specialslist = [
        {
            "id": 15,
            "title": "Black Forest Gteau",
            "src": "../images/black_forest_gteau_47551_16x9.jpg",
            "price": 650,
            "am" : 1
          },
          {
            "id": 16,
            "title": "Cheesecake Brownie",
            "src": "../images/cheesecake_brownies_with_59044_16x9.jpg",
            "price": 250,
            "am" : 1
          },
          {
            "id": 17,
            "title": "Chocolate Trifle",
            "src": "../images/easy_chocolate_trifle_14206_16x9.jpg",
            "price": 350,
            "am" : 1
          },
          {
            "id": 18,
            "title": "Fudgy Chocolate Brownie",
            "src": "../images/fudgy_chocolate_brownies_64180_16x9.jpg",
            "price": 250,
            "am" : 1
          },
          {
            "id": 19,
            "title": "GingerBread Pancake",
            "src": "../images/gingerbread_pancakes_89406_16x9.jpg",
            "price": 250,
            "am" : 1
          },
          {
            "id": 20,
            "title": "Salted Caramel",
            "src": "../images/salted_caramel_and_18373_16x9.jpg",
            "price": 200,
            "am" : 1
          },
          {
            "id": 21,
            "title": "Tarte Au Citron",
            "src": "../images/tarte_au_citron_94480_16x9.jpg",
            "price": 250,
            "am" : 1
          }
    
    ];
      const card = specialslist.map(item=>{
               return  <MenuItemCard key= {item.id} src= {item.src} title={item.title} />
      }
      )
  
    return (
        <div>
        <Container>
        <h1 className="text-center p-2"> Our Sweet Specials</h1>
        <Row className="justify-content-center">
         {card}</Row>
        </Container>
        </div>
    )
}


