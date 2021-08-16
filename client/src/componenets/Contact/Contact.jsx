import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import SendIcon from '@material-ui/icons/Send';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import PhoneIcon from '@material-ui/icons/Phone';

import "../../App.css";
import "./ContactStyles.css";


const CustomInputField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: '#3F59A8',
        },
        '& .MuiInput-underline:after': {
            borderColor: '#3F59A8',
        },
    },
})(TextField);

export const Contact = (props) => {
    return (
        <div className={"section " + (props.isSmall ? "" : "full-section")} style={{ padding: 0 }}>

            <Grid container style={{ height: "100%" }}>
                <Grid item md={6} sm={12} xs={12}>
                    <div className="contact-left">
                        <img src="Assets/shake.svg" alt="Profile" />
                    </div>
                </Grid>

                <Grid item md={6} sm={12} xs={12}>
                    <div className="contact-right">
                        <h1 className="sectionTitle"> Contact </h1>
                        <CustomInputField id="name" label="Your Name" className="contact-input" />
                        <br />
                        <CustomInputField id="email" label="Your Email" className="contact-input" />
                        <br />
                        <CustomInputField id="message" label="Message" rows={10} variant="outlined" multiline className="contact-input" />
                        <br />
                        <Button
                            variant="contained"
                            color="primary"
                            endIcon={<SendIcon />}
                            className="contact-button"
                        >
                            Send
                        </Button>

                        <div className="contact-info-container">
                            <div className="contact-info">
                                <a href="#">
                                    <EmailIcon className="contact-info-icon" />
                                    <span> test@email.com </span>
                                </a>

                            </div>


                            <div className="contact-info">
                                <a href="#">
                                    <LinkedInIcon className="contact-info-icon" />
                                    <span>test@email.com </span>
                                </a>
                            </div>

                            <div className="contact-info">
                                <a href="#">
                                    <GitHubIcon className="contact-info-icon" />
                                    <span> test@email.com </span>
                                </a>
                            </div>

                            <div className="contact-info">
                                <a href="#">
                                    <PhoneIcon className="contact-info-icon" />
                                    <span>test@email.com </span>
                                </a>
                            </div>


                        </div>

                    </div>

                </Grid>
            </Grid>

        </div>


    );
}

Contact.propTypes = {
    isSmall: PropTypes.bool.isRequired
};