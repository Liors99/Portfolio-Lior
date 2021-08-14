import Chip from '@material-ui/core/Chip';

import "../../App.css";

const AllSkils = ["HTML", "CSS", "Javascript"]


export const Skills = (props) => {

    const drawSkills = () => {
        return AllSkils.map((skill) => { return <Chip label={skill} /> });
    }

    return (
        <div className="section">
            {drawSkills()}
        </div>
    );
}