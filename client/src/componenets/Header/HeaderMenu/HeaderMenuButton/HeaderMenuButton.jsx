import { useState } from 'react';

import MenuIcon from '@material-ui/icons/Menu';
import { HeaderSidebar } from '../../HeaderSidebar/HeaderSidebar';
import "./HeaderMenuButtonStyles.css";

export const HeaderMenuButton = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <h3 className="btn" onClick={() => { setIsOpen(prev => !prev) }}>
                <MenuIcon />
            </h3>
            <HeaderSidebar isOpen={isOpen} onOpen={() => { setIsOpen(true) }} onClose={() => setIsOpen(false)} />
        </div>


    );
}