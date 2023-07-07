import { useState } from "react";
import { Form, FormControl, InputGroup, Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbCurrencyManat } from "react-icons/tb";

function Order({ order, data, orderDel, orderUpd, ...mprops }) {
let total = 0;

  return (
    <Modal
      {...mprops}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Your order
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Products</h4>
        <Table responsive="sm">
          <thead>
            <tr className="text-center">
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Size</th>
              <th>Price</th>
              <th>Quant</th>
              <th>Product price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {order.map((o, i) => {
              let pizza = data.pizza.find((p) => p.id == o.pid);
              let qiymet = pizza.price[o.size] * o.quant;
              total += qiymet
              return (
                <tr key={o.id}>
                  <td>{o.id+1}</td>
                  <td>
                    <img
                      className="thumb"
                      src={"assets/img/img/" + pizza.img}
                      alt={pizza.name}
                    />
                  </td>
                  <td>{pizza.name}</td>
                  <td>{data.size[o.size]}</td>
                  <td>
                    {pizza.price[o.size]}
                    <TbCurrencyManat className="d-inline-block" />
                  </td>
                  <td>
                  <InputGroup className="mb-3">
                    <Button  variant='success' onClick={() => {if (o.quant > 0) 
                      orderUpd(o.id, o.quant - 1)} } >-</Button>
                    <Form.Control value={o.quant}  className='px-0 text-center short' readOnly/>
                    <Button onClick={ () =>  orderUpd(o.id, o.quant + 1 )} variant='success'>+</Button>
                  </InputGroup>
                  </td>
                  <td>
                    {qiymet}
                    <TbCurrencyManat className="d-inline-block" />
                  </td>
                  <td >
                    <RiDeleteBin6Line onClick={() => orderDel(o.id)} />
                  </td>
                </tr>
              );
            })}
            <tr>
              <td colSpan={6} className="text-end">Total:</td>
              <th>{total}  <TbCurrencyManat className="d-inline-block"/> </th>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={mprops.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default Order;