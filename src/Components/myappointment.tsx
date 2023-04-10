import React from 'react';
import {useState} from "react";
import backbtn from "../Assests/Images/backtomyappointmentbtn.png";
import Filtericon from "../Assests/Images/filterIcon.png"
import Today from "./Today";
import Old from './Old';
import { useNavigate } from 'react-router-dom';


function Myappointment() {
    const navigation = useNavigate();
    const[today, setToday] = useState(true);
    const[old, setOld] = useState(false);
    
    const handleBackbtn = () : void => {
        navigation("/swastikClinic")
    }

    const handleClickToday = () : void => {
        setToday(true);
        setOld(false);
    }
    const handleClickOld = () : void => {
        setToday(false);
        setOld(true);
    }
    return (
        <div>
            <div className='swastikClinic'>
                <div className='swastikClinicNav'>
                    <div className='swastikClinicNav-1'>
                        <div onClick={handleBackbtn}>
                            <img src={backbtn} style={{width : "30px"}} className='swastikClinicNavhamburger'/>
                        </div>
                        <div className='swastikClinicNav-title'>My Appointment</div>
                        <img src='/search.png' className='swastikClinicNavSearch'/>
                        <img src={Filtericon} className='swastikClinicNavBell'/>
                    </div>
                </div>
                <div className='swastikClinicMenuButton'>
                    <div className='swastikClinicMenuButton1' onClick={handleClickToday}>
                    { today   ? <div className='swastikClinicMenuButtonTitle1'>Today</div> : <div className='swastikClinicMenuButtonTitle1NA'>Today</div>}
                    { today && <div><h1 className="line"></h1></div> }
                    </div>
                    <div className='swastikClinicMenuButton2'  onClick={handleClickOld}>
                    { old ? <div className='swastikClinicMenuButtonTitle2'>Old</div> : <div className='swastikClinicMenuButtonTitle2NA'>Old</div>}
                    { old && <div><h1 className="line"></h1></div>}
                    </div>
                </div>
                <div className='swastikClinic-sub'>
                    {today && <Today />}
                    {old && <> <Old />  </>}
                </div>
            </div>
        </div>
    );
}

export default Myappointment;