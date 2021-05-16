// import React from 'react';
import React, { createContext, useEffect, useState } from 'react';
import './FilterData.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function FilterData()
{
    const [data, setdata] = useState([]);
    const { yearValue } = useParams();
    
    const [ url, setUrl ] = useState(`https://api.spacexdata.com/v3/launches?limit=100&launch_year=${yearValue}`);

    useEffect(()=>{
        console.log("params:-"+yearValue);
        async function getData(){
            const data = await axios.get(url);
            // console.log("sushant:-"+data.data[18].launch_success);
            setdata([data]);
        }
        getData();
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
export default FilterData;