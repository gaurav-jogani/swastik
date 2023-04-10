import React from "react";
import Carousel from "./Carousel";
import Closeotp from "../Assests/Images/closeotp.png";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import facilityImage from '../Assests/Images/drMahesh.png'

interface Props {
  toggleAnotherComponent: () => void;
}
const Appointment : React.FC<Props> = ({ toggleAnotherComponent })=> {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () : void => setOpen(true);
  const handleClose = () : void => setOpen(false);
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    innerHeight : 500,
    boxShadow: 24,
  };
  const DrAvailability: {
    imgSrc: string;
    drName: string;
    designation: string;
    timing: string;
  }[] = [
      {
        imgSrc: facilityImage,
        drName: "Dr. Alfredo",
        designation: "Cardiologist",
        timing: "6:00 to 8:30 PM",
      },
      {
        imgSrc: "/drMahesh.png",
        drName: "Dr. Tiana",
        designation: "Cardiologist",
        timing: "6:00 to 8:30 PM",
      },
      {
        imgSrc: "/drMahesh.png",
        drName: "Dr. Jack",
        designation: "Cardiologist",
        timing: "6:00 to 8:30 PM",
      },
    ];
  const Imgdata: {
    id: Number;
    imgSrc: string;
  }[] = [
      {
        id: 1,
        imgSrc: "/facilityImage.png",
      },
      {
        id: 2,
        imgSrc: "/facilityImage.png",
      },
      {
        id: 3,
        imgSrc: "/facilityImage.png",
      },
    ];
    const handleConfirm = () : void =>{
      toggleAnotherComponent();
    }
  return (
    <div>
      <div className="phoneAppointment">
        <div style={{ fontWeight: "600" }}>Book Your Appointment</div>
        <div className="phonenumberinput">
          <div className="Phoneinput">
            <input type="text" placeholder="Phone Number" />
          </div>
          <div className="Viewbtn">
            <button onClick={handleOpen} type="button">Next</button>
          </div>
        </div>
      </div>
      <div className="bookAvailability">
        <div className="todayavail">Today Availability</div>
        <div>
          {DrAvailability?.map((data, index) => {
            return (
              <div className="arrayavail1">
                <div key={index} className="imgdesign">
                  <img src={data.imgSrc} />
                </div>
                <div className="namedesig">
                  <div className="drnamedeign">{data.drName}</div>
                  <div className="drdesign">{data.designation}</div>
                </div>
                <div className="apptiming">
                  <div className="drdesign">Time</div>
                  <div className="drTime">{data.timing}</div>
                </div>
              </div>
            );
          })}
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="otp-container">
              <div className="verifyotp">
                <div className="otpverifytext">OTP Verification</div>
                <button onClick={handleClose} className="crossbtn" type="button" >
                  <img src={Closeotp} />
                </button>
              </div>
              <div className="bottomotpcontainer">
                <div className="headotp">Enter Your Verification code (OTP) Sent to your Mobile number.</div>
                <label htmlFor="enterotp">Enter Your OTP</label>
                <div className="otp-input-container">
                  <input type="number" className="otp-input" maxLength={1} />
                  <input type="number" className="otp-input" maxLength = {1} />
                  <input type="number" className="otp-input" maxLength = {1} />
                  <input type="number" className="otp-input" maxLength = {1} />
                </div>
              </div>
              <div style={{marginTop:"8%"}} className="Viewbtn">
                <button onClick={handleConfirm} className="confrnbtn">Confirm</button>
              </div>
              <div className="resendotp">
                <button type="button">Resend your OTP in </button>
                <span style={{color :"#07989D"}}>00:00</span>
              </div>
            </div>
          </Box>
      </Modal>
      </div>
      <div className="Facility">
        <div>Our Facility</div>
        <div className="facilityoffice">
          <Carousel data={Imgdata} />
        </div>
      </div>
    </div>
  );
};

export default Appointment;
