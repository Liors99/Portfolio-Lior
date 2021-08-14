import React from 'react';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import "./HeaderStyles.css"
import { HeaderMenu } from './HeaderMenu/HeaderMenu';

export const Header = () => {
    return (
        <AppBar className="Header">
            <Grid container>
                <Grid item lg={6} md={4} sm={4} xs={5}>
                    <p class="title"> Your name </p>
                </Grid>

                <HeaderMenu />

            </Grid>
        </AppBar>

    );
}