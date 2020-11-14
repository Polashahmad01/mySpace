import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Home from './Navigation/Home';
import Mission from './Navigation/Mission';
import NewsEvents from './Navigation/NewsEvents';
import About from './Navigation/About';
import Contact from './Navigation/Contact';
import Navbar from './Navbar/Navbar';


class  App extends Component {
    


    render () {

        return (
            <BrowserRouter>
                <div>
                    <Navbar />
                </div>
                <div>
                    <Route path='/' exact component={Home} />
                    <Route path='/mission' exact component={Mission} />
                    <Route path='/newsevents' exact component={NewsEvents} />
                    <Route path='/about' exact component={About} />
                    <Route path='/contact' exact component={Contact} />
                </div>
            </BrowserRouter>
        );
    }
};

export default App;