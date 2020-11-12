import React from 'react';
import { Link } from 'react-router-dom';

import './SideDrawer.css';
import HomeIcon from '../../../static/image/icon/house-black-silhouette-without-door.png';
import MissionIcon from '../../../static/image/icon/rocket-ship.png';
import NewsEventsIcon from '../../../static/image/icon/news.png';
import AboutIcon from '../../../static/image/icon/icons8-about-512.png';
import ContactIcon from '../../../static/image/icon/phone-contact.png';

const sideDrawer = props => {
    let drawerClass = "side-drawer"
    if(props.show) {
        drawerClass = "side-drawer open"
    }

    return (
        <nav className={drawerClass}>
            <ul>
                <li>
                    <Link 
                        className="toolbar__link" 
                        to="/"
                    > <img 
                            src={HomeIcon} 
                            alt="mySpace-home-icon" 
                            className="toolbar__navigation-icons" 
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
    </nav>
    );
}
export default sideDrawer;