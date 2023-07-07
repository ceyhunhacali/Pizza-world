import { useState } from 'react';
import {Button, Card, Form, InputGroup} from 'react-bootstrap';
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai'




function Item({pizza, size, orderAdd,}) {

  const[icon, setIcon] = useState(false)
  const elaveEt = () => setIcon(!icon)


  const { id, name, img, price, ingr, } = pizza

  const[eded, setEded] = useState(1)
  const[olcu, setOlcu] = useState(Object.keys(price)[0])


  // const ededArtir = () => setEded(eded + 1) 
  const ededAzald = () => setEded( eded > 1 ? eded -1 : 1)

  // const olcuDeyis = (e) =>  {setOlcu(e.target.value);  }

  return (
    <Card>
      <Card.Img variant="top" src={"assets/img/img/" + img}/>
      <button className='btn5' onClick={elaveEt} >
      { icon ?  <AiFillHeart fill='red'/>  : <AiOutlineHeart  fill='red'/>}
      </button>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text className='card-text-height'>
          {ingr}
        </Card.Text>
        <div className=' d-flex flex-nowrap justify-content-between align-items-start'>
        <Form.Select onChange={(e) =>  setOlcu(e.target.value) } value={olcu}>
          {
            Object.keys(price).map( (s,i) => <option value={s} key={i}>{size[s]}</option>)
          }
        </Form.Select>
        <InputGroup className="mb-3">
          <Button onClick={ededAzald} variant='success'>-</Button>
          <Form.Control  value={eded} className='px-0 text-center' readOnly/>
          <Button onClick={ () => { setEded( eded + 1)}} variant='success'>+</Button>
        </InputGroup>
        </div>
        <h2 className='text-center'>{eded * price[olcu]}m</h2>
        <Button variant="danger" onClick={()=> orderAdd(id, olcu, eded)}>Order Now</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;