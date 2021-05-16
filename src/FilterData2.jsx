// import React from 'react';
import React, { useContext, useEffect, useState } from 'react';
import './FilterData.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { year2 } from './FilterData';
import { useSelector, useDispatch } from 'react-redux';

function FilterData2()
{
    const [data, setdata] = useState([]);
    const { year,launch, land } = useParams()    

    const yearValue = useSelector((state)=>state.changeYear);
    const launchValue = useSelector((state)=>state.changeLaunch);
    const landValue = useSelector((state)=>state.changeLand);
    
    
        useEffect(()=>{ 
        async function getLaunchData(){

                if(yearValue=="allYear" && launchValue=="allLaunch" && landValue=="allLand")
                {
                    const data = await axios.get(`https://api.spacexdata.com/v3/launches?limit=100`)
                    setdata([data]);
                }
                else if(yearValue!="allYear" && launchValue!="allLaunch" && landValue!="allLand")
                {
                    const data = await axios.get(`https://api.spacexdata.com/v3/launches?limit=100&launch_year=${yearValue}&launch_success=${launchValue}&land_success=${landValue}`);
                    setdata([data]);
                }
                else if(yearValue!="allYear" && launchValue!="allLaunch")
                {
                    const data = await axios.get(`https://api.spacexdata.com/v3/launches?limit=100&launch_year=${yearValue}&launch_success=${launchValue}`);
                    setdata([data]);
                }
                else if(yearValue!="allYear" && landValue!="allLand")
                {
                    const data = await axios.get(`https://api.spacexdata.com/v3/launches?limit=100&launch_year=${yearValue}&land_success=${landValue}`);
                    setdata([data]);
                }
                else if(launchValue!="allLaunch" && landValue!="allLand")
                {
                    const data = await axios.get(`https://api.spacexdata.com/v3/launches?limit=100&launch_success=${launchValue}&land_success=${landValue}`);
                    setdata([data]);
                }
                else if(yearValue!="allYear")
                {
                    const data = await axios.get(`https://api.spacexdata.com/v3/launches?limit=100&launch_year=${yearValue}`);
                    setdata([data]);

                }
                else if(launchValue!="allLaunch")
                {
                    const data = await axios.get(`https://api.spacexdata.com/v3/launches?limit=100&launch_success=${launchValue}`);
                    setdata([data]);
                }
                else if(landValue!="allLand")
                {
                    const data = await axios.get(`https://api.spacexdata.com/v3/launches?limit=100&land_success=${landValue}`);
                    setdata([data]);
                }        
        }
        getLaunchData();
    })
    return(<>
    <div className="section">
        {data.map((val,indx)=>{
            return(val.data.map((val2,indx2)=>{
                return(<><div className="card">
                <div className="img-section">
                    <img src={val2.links.mission_patch_small} alt=""/>
                </div>
                <div className="content-section">
                    <h3>{val2.mission_name} #{val2.flight_number}</h3>
                    <p><span>Mission Ids:</span> {val2.mission_id.map((val3, indx3)=>{
                        return(<><li>{val3}</li></>)
                    })} </p>
                    <p><span>Launch Year:</span>{val2.launch_year}</p>
                    <p><span>Successful Launch:{val2.launch_success === true? "true" : "false"}</span></p>
                    <p><span>Successful landing:{val2.rocket.first_stage.cores[0].land_success == true? "true" : val2.rocket.first_stage.cores[0].land_success == null? "null":"false"}</span></p>
                </div>
            </div></>)
            }))
        })}
    </div>
    </>)
}

export default FilterData2;