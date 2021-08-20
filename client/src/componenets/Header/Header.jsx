import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import "./HeaderStyles.css"
import { HeaderMenu } from './HeaderMenu/HeaderMenu';

export const Header = (props) => {
    return (
        <AppBar className="Header">
            <Grid container>
                <Grid item lg={6} md={4} sm={4} xs={5}>
                    <h3 className="title" onClick={() => document.getElementById("home").scrollIntoView(true)}> Lior Somin </h3>
                </Grid>

                <HeaderMenu isSmall={props.isSmall} />

            </Grid>
        </AppBar>

    );
}

Header.propTypes = {
    isSmall: PropTypes.bool.isRequired
};