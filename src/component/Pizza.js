import { Col, Row } from "react-bootstrap"
import Item from "./Item"

function Pizza({data, orderAdd}) {
 const {size, pizza} = data
  return (
    <div>
        <h2 className="text-center p-2 m-2 text-danger" >Pizza World</h2>
        <Row xs={1} md={2} lg={3} xxl={4}  className="g-3">
          {
            pizza.map( p => <Col key={p.id}><Item pizza={p} size={size} orderAdd={orderAdd} /> </Col> )
          }
        </Row>
    </div>
  )
}

export default Pizza
