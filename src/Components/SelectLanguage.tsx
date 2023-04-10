import React from 'react';
import { useNavigate } from "react-router-dom";

const SelectLanguage = () => {
    const nav = useNavigate();
    const handleChange = () => {
        nav('/swastikClinic');
    }
  return (
    <div className=''>
        <div className='selectLang'>
            <div className='selectLang1'>Select Language</div>
            <div className='selectLang2'>Please select a language that you can read and understand comfortably</div>
            <div className='selectLang3'>
                <div className='selectLang3-1'>
                    <div className='selectLang3-1-1'>हिन्दी</div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" style={{ width:'30px', height:'30px' }}/>
                    </div>
                </div>
                <div className='selectLang3-2'>
                    <div className='selectLang3-1-2'>English</div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" style={{ width:'30px', height:'30px' }}/>
                        </div>
                    </div>
                <div className='selectLang3-3'>
                    <div className='selectLang3-1-2'>Hinglish</div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" style={{ width:'30px', height:'30px' }}/>
                        </div>
                    </div>
                </div>
            <div className='selectLang4'>
                <button onClick={handleChange}>Continue</button>
            </div>
        </div>
    </div>
  )
}

export default SelectLanguage