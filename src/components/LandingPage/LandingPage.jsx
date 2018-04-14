import React from "react";
import { withRouter } from "react-router-dom";
import { Image, Button } from "react-bootstrap";
import img from "../../assets/images/react_logo_512x512.png";

const ButtonRoute = withRouter(({ history }) => (
    <div>
        <Button
            bsStyle="primary"
            bsSize="large"
            block
            onClick={() => { history.push("/yumMap"); }}
        >
          Enter
        </Button>
    </div>
));

const LandingPage = () => {
    return (
        <div className="landingPage">
            <h2 id="heading">LocaleYum</h2>
            <Image className="image-responsive center-block" src={img} />
            <ButtonRoute />
        </div>
    );
};

export default LandingPage;
