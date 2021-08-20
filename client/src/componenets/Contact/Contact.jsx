import { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

import SendIcon from '@material-ui/icons/Send';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import PhoneIcon from '@material-ui/icons/Phone';

import "../../App.css";
import "./ContactStyles.css";

import axios from 'axios';

const CustomInputField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: '#3F59A8',
        },
        '& .MuiInput-underline:after': {
            borderColor: '#3F59A8',
        },

        "& .MuiFormLabel-root.Mui-error": {
            color: "red !important"
        },

        "& .MuiInput-underline.Mui-error:after": {
            borderBottomColor: "red !important"
        },
        "& .MuiFormHelperText-root.Mui-error": {
            color: "red !important"
        }
    },
})(TextField);


//Input character limits
const NAME_MAX_CHARACTERS = 80;
const EMAIL_MAX_CHARACTERS = 80;
const MESSAGE_MAX_CHARACTERS = 2000;


export const Contact = (props) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [hasSent, setHasSent] = useState(false);
    const [loadStatusElement, setLoadStatusElemet] = useState(<div></div>);
    const [isInTransit, setIsIntTransit] = useState(false);

    //Used to configure the environment variables
    useEffect(() => {
        require('dotenv').config();
    }, [])


    const handleNameChange = (event) => {
        setName(event.target.value);
        setHasSent(false);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        setHasSent(false);
    }

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
        setHasSent(false);
    }

    const handleSubmitClick = () => {

        setHasSent(true);


        if (name !== "" && email !== "" && message !== "" & !isInTransit) {

            //Show the loading bar
            setLoadStatusElemet(<CircularProgress style={{ color: "#3F59A8" }} />);

            //Set the state to indicate that it is in transit
            setIsIntTransit(true);
            axios.post(process.env.REACT_APP_SERVER_ADDRESS + "/newMessage", {
                "name": name,
                "email": email,
                "message": message
            })
                .then(() => {
                    setLoadStatusElemet(<p style={{ color: "green" }}>Thanks! I will reply ASAP :)</p>);
                    setIsIntTransit(false);
                    setHasSent(false);

                    //Clear out the input fields
                    setName("");
                    setEmail("");
                    setMessage("");
                })
                .catch(() => {
                    setLoadStatusElemet(<p style={{ color: "red" }}>An internal error has occured :(</p>);
                    setIsIntTransit(false);
                    setHasSent(false);
                });
        }
    }

    return (
        <div className={"section " + (props.isSmall ? "" : "full-section")} style={{ padding: 0 }}>

            <Grid container style={{ height: "100%" }}>
                <Grid item md={6} sm={12} xs={12}>
                    <div className="contact-left">
                        <img src="Assets/shake.svg" alt="Profile" />
                    </div>
                </Grid>

                <Grid item md={6} sm={12} xs={12} id="contact">
                    <div className="contact-right">
                        <h1 className="sectionTitle"> Contact </h1>
                        <CustomInputField
                            id="name"
                            label="Your Name"
                            className="contact-input"
                            value={name}
                            onChange={handleNameChange}
                            error={name === "" && hasSent}
                            helperText={(name === "" && hasSent) ? "Please provide your name" : `${name.length}/${NAME_MAX_CHARACTERS}`}
                            inputProps={{
                                maxLength: NAME_MAX_CHARACTERS
                            }}
                            disabled={isInTransit}
                        />
                        <br />
                        <CustomInputField
                            id="email"
                            label="Your Email"
                            className="contact-input"
                            value={email}
                            onChange={handleEmailChange}
                            error={email === "" && hasSent}
                            helperText={(email === "" && hasSent) ? "Please provide your email" : `${email.length}/${EMAIL_MAX_CHARACTERS}`}
                            inputProps={{
                                maxLength: EMAIL_MAX_CHARACTERS
                            }}
                            disabled={isInTransit}
                        />
                        <br />
                        <CustomInputField
                            id="message"
                            label="Message"
                            rows={10}
                            variant="outlined"
                            multiline className="contact-input"
                            value={message}
                            onChange={handleMessageChange}
                            error={message === "" && hasSent}
                            helperText={(message === "" && hasSent) ? "Please provide a friendly message :)" : `${message.length}/${MESSAGE_MAX_CHARACTERS}`}
                            inputProps={{
                                maxLength: MESSAGE_MAX_CHARACTERS
                            }}
                            disabled={isInTransit}
                        />
                        <br />
                        <Button
                            variant="contained"
                            color="primary"
                            endIcon={<SendIcon />}
                            className="contact-button"
                            onClick={handleSubmitClick}
                            disabled={isInTransit}
                        >
                            Send
                        </Button>

                        {/* Area reserved for the load status indicator and text*/}
                        <div className="status-container">
                            {loadStatusElement}
                        </div>


                        <Grid container className="contact-info-container">

                            <Grid item sm={6} xs={12}>
                                <div className="contact-info">
                                    <a href="mailto:lior_s99@outlook.com">
                                        <EmailIcon className="contact-info-icon" />
                                        <span> lior_s99@outlook.com </span>
                                    </a>
                                </div>



                            </Grid>
                            <Grid item sm={6} xs={12}>
                                <div className="contact-info">
                                    <a href="tel:403-383-5628">
                                        <PhoneIcon className="contact-info-icon" />
                                        <span> 403-383-5628 </span>
                                    </a>
                                </div>

                            </Grid>
                            <Grid item sm={6} xs={12}>
                                <div className="contact-info">
                                    <a href="https://www.linkedin.com/in/liorsomin/">
                                        <LinkedInIcon className="contact-info-icon" />
                                        <span> /in/liorsomin/ </span>
                                    </a>
                                </div>



                            </Grid>
                            <Grid item sm={6} xs={12}>
                                <div className="contact-info">
                                    <a href="https://github.com/Liors99">
                                        <GitHubIcon className="contact-info-icon" />
                                        <span> https://github.com/Liors99 </span>
                                    </a>
                                </div>
                            </Grid>

                        </Grid>




                    </div>

                </Grid>
            </Grid>

        </div>


    );
}

Contact.propTypes = {
    isSmall: PropTypes.bool.isRequired
};