import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import "../../App.css";

const AllSkils = ["HTML", "CSS", "Javascript", "C", "C++", "Python", "Java", "C#"]


export const Skills = (props) => {

    const drawSkills = () => {
        return AllSkils.map((skill) => { return(
        <Grid item xs = {6} sm = {4} md = {3} lg = {2}>  
            <Chip label={skill}/>
        </Grid>);
        });
    }

    return (
        <div className="section">
            <Grid container spacing = {2}>
                <Grid item xs = {4}>

                </Grid>
                <Grid item xs = {4} container spacing = {2}>
                    {drawSkills()};
                </Grid>
            </Grid>
        </div>
    );
}