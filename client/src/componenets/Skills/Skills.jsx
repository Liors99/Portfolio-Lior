import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import "../../App.css";
import "./SkillsStyles.css";

const AllSkils = ["HTML", "CSS", "Javascript", "C", "C++", "Python", "Java", "C#"]


export const Skills = (props) => {

    const drawSkills = () => {
        return AllSkils.map((skill) => { return(
        <Grid item xs = {6} sm = {4} md = {3} lg = {2}>  
            <Chip label={skill} className = "skill"/>
        </Grid>);
        });
    }

    return (
        <div className="section">
                <h1 className = "skillsTitle">Skills</h1>
            <div className = "skillContainer">
                <Grid container spacing = {1}>
                    {drawSkills()}
                </Grid>
            </div>
        </div>
    );
}