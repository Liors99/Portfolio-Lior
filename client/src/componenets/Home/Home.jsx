import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';

import "../../App.css";
import "./HomeStyles.css";

export const Home = (props) => {

    return (
        <div className="section full-section">
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
                            <button className="contact-btn"> Contact </button>
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