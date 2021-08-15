import Grid from '@material-ui/core/Grid';
import "./HeaderButtonStyles.css"

export const HeaderButton = (props) => {
    return (
        <Grid item xs={2}>
            <h3 className="button-container">
                {props.children}
            </h3>
        </Grid>

    );
}