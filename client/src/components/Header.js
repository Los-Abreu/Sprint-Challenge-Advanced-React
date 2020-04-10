import React from 'react';
import {useDarkMode} from '../hooks/useDarkMode';

const Header = () => {
    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };
    return(
        <nav>
            <div className='darkmodetoggle'>
                <div onClick={toggleMode}
                className={darkMode ? 'toggle toggled' : 'toggle'}
                />
            </div>
        </nav>
    )
}

export default Header;