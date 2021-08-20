import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import { useEffect, useState } from 'react';
import "../../App.css";
import "./ProjectStyles.css";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';

import LanguageIcon from '@material-ui/icons/Language';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { CardMedia } from '@material-ui/core';


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
            return (<Grid item xs={12} sm={6} md={4} lg={3} key={i}>
                <Card className="project">
                    <CardMedia
                        image={"/Assets/Projects/" + project.img}
                        style={{ height: 0, paddingTop: '56.25%' }}
                    />

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {project.name}
                        </Typography>
                        <div className="descriptionStyle">
                            <Typography variant="body2" color="textSecondary" component="p">

                                {project.description}

                            </Typography>
                            <div className={"skillTags"}>
                                {project.languages.map((language, i) => { return (<Chip label={language} className="tag" key={i} />); })}
                            </div>
                        </div>

                    </CardContent>

                    <CardActions>

                        {(project.GH !== "" ? <IconButton aria-label="Github" ><a href={project.GH}> <GitHubIcon className="iconGHStyle" /> </a> </IconButton> : <div></div>)}


                        {(project.YT !== "" ? <IconButton aria-label="Youtube"> <a href={project.YT}> <YouTubeIcon className="iconYTStyle" /> </a> </IconButton> : <div></div>)}


                        {(project.web !== "" ? <IconButton aria-label="website"> <a href={project.web}> <LanguageIcon className="iconWebStyle" /> </a> </IconButton> : <div></div>)}


                    </CardActions>

                </Card>
            </Grid >)
        });
    }

    return (
        <div className="section" id="projects">
            <h1 className="sectionTitle">Projects</h1>
            <div className="projectContainer">
                <Grid container spacing={4}>
                    {drawProjects()}
                </Grid>
            </div>
        </div>);
}