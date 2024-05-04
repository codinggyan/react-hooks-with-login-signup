import React from "react";
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function NavBar({ handleLoginClick }) {
  const handleClick = () => {
    handleLoginClick();
  };
  return (
    <Navbar bg="dark" expand="lg" className="justify-content-end">
      <Button onClick={handleClick} className="loginicon me-5">
          Sign In
        </Button>
    </Navbar>
  );
}

export default NavBar;
