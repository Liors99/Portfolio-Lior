import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import "../../App.css";
import "./HomeStyles.css";

export const Home = (props) => {

    const handleContactClick = () => {
        document.getElementById("contact").scrollIntoView(true);
    }

    return (
        <div className="section full-section" id="home">
            <Grid container style={{ height: "100%" }}>
                <Grid item md={6} sm={12} xs={12}>
                    <div className="left">
                        <span className="helper"></span>
                        <img src="Assets/Profile.png" alt="Profile" className={"img-container " + (props.isSmall ? "img-container-vertical" : "img-container-horizontal")} />
                    </div>
                </Grid>
                <Grid item md={6} sm={12} xs={12}>
                    <div className={"right " + (props.isSmall ? "right-vertical" : "")}>
                        <div className="wrapper">
                            <h2>Hi There, I'm</h2>
                            <h1> Your name </h1>
                            <Button className="contact-btn" onClick={handleContactClick}> Contact </Button>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );

}

Home.propTypes = {
    isSmall: PropTypes.bool.isRequired
};