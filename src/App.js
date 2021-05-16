import logo from './logo.svg';
import './App.css';
import Filters from './Filters';
import { Switch, Route } from 'react-router-dom';
import SpaceX from './SpaceXprograms';
import MainPage from './main';
import FilterData from './FilterData';
import FilterData2 from './FilterData2';
import spacexlogo from "./images/spacex-logo.png"



function App() {
  return (<>
  <div className="header" ><h2><img src={spacexlogo} width="200px" height="30px"></img>Launch Programs</h2></div>
  <Filters />
  
  <Switch>
  <Route path='/spaceX/:year/:launch/:land' component={FilterData2} ></Route>
  <Route path='/' component={SpaceX} ></Route>
  </Switch>
    </>
  );
}

export default App;