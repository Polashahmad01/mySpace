import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Toolbar.css';
import HomeIcon from '../../../static/image/icon/house-black-silhouette-without-door.png';
import MissionIcon from '../../../static/image/icon/rocket-ship.png';
import NewsEventsIcon from '../../../static/image/icon/news.png';
import AboutIcon from '../../../static/image/icon/icons8-about-512.png';
import ContactIcon from '../../../static/image/icon/phone-contact.png';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';


const Toolbar = (props) => {
    const mouseCursor = useRef(null);

    useEffect(() => {
        window.addEventListener('mousemove', cursor);
    }, []);

    const cursor = (e) => {
        mouseCursor.current.style.top = e.pageY + "px";
        mouseCursor.current.style.left = e.pageX + "px";
    }

    

    return (
        <header className="toolbar">
            <div className="container">
                <div ref={mouseCursor} className="cursor" />
                <nav className="toolbar__navigation">
                    <div className="toolbar__toggle-button">
                        <DrawerToggleButton click={props.drawerToggleClickHandler} />
                    </div>
                    <div className="toolbar__logo">
                        <Link to="/"><p>mySpace</p></Link>
                    </div>
                    <div className="spacer"/>
                    <div className="toolbar__navigation-items">
                        <ul>
                            <li>
                                <Link 
                                    className="toolbar__link" 
                                    to="/"
                                > <img 
                                        src={HomeIcon} 
                                        alt="mySpace-home-icon" 
                                        className="toolbar__navigation-icons myspace-homeicon" 
                                    />
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    className="toolbar__link" 
                                    to="/mission"
                                > <img 
                                        src={MissionIcon} 
                                        alt="mySpace-mission-icon" 
                                        className="toolbar__navigation-icons"
                                    /> 
                                    Mission
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    className="toolbar__link" 
                                    to="newsevents"
                                > <img 
                                        src={NewsEventsIcon} 
                                        alt="mySpace-news-events-icon" 
                                        className="toolbar__navigation-icons"
                                    /> 
                                    News & Events
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    className="toolbar__link" 
                                    to="/about"
                                > <img 
                                        src={AboutIcon} 
                                        alt="mySpace-about-icon" 
                                        className="toolbar__navigation-icons"
                                    /> 
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    className="toolbar__link" 
                                    to="/contact"
                                > <img 
                                        src={ContactIcon} 
                                        alt="mySpace-about-icon" 
                                        className="toolbar__navigation-icons" 
                                    /> 
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Toolbar;