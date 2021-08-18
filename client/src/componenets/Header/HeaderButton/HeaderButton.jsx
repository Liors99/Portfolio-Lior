import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import "./HeaderButtonStyles.css"

export const HeaderButton = (props) => {

    const handleClick = () => {
        document.getElementById(props.scroll_id).scrollIntoView(true);
    }

    return (
        <Grid item xs={2}>
            <h3 className="button-container" onClick={handleClick}>
                {props.children}
            </h3>
        </Grid>

    );
}

HeaderButton.propTypes = {
    scroll_id: PropTypes.string.isRequired
};