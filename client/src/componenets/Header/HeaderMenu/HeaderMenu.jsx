import React, { useState, useEffect } from 'react';
import { HeaderButton } from './../HeaderButton/HeaderButton';
import Grid from '@material-ui/core/Grid';
import { HeaderMenuButton } from './HeaderMenuButton/HeaderMenuButton';


export const HeaderMenu = (props) => {
    const [isWindowSmall, setIsWindowSmall] = useState(false);

    //Add an event listener to the window
    useEffect(() => {

        //Gets called whenever the window is resized, checks for the window size and closes the sidebars if the length exceeds
        const resize = () => {
            if (window.innerWidth >= 960) {
                setIsWindowSmall(false);
            }
            else {
                setIsWindowSmall(true);
            }

        }

        window.addEventListener("resize", resize);
        resize();

        return () => {
            window.removeEventListener("resize", resize);
        }
    }, []);


    const drawMenu = () => {
        if (!isWindowSmall) {
            return (
                <Grid container>
                    <Grid item xs={2}> </Grid>
                    <HeaderButton> Home </HeaderButton>
                    <HeaderButton> Experience </HeaderButton>
                    <HeaderButton> Skills </HeaderButton>
                    <HeaderButton> Projects </HeaderButton>
                    <HeaderButton> Contact </HeaderButton>
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