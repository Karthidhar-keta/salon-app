// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ChooseService from './components/choose-service';
import ChooseSlot from './components/choose-slot';
import AppNotificationComponent from './display/components/app-notification';
import LoadingIndicatorComponent from './display/components/loading-indicator';

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
          <Routes>
            <Route path="/" element={<ChooseService />} />
            <Route path="/chooseslot/:serviceId/:serviceName" element={<ChooseSlot />}></Route>
          </Routes>
        </Row>
      </Container>
    </div>

  );
}

export default App;
