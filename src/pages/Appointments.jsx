import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import RelatedDoctors from "../components/relateddoctors/RelatedDoctors";


const Appointments = () => {
  const { docId } = useParams();
  const { doctors , currencySymbol} = useContext(AppContext);
  const [doctorInfo, setDoctorInfo] = useState([]);
  const [docSlots,setDocSlots]= useState([])
  const [slotIndex,setSlotIndex] =useState(0)
  const [slotTime, setSlotTime]= useState()
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed","Thr", "Fri","Sat", "Sun"]

  const fetchDocInfo = async () => {
    const doctorInfo = doctors.find((doc) => doc._id === docId);
    setDoctorInfo(doctorInfo);
  };

  const getAvailableSlots = async()=>{
    setDocSlots([])
  //  getting current date
   let  today = new Date();
   
   for (let i = 0; i < 7; i++) {
     let currentDate = new Date(today)
     currentDate.setDate(today.getDate()+i)
    //  setting end time of the date with index
    let endTime = new Date()
    endTime.setDate(today.getDate()+i)
    endTime.setHours(21,0,0,0)
    // setting hours
    if(today.getDate() === currentDate.getDate()){
      currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours()+1 :10 )
      currentDate.setMinutes(currentDate.getMinutes > 30 ? 30: 0)
    }else {
      currentDate.setHours(10)
      currentDate.setMinutes(0)
    }
    let timeSlots =[]

    while(currentDate < endTime){
      let formattedTime = currentDate.toLocaleTimeString([],{hour: '2-digit', minute:'2-digit'})
      // add slots to array
      timeSlots.push({
        datetime: new Date(currentDate),
        time: formattedTime
      })
      // increment time by 30 minuites
       currentDate.setMinutes(currentDate.getMinutes()+30)
    }
    setDocSlots(prev=>([...prev,timeSlots]))
   }
  
  }

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(()=>{
    getAvailableSlots()
  },[doctorInfo])
  useEffect(()=>{
    console.log(docSlots);
  },[docSlots])

  return (
    <div className="flex flex-col sm:flex-rows-2 gap-4 ">
      {/* {----------doctorDetails-------} */}
      <div >
        <div>
          <img className="bg-primary w-full sm:max-w-72 rounded-lg  " src={doctorInfo.image} alt="" />
        </div>
      </div>
      {/* {-----docInfo: name degree , experience----------} */}
      <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[0px] sm-mt-0">
        <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
          {doctorInfo.name}
          <img className="w-5" src={assets.verified_icon} alt="" />
        </p>
        <div className="flex items-center gap-2 text-sm mt-1 text-gray-600 ">
          <p>
            {doctorInfo.degree}-{doctorInfo.speciality}
          </p>
          <button className="py-0.5 px-2 border text-xs rounded-full">{doctorInfo.experience}</button>
        </div>
        {/* {---------DoctorAbout-------} */}
        <div>
          <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">About 
            <img src={assets.info_icon} alt="" />
          </p>
          <p className="text-sm text-gray-500 max-w-[700px] mt-1">{doctorInfo.about}</p>
        </div>
        <p className="font-medium text-gray-500 mt-4"> Appointment fee:<span className="text-gray-600"> {currencySymbol} {doctorInfo.fees}</span> </p>
      </div>
      {/* {----------booking slots-------} */}
      <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700 ">
        <p>Booking slots</p>
        <div className="flex">
          {docSlots.length && docSlots.map((item,index)=>{
            return <div onClick={()=>setSlotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-primary text-white':'border border-gray-200'} `} key={index}>
            <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
            <p>{item[0] && item[0].datetime.getDate()}</p>
            </div>
          })}
        </div>
        <div>
          <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
            {docSlots.length && docSlots[slotIndex].map((item,index)=>{
               return <p onClick={()=>setSlotTime(item.time)} className={`text-sm font-light px-5 pt-2 rounded-full flex-shrink-0 cursor-pointer ${item.time === slotTime ? 'bg-primary text-white pb-[6px]':'text-gray-400 border pb-[6px] border-gray-00'}`} key={index}>
                {item.time.toLowerCase()}
               </p>
            })}
          </div>
         
         <button className="bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6">Book an appointment</button>
         
        </div>
      </div>
      {/* {listing related doctors} */}
      <RelatedDoctors docId={docId} speciality={doctorInfo.speciality}></RelatedDoctors>
    </div>
  );
};

export default Appointments;
