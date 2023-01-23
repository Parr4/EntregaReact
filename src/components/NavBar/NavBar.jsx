import { BotonNav } from "../BotonNav/BotonNav";
import { CarritoWidget } from "../CarritoWidget/CarritoWidget";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";



export default function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
            {/* <div className="linea">
                <div>
                    <a href="https://www.youtube.com/watch?v=0mGr5bMItQY"><img width="50" src="src/assets/img/logo.png" alt="Logotipo" /></a>
                </div> */}
                <Container>
                    <Link to="/"><img width="50" src="/src/assets/img/logo.png" alt="Logotipo" /></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link className="btn" to="/">Inicio</Link>
                            <Link className="btn" to="/catalog">Catalogo</Link>
                            <Link className="btn" to="/cart">Cart</Link>
                            <NavDropdown title="Redes Sociales" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Instagram</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Facebook
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Whatsapp
                                </NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Best Sellers" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to='/catalog/1'>Shaman King</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to='/catalog/2'>Tokyo Revengers</NavDropdown.Item>
                                <NavDropdown.Item  as={Link} to='/catalog/3'>Vinland Saga</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    <CarritoWidget aria-controls="basic-navbar-nav" />
                </Container>

            {/* </div> */}
        </Navbar>
    )
}
