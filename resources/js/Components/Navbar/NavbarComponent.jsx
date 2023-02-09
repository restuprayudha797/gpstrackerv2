import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavbarComponent = () => {
    return (
        <div className="">
            <Navbar bg="" expand="lg" className="p-3">
                <Container fluid>
                    <Navbar.Brand href="#" className="ml-20">
                        <h1 style={{ color: "#57627C" }}>
                            <b>GPS-Track</b>
                        </h1>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <div className="me-auto my-2 my-lg-0 "></div>
                        <Nav className="mr-40 ">
                            <div class="navbar-nav">
                                <a
                                    class="nav-link active"
                                    aria-current="page"
                                    href="#"
                                    style={{ color: "#57627C" }}
                                >
                                    <b>Home</b>
                                </a>
                                <a class="nav-link" href="#">
                                    <b>Store</b>
                                </a>
                                <a class="nav-link" href="#">
                                    <b>Aplication</b>
                                </a>
                            </div>
                        </Nav>
                        <Form className="d-flex">
                            <button className="btn btn-primary">Sign Up</button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavbarComponent;
