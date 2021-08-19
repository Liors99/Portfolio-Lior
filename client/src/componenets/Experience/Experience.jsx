import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { ExperienceEvent } from './ExperienceEvent/ExeperienceEvent';

import Timeline from '@material-ui/lab/Timeline';

import "../../App.css";


export const Experience = (props) => {

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("./Information/Experience.json")
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setData(data);
            })
    }, []);


    const drawEvents = () => {
        return data.map((data_event, i) => {
            return (
                <ExperienceEvent
                    name={data_event.name}
                    company={data_event.company}
                    time={data_event.time}
                    description={data_event.description}
                    type={data_event.type}
                    key={i}
                    isLast={i === data.length - 1}
                    isAlternate={!props.isSmall}
                />);
        });
    }

    return (
        <div className="section" id="experience">
            <h1 className="sectionTitle"> Experience </h1>

            <Timeline align={(props.isSmall ? "left" : "alternate")}>
                {drawEvents()}
            </Timeline>
        </div>
    );
}

Experience.propTypes = {
    isSmall: PropTypes.bool.isRequired
};