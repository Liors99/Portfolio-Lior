import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import { useEffect, useState } from 'react';
import "../../App.css";
import "./SkillsStyles.css";

//const AllSkils = ["HTML", "CSS", "Javascript", "C", "C++", "Python", "Java", "C#"]


export const Skills = (props) => {

    const [skills, setSkills] = useState([]);
        useEffect(() => {
            fetch("./Information/Skills.json")
                .then((res) => {
                    return res.json()
                })
                .then((data) => {
                    setSkills(data);
                })
        }, []);

    const drawSkills = () => {
        return skills.map((skill, i) => {
            return (
                <Grid item xs={6} sm={4} md={3} lg={2} key={i}>
                    <Chip label={skill} className="skill" />
                </Grid>);
        });
    }

    return (
        <div className="section" id="skills">
            <h1 className="sectionTitle">Skills</h1>
            <div className="skillContainer">
                <Grid container spacing={1}>
                    {drawSkills()}
                </Grid>
            </div>
        </div>


    );
}