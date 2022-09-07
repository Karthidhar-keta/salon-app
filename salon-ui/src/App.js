// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import AppNotificationComponent from './display/components/app-notification';
import LoadingIndicatorComponent from './display/components/loading-indicator';
import ChooseService from './components/choose-service';



function App() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Row>
            <Col>
              <Navbar.Brand href="#home">AR Salon & Day Spa Services</Navbar.Brand>
            </Col>
          </Row>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <LoadingIndicatorComponent />
          <Col>
            <AppNotificationComponent />
          </Col>
          <ChooseService />
        </Row>
      </Container>
    </div>

  );
}

export default App;
