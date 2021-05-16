import React, { useEffect, useState } from 'react';
import './Filters.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { year2006, year2007, year2008, year2009, year2010, year2011, year2012, year2013, year2014, year2015, year2016, year2017, year2018, year2019, year2020, launchTrue, launchFalse, landTrue, landFalse } from './actions/index';

function Filters()
{
    // const [yearValue, setyearValue] = useState();
    // // const [yearData, setyearData] = useState([]);
    // const [launchValue, setlaunchValue] = useState();
    // const [landValue, setlandValue] = useState();

    const yearValue = useSelector((state)=>state.changeYear);
    const launchValue = useSelector((state)=>state.changeLaunch);
    const landValue = useSelector((state)=>state.changeLand);

    const dispatch = useDispatch();

    
    function changeColor(event)
     {
       const id1 = event.target.id;
       var years = document.getElementsByClassName("year");
       if (document.getElementById(id1).style.backgroundColor != "green")
       {
         for(var i=0;i<years.length;i++)
          {
              years[i].style.backgroundColor = "rgb(172, 228, 175)"
              document.getElementById(id1).style.backgroundColor = "green"
          }
       }
       else 
       {
        document.getElementById(id1).style.backgroundColor = "rgb(172, 228, 175)"
       }
     }

     function changeColor2(event)
     {
       const id1 = event.target.id;
       var years = document.getElementsByClassName("launch");
       if (document.getElementById(id1).style.backgroundColor != "green")
       {
         for(var i=0;i<years.length;i++)
          {
              years[i].style.backgroundColor = "rgb(172, 228, 175)"
              document.getElementById(id1).style.backgroundColor = "green"
          }
       }
       else 
       {
        document.getElementById(id1).style.backgroundColor = "rgb(172, 228, 175)"
       }
     }

     function changeColor3(event)
     {
       const id1 = event.target.id;
       var years = document.getElementsByClassName("land");
       if (document.getElementById(id1).style.backgroundColor != "green")
       {
         for(var i=0;i<years.length;i++)
          {
              years[i].style.backgroundColor = "rgb(172, 228, 175)"
              document.getElementById(id1).style.backgroundColor = "green"
          }
       }
       else 
       {
        document.getElementById(id1).style.backgroundColor = "rgb(172, 228, 175)"
       }
     }

    // function myFunc(year)
    // {
    //     setyearValue(year);
    // }
    

    return(<>
    <div className="filter-bar">
        <h3>Filters</h3>
          <p id="year">Launch year</p>
          <hr/>
          <div className="year-filter">
          <Link className="labelYear" id="2006" onClick={()=>dispatch(year2006())}  to={`/spaceX/${yearValue}/${launchValue}/${landValue}`} value="2006"><span className="year" id="y2006" onClick={changeColor}>2006</span></Link>
          <Link className="labelYear" id="2007" onClick={()=>dispatch(year2007())} to={`/spaceX/${yearValue}/${launchValue}/${landValue}`} value="2007"><span className="year" id="y2007" onClick={changeColor}>2007</span></Link>
          <Link className="labelYear" id="2008" onClick={()=>dispatch(year2008())} to={`/spaceX/${yearValue}/${launchValue}/${landValue}`} value="2008"><span className="year" id="y2008" onClick={changeColor}>2008</span></Link>
          <Link className="labelYear" id="2009" onClick={()=>dispatch(year2009())} to={`/spaceX/${yearValue}/${launchValue}/${landValue}`} value="2009"><span className="year" id="y2009" onClick={changeColor}>2009</span></Link>
          <Link className="labelYear" id="2010" onClick={()=>dispatch(year2010())} to={`/spaceX/${yearValue}/${launchValue}/${landValue}`}  value="2010"><span className="year" id="y2010" onClick={changeColor}>2010</span></Link>
          <Link className="labelYear" id="2011" onClick={()=>dispatch(year2011())} to={`/spaceX/${yearValue}/${launchValue}/${landValue}`}  value="2011"><span className="year" id="y2011" onClick={changeColor}>2011</span></Link>
          <Link className="labelYear" id="2012" onClick={()=>dispatch(year2012())} to={`/spaceX/${yearValue}/${launchValue}/${landValue}`}  value="2012"><span className="year" id="y2012" onClick={changeColor}>2012</span></Link>
          <Link className="labelYear" id="2013" onClick={()=>dispatch(year2013())} to={`/spaceX/${yearValue}/${launchValue}/${landValue}`}  value="2013"><span className="year" id="y2013" onClick={changeColor}>2013</span></Link>
          <Link className="labelYear" id="2014" onClick={()=>dispatch(year2014())} to={`/spaceX/${yearValue}/${launchValue}/${landValue}`}  value="2014"><span className="year" id="y2014" onClick={changeColor}>2014</span></Link>
          <Link className="labelYear" id="2015" onClick={()=>dispatch(year2015())} to={`/spaceX/${yearValue}/${launchValue}/${landValue}`}  value="2015"><span className="year" className="year" id="y2015" onClick={changeColor}>2015</span></Link>
          <Link className="labelYear" id="2016" onClick={()=>dispatch(year2016())} to={`/spaceX/${yearValue}/${launchValue}/${landValue}`}  value="2016"><span className="year" id="y2016" onClick={changeColor}>2016</span></Link>
          <Link className="labelYear" id="2017" onClick={()=>dispatch(year2017())} to={`/spaceX/${yearValue}/${launchValue}/${landValue}`}  value="2017"><span className="year" id="y2017" onClick={changeColor}>2017</span></Link>
          <Link className="labelYear" id="2018" onClick={()=>dispatch(year2018())} to={`/spaceX/${yearValue}/${launchValue}/${landValue}`}  value="2018"><span className="year" id="y2018" onClick={changeColor}>2018</span></Link>
          <Link className="labelYear" id="2019" onClick={()=>dispatch(year2019())} to={`/spaceX/${yearValue}/${launchValue}/${landValue}`}  value="2019"><span className="year" id="y2019" onClick={changeColor}>2019</span></Link>
          <Link className="labelYear" id="2020" onClick={()=>dispatch(year2020())} to={`/spaceX/${yearValue}/${launchValue}/${landValue}`}  value="2020"><span className="year" id="y2020" onClick={changeColor}>2020</span></Link>
          <p id="launch">Successful Launch</p>
          <hr/>
          <div className="launch-filter">
          <Link className="label" onClick={()=>dispatch(launchTrue())} to={`/spaceX/${yearValue}/${launchValue}/${landValue}`}><span className="launch" id="launchTrue" onClick={changeColor2}>True</span></Link>
          <Link className="label" onClick={()=>dispatch(launchFalse())} to={`/spaceX/${yearValue}/${launchValue}/${landValue}`}><span className="launch" id="launchFalse" onClick={changeColor2}>False</span></Link>
          </div>
          <p id="landing">Successful landing</p>
          <hr/>
          <div className="land-filter">
          <Link className="label" onClick={()=>dispatch(landTrue())} to={`/spaceX/${yearValue}/${launchValue}/${landValue}`}><span className="land" id="landTrue" onClick={changeColor3}>True</span></Link>
          <Link className="label" onClick={()=>dispatch(landFalse())} to={`/spaceX/${yearValue}/${launchValue}/${landValue}`}><span className="land" id="landFalse" onClick={changeColor3}>False</span></Link>
          </div>
    </div></div>
    </>)
}
export default Filters;