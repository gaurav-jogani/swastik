import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Appointment from './Appointment';
import Home from './Home';
import LoginAppointment from './LoginAppointment';
import SidebarClose from '../Assests/Images/sidebarclose.png';
import HomeSidebar from '../Assests/Images/homesidebar.png';
import MyappointmentSidebar from '../Assests/Images/myappointment.png';
import RateIcon from '../Assests/Images/rateReviews.png';
import LoginIcon from '../Assests/Images/LoginIcon.png';
import CallIcon from '../Assests/Images/CallIcon.png';
import LocationIcon from '../Assests/Images/LocationIcon.png';
import MapIcon from '../Assests/Images/mapIcon.png';
// import Myappointment from './myappointment';
import { Link } from 'react-router-dom';







const SwastikClinic = () => {
    const nav = useNavigate();
    const handleChange = () => {
        nav('/');
    }
    const[home, setHome] = useState(true);
    const[appointment, setAppointment] = useState(false);
    const[loginAppointment,setLoginAppointment] = useState(false);
    function toggleAnotherComponent() {
      setHome(false);
      setAppointment(false);
      setLoginAppointment((prevState) => !prevState);
    }
    const handleClickHome = () : void => {
      setHome(true);
      setAppointment(false);
    }
    const handleClickAppointment = () : void => {
      setHome(false);
      setAppointment(true);
      // setLoginAppointment((prevState) => !prevState);
    }
    const [showSidebar, setShowSidebar] = useState(false);
    const handleSidebar = () : void => {
      setShowSidebar(!showSidebar);
    }
    const handleCloseSidebar = () : void => {
      setShowSidebar(!showSidebar);
    }
  return (
    
    <div>
      <div className='swastikClinic'>
        <div className={`sidebar ${showSidebar ? 'show' : ''}`}>
            <div onClick={handleCloseSidebar} className='sidebarclosebtn' >
              <h5>Swastic Clinic</h5>
              <img src={SidebarClose} />
            </div>
            <ol>
                <li>
                    <Link to="">
                      <img src={HomeSidebar} />
                      <b>Home</b>
                    </Link>
                </li>
                <li>
                    <Link to="Myappointment" >
                      <img src={MyappointmentSidebar} />
                      <b>My Appointment</b>
                    </Link>
                </li>
                <li>
                    <a href="#" >
                      <img src={RateIcon} />
                      <b>Rate & Reviews</b>
                    </a>
                </li>
                <li>
                    <a href="#" >
                      <img src={LoginIcon} />
                      <b>Login</b>
                    </a>
                </li>
                <li style={{background : "#07989D"}}>
                    <a style={{color : "white"}} href='#' >
                      <img src={CallIcon} />
                      <b>1800-00-12345</b>
                    </a>
                </li>
            </ol>
            <div className='LocationBox'>
                <div className='locationContent'>
                    <div>
                      <img src={LocationIcon} />
                    </div>
                    <div className='locationTop'>
                        <b>Location</b>
                        <p>Near tirupati bajaj show room, Tansen road,Gwalior (M.P)</p>
                    </div>
                </div>
                <div>
                    <img src={MapIcon} />
                </div>
            </div>
        </div>
        <div className='swastikClinicNav'>
          <div className='swastikClinicNav-1'>
            <div onClick={handleSidebar}>
              <img src='/hamburger.png' className='swastikClinicNavhamburger'/>
            </div>
            <div className='swastikClinicNav-title'>Swastik Clinic</div>
            <img src='/search.png' className='swastikClinicNavSearch'/>
            <img src='/bell.png' className='swastikClinicNavBell'/>
          </div>
          <div className='swastikClinicMenuButton'>
            <div className='swastikClinicMenuButton1' onClick={handleClickHome}>
              {(home || !loginAppointment) && (home || !appointment)   ? <div className='swastikClinicMenuButtonTitle1'>Home</div> : <div className='swastikClinicMenuButtonTitle1NA'>Home</div>}
              {(home || !loginAppointment ) && (home || !appointment) ? <div><h1 className="line"></h1></div> :"" }
            </div>
            <div className='swastikClinicMenuButton2' onClick={handleClickAppointment}>
              {appointment || loginAppointment || !home ? <div className='swastikClinicMenuButtonTitle2'>Appointment</div> : <div className='swastikClinicMenuButtonTitle2NA'>Appointment</div>}
              {(appointment || loginAppointment || !home ) && <div><h1 className="line"></h1></div>}
            </div>
          </div>
        </div>
        <div className='swastikClinic-sub'>
          {home && <Home />}
          {appointment && <>
            <Appointment toggleAnotherComponent={toggleAnotherComponent} /> 
          </>}
            {loginAppointment && <LoginAppointment /> }
        </div>
      </div>
    </div>
  )
}

export default SwastikClinic