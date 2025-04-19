import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";
import { assets } from "../assets/assets_frontend/assets";
import RelatedDoctors from "../components/RelatedDocters";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  useEffect(() => {
    const fetchDocInfo = async () => {
      const foundDoc = doctors.find((doc) => doc._id === docId);
      if (foundDoc) {
        setDocInfo(foundDoc);
      }
    };
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    if (!docInfo) return;

    const getAvailableSlots = () => {
      let today = new Date();
      let slots = [];

      for (let i = 0; i < 7; i++) {
        let currentDate = new Date(today);
        currentDate.setDate(today.getDate() + i);

        let endTime = new Date(currentDate);
        endTime.setHours(21, 0, 0, 0);

        if (i === 0) {
          currentDate.setHours(Math.max(currentDate.getHours() + 1, 10));
        } else {
          currentDate.setHours(10, 0, 0, 0);
        }

        let timeSlots = [];
        while (currentDate < endTime) {
          let formattedTime = currentDate.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          });

          timeSlots.push({
            datetime: new Date(currentDate),
            time: formattedTime,
          });

          currentDate.setMinutes(currentDate.getMinutes() + 30);
        }

        slots.push(timeSlots);
      }

      setDocSlots(slots);
    };

    getAvailableSlots();
  }, [docInfo]);

  return (
    docInfo && (
      <div>
        {/* Doctor Details */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div>
            <img
              className="bg-primary w-full sm:max-w-72 rounded"
              src={docInfo.image}
              alt=""
            />
          </div>
          <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
            <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
              {docInfo.name}
              <img className="w-5" src={assets.verified_icon} alt="" />
            </p>
            <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
              <p>
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <button className="py-0.5 px-2 border text-xs rounded-full">
                {docInfo.experience}
              </button>
            </div>

            {/* Doctor About */}
            <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
              About
              <img src={assets.info_icon} alt="" />
            </p>
            <p className="text-sm text-gray-500 max-w-[700px] mt-1">
              {docInfo.about}
            </p>
            <p className="text-gray-500 font-medium mt-4">
              Appointment fee{" "}
              <span className="text-gray-600">
                {currencySymbol}
                {docInfo.fees}
              </span>
            </p>
          </div>
        </div>

        {/* Booking Slots */}
        <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
          <p>Booking Slots</p>
          <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
            {docSlots.length > 0 ? (
              docSlots.map((item, index) => (
                <div
                  onClick={() => setSlotIndex(index)}
                  className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${
                    slotIndex === index
                      ? "bg-primary text-white"
                      : "border border-gray-600"
                  }`}
                  key={index}
                >
                  <p>
                    {item[0]
                      ? daysOfWeek[new Date(item[0].datetime).getDay()]
                      : ""}
                  </p>
                  <p>{item[0] ? new Date(item[0].datetime).getDate() : ""}</p>
                </div>
              ))
            ) : (
              <p>Loading slots...</p>
            )}
          </div>
          <div className="flex item-center gap-3 w-full overflow-x-scroll mt-4">
            {docSlots.length &&
              docSlots[slotIndex].map((item, index) => (
                <p onClick={()=>setSlotTime(item.time)}
                  className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${
                    item.time === slotTime
                      ? "bg-primary text-white"
                      : "border border-gray-600"
                  }`}
                  key={index}
                >
                  {item.time.toLowerCase()}
                </p>
              ))}
          </div>
          <button className='bg-primary text-white text-sm font-light px-14 py-3 mt-4 rounded-full'>Appointment Book</button>
        </div>
        {/* listing related doctors */}
        <RelatedDoctors docId={docId} speciality={docId.speciality}/>
      </div>
    )
  );
};

export default Appointment;
