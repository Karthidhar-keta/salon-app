import Button from 'react-bootstrap/Button';
import { Card, Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from 'react';
import loadingIndicator from '../display/services/loading-indicator';
import appNotification from '../display/services/app-notification';

const retriveAvailableSalonServices = "http://localhost:8080/api/services/retrieveAvailableSalonServices";
function ChooseService() {
    const [data, setData] = useState([]);
    function bookService(service) {
        console.log(service)
    }

    
    useEffect(() => {
        loadingIndicator.showLoading(true);
        setTimeout(() => {
            loadingIndicator.showLoading(false)
            fetch(retriveAvailableSalonServices)
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch(err=>{appNotification.showError("Error while fetching the data from backend..")});
        }, 1000);


        
    }, []);
    return (<div>
        <Container style={{
            marginTop: '10px'
        }}>
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
                                {value["name"]}
                            </Card.Header>
                            <Card.Body>
                                <Card.Title
                                    style={{
                                        margin: 'auto'
                                    }}
                                >${value["price"]}</Card.Title>
                                <Card.Text>
                                    {value["description"]}
                                </Card.Text>
                                <Card.Text>
                                    {value["timeInMinutes"]} Minutes
                                </Card.Text>
                                <Button onClick={() => { bookService(value) }} variant="outline-secondary">Book now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                        ;
                })}
            </Row>
        </Container>

    </div>);
}
export default ChooseService;