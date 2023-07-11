import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
} from 'reactstrap';

function NavbarComponent(props) {
  const [collapsed, setCollapsed] = useState(false);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar light className='navbar-container' expand="md">
        <NavbarBrand href="/">Rental Car</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} />
        <Collapse navbar className='navbar-section'> 
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/our-seriveces/">Our Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/why-us/">Why Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/testimonial/">Testimonial</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="FAQ">FAQ</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/cart/">Cart</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        <Offcanvas toggle={toggleNavbar} isOpen={collapsed} direction='end'>
          <OffcanvasHeader toggle={toggleNavbar}>
            Rental Car
          </OffcanvasHeader>
          <OffcanvasBody>
            <Nav className="ml-auto navbar-section" navbar>
              <NavItem>
                <NavLink href="/our-seriveces/">Our Services</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/why-us/">Why Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/testimonial/">Testimonial</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="FAQ">FAQ</NavLink>
              </NavItem>
              <NavItem>
              <NavLink href="/cart/">Cart</NavLink>
            </NavItem>
            </Nav>
          </OffcanvasBody>
        </Offcanvas>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;