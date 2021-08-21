import PropTypes from 'prop-types';

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
import Radio from '@material-ui/core/Radio';
import { withStyles } from '@material-ui/core/styles';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

import LanguageIcon from '@material-ui/icons/Language';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';


const ProjectRadio = withStyles({
    root: {
        color: "#324683",
        '&$checked': {
            color: "#324683",
        },
    },
    checked: {},
})((props) => <Radio color="default" {...props} />);

export const Projects = (props) => {

    const [projects, setProjects] = useState([]);
    const [selectedProjects, setSelectedProjects] = useState('personal');

    useEffect(() => {
        fetch(`./Information/Projects-${selectedProjects}.json`)
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setProjects(data);
            })
    }, [selectedProjects]);




    const handleChange = (event) => {
        setSelectedProjects(event.target.value);
    };

    const drawProjects = () => {
        return projects.map((project, i) => {
            return (<Grid item xs={12} sm={6} md={4} lg={3} key={i}>
                <Card className="project">
                    <CardMedia
                        image={"/Assets/Projects/" + project.img}
                        style={{ height: 0, paddingTop: '56.25%' }}
                    />

                    <CardContent>
                        <div className="descriptionStyle">
                            <Typography gutterBottom variant="h5" component="h2">
                                {project.name}
                            </Typography>
                            <div className={"skillTags"}>
                                {project.languages.map((language, i) => { return (<Chip label={language} className="tag" key={i} />); })}
                            </div>
                            <Typography variant="body2" color="textSecondary" component="p">

                                {project.description}

                            </Typography>

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
                <div className="project-button">
                    <FormControl component="fieldset">
                        <RadioGroup row={!props.isSmall}>
                            <FormControlLabel
                                control={<ProjectRadio />}
                                checked={selectedProjects === 'personal'}
                                onChange={handleChange}
                                value="personal"
                                label="Personal Projects"
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                control={<ProjectRadio />}
                                checked={selectedProjects === 'research'}
                                onChange={handleChange}
                                value="research"
                                label="Research Projects"
                                labelPlacement="end"
                            />
                        </RadioGroup>

                    </FormControl>
                </div>


                <Grid container spacing={4}>
                    {drawProjects()}
                </Grid>
            </div>
        </div>);
}

Projects.propTypes = {
    isSmall: PropTypes.bool.isRequired
};