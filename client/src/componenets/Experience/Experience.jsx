import { useEffect, useState } from 'react';

import { ExperienceEvent } from './ExperienceEvent/ExeperienceEvent';

import Timeline from '@material-ui/lab/Timeline';

import "../../App.css";


export const Experience = () => {

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
                    time={data_event.time}
                    description={data_event.description}
                    type={data_event.type}
                    key={i}
                />);
        });
    }

    return (
        <div className="section">
            <h1 className="sectionTitle"> Experience </h1>

            <Timeline align="alternate">
                {drawEvents()}
            </Timeline>
        </div>
    );
}