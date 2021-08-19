import PropTypes from 'prop-types';

import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';

import "./ExperienceEventStyles.css"

export const ExperienceEvent = (props) => {

    const drawIcon = () => {
        let icon = undefined;

        switch (props.type) {
            case "education":
                icon = <SchoolIcon />;
                break;
            case "work":
                icon = <WorkIcon />;
                break;
            default:
                icon = <WorkIcon />;
                break;
        }

        return icon;


    }

    return (
        <TimelineItem>
            <TimelineOppositeContent style={!props.isAlternate ? { flex: 0.1 } : {}}>
                <Typography variant="body2" color="textPrimary">
                    {props.time}
                </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot className="event-icon">
                    {drawIcon()}
                </TimelineDot>
                {!props.isLast ? <TimelineConnector /> : <div></div>}
            </TimelineSeparator>
            <TimelineContent className="event-content">
                <Paper elevation={3}>
                    <h2>
                        {props.name}
                    </h2>
                    <h3>
                        {props.company}
                    </h3>
                    <ul>
                        {props.description.map((desc, i) => { return (<li key={i}> {desc}</li>); })}
                    </ul>
                </Paper>
            </TimelineContent>
        </TimelineItem>
    );
}

ExperienceEvent.propTypes = {
    time: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    description: PropTypes.array,
    type: PropTypes.string.isRequired,
    isLast: PropTypes.bool.isRequired,
    isAlternate: PropTypes.bool.isRequired
};