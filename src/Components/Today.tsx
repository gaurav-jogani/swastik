import React from 'react';

function Today() {
    const TodayData : {
        DrName : string ,
        AppNo : number ,
        AppDate : string,
        AppStatus : string 
    }[] = [
            {
                DrName : "Vijay Garg",
                AppNo : 12,
                AppDate : "13/03/2023",
                AppStatus : "Done"
            },
            {
                DrName : "Vijay Garg",
                AppNo : 12,
                AppDate : "13/03/2023",
                AppStatus : "Done"
            },
            {
                DrName : "Vijay Garg",
                AppNo : 12,
                AppDate : "13/03/2023",
                AppStatus : "Done"
            },
            {
                DrName : "Vijay Garg",
                AppNo : 12,
                AppDate : "13/03/2023",
                AppStatus : "Done"
            },
            
        ]
    return (
        <div>
            {TodayData?.map((data,index)=>{
                return (
                    <div key={index} className='todaycontent'>
                        <div className=''>
                            <div className='datahead'>Doctor Name</div>
                            <div className='datahead'>Appointment No.</div>
                            <div className='datahead'>Appointment Date</div>
                            <div className='datahead'>Appointment Status</div>
                        </div>
                        <div className=''>
                            <div className='datastart'>{data.DrName}</div>
                            <div className='datastart'>{data.AppNo}</div>
                            <div className='datastart'>{data.AppDate}</div>
                            <div className='datastart'>{data.AppStatus}</div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default Today;