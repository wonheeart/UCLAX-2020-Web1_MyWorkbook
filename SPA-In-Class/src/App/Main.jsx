import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './Pages/Home.jsx';
import Services from './Pages/Services.jsx';
import Contact from './Pages/Contact.jsx';
import Login from './Pages/Login.jsx';

const Main = () => {
    return (
        <Mainstyled>
            <BrowserRouter>
                    <Switch>
                        <Route path='/Login' component={ Login } />
                        <Route path='/Contact' component={ Contact } />
                        <Route path='/Services' component={ Services } />
                        <Route path='/' component={ Home } />
                    </Switch>
                </BrowserRouter>
        </Mainstyled>
    );
}

export default Main;

const Mainstyled = styled.main`
    padding: 50px;

    h1 { 
        font-size: 75px;
    }
`;