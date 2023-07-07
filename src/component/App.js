import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import Order from './Order';
import { useState } from 'react';

const data = {
  size: {
    "xs": "Mini - 15sm",
    "sm": "Small - 23sm",
    "md":  "Medium - 30sm",
    "lg": " Large -35sm",
    "ny": "new york style - 40sm"
  },

  pizza: [
    {"id": 1, "img":"american-hot.png", "price": {"xs" : 5.5, "sm" : 9 ,"md": 14 , "lg" :19} ,  "name": "Amerikan hot", "ingr" : "Garlic Parmesan Sauce, Grilled Chicken, Ham, Tomato, Mozzarella Cheese, Jalapeno Pepper"},
    {"id": 2, "img":"Grill-€iken-Parmezan.png", "price": {"xs" : 5.5, "sm" :11 ,"md": 17, "lg": 21} ,  "name": "Qril Çiken Parmezan", "ingr" : "Pizza Sauce, Mozzarella Cheese, Pepperoni and Jalapeno Peppers"},
    {"id": 3, "img":"Spicy-chicken-ranch.png", "price": {"xs": 5.5, "sm" : 11 ,"md" : 16, "lg" :22} ,  "name": "Acılı Çiken Ranç", "ingr" : "Ranch Sauce, Chicken, Mushrooms, Jalapeno Peppers, Fresh Diced Tomatoes and Mozzarella Cheese"},
    {"id": 4, "img":"Karnaval.jpg", "price": { "sm" :9 ,"md" : 14, "lg": 19} ,  "name": "Karnaval", "ingr" : "Pizza Sauce, Mushrooms, Black Olives, Pepperoni, Mozzarellala "},
    {"id": 5, "img":"New-York-Style-Margarita.jpg", "price": {"ny": 20} ,  "name": "New York Style Marqarita", "ingr" : "Garlic Parmesan Sauce, Grilled Chicken, Ham, Tomato, Mozzarella Cheese, Jalapeno Pepper"},
    {"id": 6, "img":"New-York-Style-Grill-Chiken.jpg", "price": {"ny" :26} ,  "name": "New York Style Qril Çiken", "ingr" : "Pizza Sauce, Grilled Chicken, Mozzarella Cheese, Tomatoes"},
    {"id": 7, "img":"New-York-Style-Pepperoni.jpg", "price": {"ny" :23} ,  "name": "New York Style Pepperoni", "ingr" : "Garlic Parmesan Sauce, Grilled Chicken, Ham, Tomato, Mozzarella Cheese, Jalapeno Pepper"},
    {"id": 8, "img":"chicken_ranch.jpg", "price": {"xs":5.5, "sm":10 ,"md":16, "lg" :21} ,  "name": "Çiken Ranç", "ingr" : "Garlic Parmesan Sauce, Grilled Chicken, Ham, Tomato, Mozzarella Cheese, Jalapeno Pepper"},
    {"id": 9, "img":"papamiks-sayt.png", "price": {"md" :20} ,  "name": "Papa Miks", "ingr" : "Garlic Parmesan Sauce, Grilled Chicken, Ham, Tomato, Mozzarella Cheese, Jalapeno Pepper"}
  ]
}

const sifaris = [
    { id: 0, pid: 2, size: 'md', quant: 2},
    { id: 1, pid: 4, size: 'lg', quant: 1},
    { id: 2, pid: 9, size: 'md', quant: 2}
  ]

function App() {
 const[modal, setModal] = useState(false);
 const[order, setorder] = useState([]);

 function orderAdd(id, olcu, eded) {
  const findedOrder = order.find( p => p.pid === id && p.size === olcu)
  if(findedOrder)
  { orderUpd(findedOrder.id, findedOrder.quant + eded)
  }
  else{
     const newOrder = {id: order.length, pid: id, size: olcu, quant: eded}
  setorder([...order, newOrder])
  }
  setModal(true)
 }
 function orderDel(id) {
  setorder(order.filter( i => i.id !== id ))

 }
 function orderUpd(id, eded) {
  if (eded === 0) {
    orderDel(id);
  } else {
   const orderedArr = order.map( item => {
     return item.id === id ? {...item, quant : eded} : item
    })
    setorder(orderedArr)
  }


 }

  return (
    <div>
      <Header setModal={setModal} order={order}  />
      <Main data={data} orderAdd={orderAdd} />
      <Footer />
      <Order orderUpd={orderUpd} order={order} data={data} show={modal} orderDel={orderDel} onHide={() => setModal(false)}  />
    </div>
  );
}

export default App;
