import React from 'react';
import Filters from './Filters';
import './main.css';
import SpaceX from './SpaceXprograms';
import { Switch, Route } from 'react-router-dom';
function MainPage()
{
    
    return(<>
    <div className="main">
        <Filters/>
        <SpaceX/>
    </div>
    </>)
}

export default MainPage;