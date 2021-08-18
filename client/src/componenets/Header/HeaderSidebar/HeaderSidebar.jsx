import PropTypes from 'prop-types';

import { SwipeableDrawer, makeStyles } from '@material-ui/core';

import "./HeaderSidebarStyles.css";

const useStyles = makeStyles({
    paper: {
        background: '#ededed',
        width: "200px",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#3F59A8"
    }
});

export const HeaderSidebar = (props) => {
    const styles = useStyles();


    const handleButtonClick = (id) => {
        props.onClose();
        document.getElementById(id).scrollIntoView(true);
    }

    return (
        <SwipeableDrawer
            anchor={'right'}
            open={props.isOpen}
            swipeAreaWidth={60}
            classes={{ paper: styles.paper }}
            onOpen={() => { props.onOpen() }}
            onClose={() => { props.onClose() }}

            SwipeAreaProps={{ className: "PrivateSwipeArea-root-8 PrivateSwipeArea-anchorRight-10 swipe-area" }}
            style={{ zIndex: 1 }}

        >
            <div className="sidebar-container">
                <h1 onClick={() => handleButtonClick("home")}> Home </h1>
                <h1 onClick={() => handleButtonClick("experience")}> Experience </h1>
                <h1 onClick={() => handleButtonClick("skills")}> Skills </h1>
                <h1 onClick={() => handleButtonClick("projects")}> Projects </h1>
                <h1 onClick={() => handleButtonClick("contact")}> Contact </h1>
            </div>

        </SwipeableDrawer>
    );
}

HeaderSidebar.propTypes = {
    isOpen: PropTypes.bool.isRequired,
};