import { Fragment, useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import appNotification from "../services/app-notification";


function AppNotificationComponent() {
    const [state, setState] = useState({
        "show": false,
        "title": '',
        "variant": '',
        "message": '',
    });

    useEffect(() => {
        const subscribe = appNotification.onChange().subscribe(res => {
            onNotificationReceived(res)
        });
    },[]);


    function onNotificationReceived(res) {
        setState({
            "show": true,
            "title": res.title,
            "variant": res.variant,
            "message": res.message
        });
        resetAfterTenSeconds()
    }

    function reset() {
        setState({
            "show": false,
            "title": '',
            "variant": '',
            "message": '',
        });
    }

    function resetAfterTenSeconds() {
        setTimeout(() => { reset() }, 2000);
    }
    const { show, title, message, variant } = state
    return (
        <Fragment>
            {
                show == true && <div>

                    <div className="container">
                        <Alert variant={variant} onClose={() => this.reset()} dismissible>
                            <Alert.Heading>{title}</Alert.Heading>
                            <p>
                                {message}
                            </p>
                        </Alert>
                    </div>
                </div>
            }
        </Fragment>
    );

}
export default AppNotificationComponent;