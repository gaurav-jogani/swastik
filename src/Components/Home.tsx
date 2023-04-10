import React from 'react';
import Carousel from './Carousel';
import Rating from '@mui/material/Rating';

// import DrMahesh from ""
//blob for image

const Home = () => {
  const BookAppointments : {
    src : string,
    Name : String,
    Designation :String,
    RatingNumber : number,
  }[] = [
    {
      src : "/drMahesh.png",
      Name : "Dr. Mahesh",
      Designation : "Cardiologist",
      RatingNumber : 5
    },
    {
      src : "/drMahesh.png",
      Name : "Dr. Anita",
      Designation : "Cardiologist",
      RatingNumber : 4
    },
    {
      src : "/drMahesh.png",
      Name : "Dr. Ram",
      Designation : "Cardiologist",
      RatingNumber : 4
    },
  ]

  const Imgdata  : {
    id : Number,
    imgSrc : string,
  }[] = [
    {
      id: 1,
      imgSrc : "/facilityImage.png"
    },
    {
      id: 2,
      imgSrc: '/facilityImage.png'
    },
    {
      id: 3,
      imgSrc: '/facilityImage.png'
    }
  ]
  
  return (
    <div>
      <div className='home1'>
        <div className='home1Img'><img src='/home1.png'/></div>
        <div className='home1Time'>
          <div className='home1Time-1'>
            <div className='clinicdiv'>Clinic Timings</div>
            <div  className=''>Mon - Sat</div>
          </div>
          <div className='home1Time-2'>
            <div>Morning</div>
            <div>9:00 - 12:00 PM</div>
          </div>
          <div className='home1Time-3'>
            <div>Evening</div>
            <div>6:00 - 9:00 PM</div>
          </div>
        </div>
      </div>
      <div className='Alldoctors'>
        <div className='alldr'>
            <div>All Doctor</div>
            <div className='Viewbtn'>
              <button type='button'>View All</button>
            </div>
        </div>
        <div className='drappointments'>
          {BookAppointments?.map((data,index)=>{
            return (
              <div key={index} className='listappointment'>
                <div className='infoDr'>
                    <div className='drImg'>
                      <img className='' src={data.src} />
                    </div>
                    <div className='namefont'>{data.Name}</div>
                    <div className='designationfont'>{data.Designation}</div>
                    <div className='ratecard'>
                      <Rating
                          sx={{fontSize : "17px", "& .MuiRating-iconEmpty" : {color : "white"}  ,"& .MuiRating-iconFilled": {color: "white"}, "& .MuiRating-iconHover": {color: "white"} }} name="customized-color" defaultValue={data.RatingNumber} size="small"
                        />
                    </div>
                </div>
                <div className='btnappointment'>
                  <button type='button' >Appointment</button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className='Facility'>
          <div>Our Facility</div>
          <div className='facilityoffice'>
            <Carousel data={Imgdata}/>
          </div>
      </div>
      <div className='ReviewSection'>
          <div className='allreview'>
            <div>Reviews</div>
            <div className='Viewbtn'>
              <button type='button'>View All</button>
            </div>
          </div>
          <div className='ReviewContent'>
            <div className='reviewrating'>
              <Rating sx={{"& .MuiRating-iconFilled": {color: "#F4A381"}}} name="size-small" defaultValue={5} size="small" />
            </div>
            <div className='reviewcomment'>
              <p>Good Seller. Seeds haven’t sow yet but buying experience was satisfactory. Delievery and respons was perfect. No regreat and hoping that plant come out when I saw it.</p>
            </div>
            <div className='reviewName'>
              <div className='reviewprofile'>
                <img className='' src="/drMahesh.png" />
              </div>
              <span>Aditya sharma</span>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Home