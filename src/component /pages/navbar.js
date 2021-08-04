import React from 'react'
import { Button,Form,Navbar,Nav, } from "react-bootstrap";
import {Link} from "react-router-dom"
import '../css/navbard.css'
function Navb() {
  return(
    <div>
        <div className=" container-fluid col-md-12 navvvv">
        <Navbar collapseOnSelect expand="lg" fixed="top">
                 <Link to="/" className="linked--brand ml-auto" > <img src="/images/logo.webp" /> </Link>
                 <Navbar.Toggle aria-controls="responsive-navbar-nav" />
 
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Link className="linked--page" to="/">Home</Link>
                        <Link className="linked--page" to="/About">About</Link>
                        <Link className="linked--page" to="/Munue">Munu</Link>
                        <Link className="linked--page" to="/contact">contact </Link>
                        <Form inline>
                            {/* <FormControl type="text" placeholder="SEARCH" /> */}
                            <Link variant="outline-secondary"><i class="fas fa-shopping-basket"></i></Link>
                        </Form>
                        <Link className="heart" to="/Favorite"><i class="fas fa-heart"></i><span className="favorite--value"></span></Link>
                        {/* <SignUp/> */}
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
 
    </div>

    </div>
   )

 }

export default Navb