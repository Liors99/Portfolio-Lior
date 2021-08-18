import React from 'react';
import PropTypes from 'prop-types';
import { HeaderButton } from './../HeaderButton/HeaderButton';
import Grid from '@material-ui/core/Grid';
import { HeaderMenuButton } from './HeaderMenuButton/HeaderMenuButton';


export const HeaderMenu = (props) => {
    const drawMenu = () => {
        if (!props.isSmall) {
            return (
                <Grid container>
                    <Grid item xs={2}> </Grid>
                    <HeaderButton scroll_id="home"> Home </HeaderButton>
                    <HeaderButton scroll_id="experience"> Experience </HeaderButton>
                    <HeaderButton scroll_id="skills"> Skills </HeaderButton>
                    <HeaderButton scroll_id="projects"> Projects </HeaderButton>
                    <HeaderButton scroll_id="contact"> Contact </HeaderButton>
                </Grid>
            );
        }
        else {
            return (
                <Grid container >
                    <Grid item xs={10} sm={11}></Grid>
                    <Grid item xs={2} sm={1}>
                        <HeaderMenuButton />
                    </Grid>
                </Grid>
            );
        }
    }

    return (
        <Grid item lg={6} md={8} sm={8} xs={7}>
            {drawMenu()}
        </Grid>

    );

}

HeaderMenu.propTypes = {
    isSmall: PropTypes.bool.isRequired
};