import { Fragment, useEffect, useState } from "react";
import { ProgressBar } from "react-bootstrap";
import loadingIndicator from "../services/loading-indicator";


function LoadingIndicatorComponent() {
    const [state, setState] = useState({
        "showLoading": false
    });
    

    useEffect(()=>{
        const subscription = loadingIndicator.onMessage().subscribe( value => {
            setState({
                "showLoading": value.showLoading
            });
        });
        
        
    },[]);
    const { showLoading } = state
    return (
        <Fragment>
            {state["showLoading"] && <div style={{
                marginTop:'150px',
            }}><ProgressBar animated variant="success" now={100} /></div>}
        </Fragment>
    );
}
export default LoadingIndicatorComponent;