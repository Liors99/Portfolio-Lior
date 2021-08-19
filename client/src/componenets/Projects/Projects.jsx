import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import { useEffect, useState } from 'react';
import "../../App.css";
import "./ProjectStyles.css";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import LanguageIcon from '@material-ui/icons/Language';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';


/*
const AllProjects = [
    {img: "Proj1.png", name: "Bomberman", description:"The bombs chase you..... BIG BRAIN", languages:["JavaScript","React"], GH: "https://github.com/Liors99/Portfolio", YT: " "}, 
    {}];
*/

export const Projects = (props) => {

    const [projects, setProjects] = useState([]);
        useEffect(() => {
            fetch("./Information/Projects.json")
                .then((res) => {
                    return res.json()
                })
                .then((data) => {
                    setProjects(data);
                })
        }, []);

    const drawProjects = () => {
        return projects.map((project, i) => {
            return (<Grid item xs={6} sm={4} md={3} lg={3} key={i}>
                <Card className="project">
                    <CardActionArea>
                        <div className = "ImgWrapper">
                            <img src={"./Assets/Projects/" + project.img } alt=""/> 
                        </div>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {project.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                <div className="descriptionStyle">
                                    {project.description}
                                </div>
                            </Typography>
                            <div className="skillTags">
                                {project.languages.map((language, i) => { return (<Chip label={language} className="tag"/>);})}
                            </div>             
                        </CardContent>
                        <IconButton aria-label="Github">
                            {(project.GH !== "" ? <a href={project.GH}> <GitHubIcon className ="iconGHStyle" /> </a> : <div></div>)}
                        </IconButton>
                        <IconButton aria-label="Youtube">
                            {(project.YT !== "" ? <a href={project.YT}> <YouTubeIcon className="iconYTStyle" /> </a> : <div></div>)}
                        </IconButton>
                        <IconButton aria-label="website">
                            {(project.web !== "" ? <a href={project.web}> <LanguageIcon className="iconWebStyle" /> </a> : <div></div>)}
                        </IconButton>
                    </CardActionArea>
                </Card>
            </Grid>)
        });
    }

    return(
        <div className="section" id="projects">
            <h1 className="sectionTitle">Projects</h1>
            <div className="projectContainer">
                <Grid container spacing={4}>
                    {drawProjects()}
                </Grid>
            </div>
        </div>);
}