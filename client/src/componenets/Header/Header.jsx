import React from 'react';
import { HeaderButton } from '../HeaderButton/HeaderButton';
import Grid from '@material-ui/core/Grid';
import "./HeaderStyles.css"

export const Header = () => {

    return (
        <div className="Header">
            <Grid container>
                <Grid item lg={6} md={4} sm={2}>
                    <p className="title"> Lior Somin </p>
                </Grid>
                <Grid item lg={6} md={8} sm={10}>
                    <Grid container>
                        <Grid item xs={2}>

                        </Grid>
                        <HeaderButton> Home </HeaderButton>
                        <HeaderButton> Experience </HeaderButton>
                        <HeaderButton> Skills </HeaderButton>
                        <HeaderButton> Projects </HeaderButton>
                        <HeaderButton> Contact </HeaderButton>
                    </Grid>
                </Grid>

            </Grid>
        </div>

    );
}