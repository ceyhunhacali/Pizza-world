import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import {FiShoppingCart} from 'react-icons/fi'

function Header({setModal, order}) {
  return (
    <header>
            <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img id='logo' src="https://seeklogo.com/images/P/pizza-logo-42816D88BE-seeklogo.com.png" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/menu">Pizza</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets" className='position-relative' ><FiShoppingCart onClick={()=> setModal(true)} /> 
              <span class="position-absolute top-1 start-100 translate-middle badge rounded-pill bg-light text-dark">
    {order.length}

  </span>
               </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header