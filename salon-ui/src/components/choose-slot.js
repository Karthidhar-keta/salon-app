import { useState } from "react";
import { Button, Card, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import appNotification from "../display/services/app-notification";
import loadingIndicator from "../display/services/loading-indicator";

function ChooseSlot() {
    const [data, setData] = useState([]);
    const [selectedDate, setSelectedDate] = useState("");
    const { serviceId, serviceName } = useParams();

    function displayAvailableDate() {
        if (selectedDate === "" || data.length === 0)
            return "";
        else
            return "Available Slots On " + selectedDate;
    }

    function handleOnSubmit() {
       
        let retriveAvailableSlots = "http://localhost:8080/api/services/retrieveAvailableSlots";
        retriveAvailableSlots = retriveAvailableSlots + "/" + serviceId;
        retriveAvailableSlots = retriveAvailableSlots + "/" + selectedDate;
        let given = new Date(selectedDate);
        let now = new Date();
        now.setHours(0, 0, 0, 0);
        if (given >= now) {
            loadingIndicator.showLoading(true);
            fetch(retriveAvailableSlots)
                .then((res) => res.json())
                .then((data) => setData(data))
                .catch(err=>{appNotification.showError("BAck end server is down. Please try again after sometime..");});
                loadingIndicator.showLoading(false);
        } else {
            appNotification.showError("Please select today or future date..");
            setData([]);
        }
        
    }
    function convertDateToTime(giveDate) {
        let time = giveDate.split("T")[1];
        let hour = time.split(":");

        return hour[0] > 12 ? (hour[0] - 12) + ":" + hour[1] + " PM" : hour[0] + ":" + hour[1] + " AM";
    }
    function handleOnChange(event) {
        setSelectedDate(event.target.value.toString());

    }
    return (<div>
        <Container style={{
            marginTop: '1rem'
        }}>
            <div style={{
                maxWidth: '700px'
            }}>
                <Form.FloatingLabel>Choose a date for body treatment</Form.FloatingLabel>
                <InputGroup>
                    <Form.Control type="date" onChange={handleOnChange} />
                    <Button onClick={handleOnSubmit}>Show Slots</Button>
                </InputGroup>
            </div>
        </Container>
        <Container style={{
            marginTop: '2rem'
        }}>
            <h3>
                {displayAvailableDate()}
            </h3>

            <Row>
                {data.map((value, key) => {
                    return <Col key={key}>
                        <Card
                            style={{
                                width: '25rem',
                                marginTop: '20px',
                                boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
                                backgroundColor: "#fafafa"
                            }}
                            className="text-center">
                            <Card.Header>
                                {serviceName}
                            </Card.Header>
                            <Card.Body>
                                <Card.Title
                                    style={{
                                        margin: 'auto',
                                        fontSize: '32px',
                                        fontWeight: 'bold'
                                    }}
                                >{value["stylistName"]}</Card.Title>
                                <Card.Text>
                                    Slot time {convertDateToTime(value["slotFor"])}
                                </Card.Text>

                                <Button variant="outline-primary">Book this Slot</Button>

                            </Card.Body>
                        </Card>
                    </Col>
                        ;
                })}
            </Row>
        </Container>
    </div>);
}
export default ChooseSlot;