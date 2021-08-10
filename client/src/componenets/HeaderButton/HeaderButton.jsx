import Grid from '@material-ui/core/Grid';
import "./HeaderButtonStyles.css"

export const HeaderButton = (props) => {
    return (
        <Grid item xs={2}>
            <p className="button-container">
                {props.children}
            </p>
        </Grid>

    );
}