import React , { useState } from 'react';
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Close2 from '../Assests/Images/close2.png';
import AnimatedDr from "../Assests/Images/animatedDr.png";
import { useNavigate } from "react-router-dom";


type Gender = 'male' | 'female' | 'nonbinary';
type Shift = 'Afternoon' | 'Evening';
type Doctor = "Dr. Vijay Garg" | "Dr. Nidhi Garg";
type Payment = "Cash" | "Online";
interface Props {
    onChange: (gender: Gender) => void;
    label:string;
    age : number;
}

function LoginAppointment() {
    const nav = useNavigate();
    const handleDirectHomePage = () : void => {
        nav('/')
    }


    const [selectedGender, setSelectedGender] = useState<Gender>('male');
    const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedGender(event.target.value as Gender);
        // onChange(event.target.value as Gender);
    };
    const [selectedShift, setSelectedShift] = useState<Shift>('Afternoon');
    const handleShiftChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedShift(event.target.value as Shift);
        // onChange(event.target.value as Shift);
    };
    const [selectedDoctor, setSelectedDoctor] = useState<Doctor>('Dr. Vijay Garg');
    const handleDoctorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedDoctor(event.target.value as Doctor);
        // onChange(event.target.value as Shift);
    };
    const [selectedPayment, setSelectedPayment] = useState<Payment>('Online');
    const handlePaymentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedPayment(event.target.value as Payment);
        // onChange(event.target.value as Shift);
    };
    const [selectedAge, setSelectedAge] = useState<number | null>(null);
    const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) : void  => {
        setSelectedAge(Number(event.target.value));
        // onChange(newAge);
    };
    const [bookAppointment, setbookAppointment] = React.useState(false);
    const handleCnfrmBookAppointment = () : void =>{
        setbookAppointment(true);
    }
    const handleCloseCnfrmBookAppointment = () : void => setbookAppointment(false);

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 300,
        bgcolor: 'background.paper',
        borderRadius : "25px",
        boxShadow: 24,
        px:3,
        pb:2,
        pt:2
    };
    return (
        <div>
            <div className="LoginAppointment">
                <div style={{ fontWeight: "600",marginBottom : "15px" }}>Book Your Appointment</div>
                <div className="patientinput">
                    <input type="text" placeholder="Patient name" />
                </div>
                <div className='genderDiv'>
                    <div className='headGender'>Gender</div>
                    <div className='selectiongender'>
                        <label>
                            <input
                            type="radio"
                            value="male"
                            checked={selectedGender === 'male'}
                            onChange={handleGenderChange}
                            />
                            Male
                        </label>
                        <label>
                            <input
                            type="radio"
                            value="female"
                            checked={selectedGender === 'female'}
                            onChange={handleGenderChange}
                            />
                            Female
                        </label>
                        <label>
                            <input
                            type="radio"
                            value="nonbinary"
                            checked={selectedGender === 'nonbinary'}
                            onChange={handleGenderChange}
                            />
                            Others
                        </label>
                    </div>
                </div>
            </div>
            <div className="emailinput">
                <input type="text" placeholder="Email Id (Optional)" />
            </div>
            <div className='Ageselect'>
                <TextField 
                    id="outlined-basic" 
                    label="Age" 
                    size="small" 
                    type="number" 
                    value={selectedAge ?? ""}  
                    onChange={handleAgeChange}
                    sx={
                        {
                            fontSize: "10px", width: "100px",
                        }
                    } 
                    InputProps={{ endAdornment: (<InputAdornment position="end">Years</InputAdornment>), inputProps: { maxLength: 2 }}} 
                />
                <TextField 
                    id="outlined-basic" 
                    label="Patient-Height" 
                    size="small"
                    sx={
                        {
                            fontSize: "10px", width: "140px",
                        }
                    }
                    // InputProps={{endAdornment: (<InputAdornment position="end">Inch</InputAdornment>),}} 
                />
            </div>
            <div className="clinicdropdown">
                <select id="my-select">
                    <option value="option0" selected>Clinic Branch</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
            </div>
            <div className='selectShifts'>
                <div className='headshift'>Select Shift</div>
                <div className='selectedshift'>
                    <label>
                        <input
                        type="radio"
                        value="Afternoon"
                        checked={selectedShift === 'Afternoon'}
                        onChange={handleShiftChange}
                        />
                        Afternoon
                    </label>
                    <label>
                        <input
                        type="radio"
                        value="Evening"
                        checked={selectedShift === 'Evening'}
                        onChange={handleShiftChange}
                        />
                        Evening
                    </label>
                </div>
            </div>
            <div className='selectShifts'>
                <div className='headshift'>Select Doctor</div>
                <div className='selectedshift'>
                    <label>
                        <input
                        type="radio"
                        value="Dr. Vijay Garg"
                        checked={selectedDoctor === 'Dr. Vijay Garg'}
                        onChange={handleDoctorChange}
                        />
                        Dr. Vijay Garg
                    </label>
                    <label>
                        <input
                        type="radio"
                        value="Dr. Nidhi Garg"
                        checked={selectedDoctor === 'Dr. Nidhi Garg'}
                        onChange={handleDoctorChange}
                        />
                        Dr. Nidhi Garg
                    </label>
                </div>
            </div>
            <div className=''>
                <div>Date</div>
            </div>
            <div className='selectShifts'>
                <div className='headshift'>Payment Mode</div>
                <div className='selectedshift'>
                    <label>
                        <input
                        type="radio"
                        value="Cash"
                        checked={selectedPayment === 'Cash'}
                        onChange={handlePaymentChange}
                        />
                        Cash
                    </label>
                    <label>
                        <input
                        type="radio"
                        value="Online"
                        checked={selectedPayment === 'Online'}
                        onChange={handlePaymentChange}
                        />
                        Online
                    </label>
                </div>
            </div>
            <div className='appbtn'>
              <button onClick={handleCnfrmBookAppointment} type='button'>Book Appointment</button>
            </div>
            <Modal
                open={bookAppointment}
                onClose={handleCloseCnfrmBookAppointment}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div>
                        <div onClick={handleDirectHomePage} className='close2ndbutton'> 
                            <img src={Close2} />
                        </div>
                        <div className='bookAppPopup'>
                            <div className='bookAppPopupContent'>You have <br /> successfully booked your appointment.</div>
                        </div>
                        <Typography id="modal-modal-title" sx={{ mt: 2 }}>
                            <div className='bookcontentinfo'>Appointment No. : 12</div>
                            <div className='bookcontentinfo'>Date : 13/03/2023</div>
                            <div className='bookcontentinfo'>Time : 8:00 am</div>
                        </Typography>
                        <div className='animatedDrimage'>
                            <img src={AnimatedDr} />
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}

export default LoginAppointment;