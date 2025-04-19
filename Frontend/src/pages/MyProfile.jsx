import { assets } from "../assets/assets_frontend/assets";
import React,{useState} from 'react'
const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Sangram Singh",
    email: 'sangramamwan@gmail.com',
    image: assets.profile_pic,
    phone: '91 6386054411',
    address: {
      line1: "GovindPuram Ghaziabad",
      line2: "Banda Utter predesh",
    },
    gender: "male",
    dob: "05-04-2003",
  });

   const [isEdit,setIsEdit]=useState(false)
  return (
    <div className="max-w-lg flex flex-col gap-2 text-sm pt-5">
      <img className="w-36 rounded" src={userData.image} alt="" />
      {isEdit ? (
        <input
          className=""
          type="text"
          value={userData.name}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      ) : (
        <p className="font-medium text-3xl text-[#262626] mt-4">
          {userData.name}
        </p>
      )}
      <hr className="bg-[#ADADAD] h-[1px] border-none" />
      <div className="">
        <p className="text-gray-600 underline mt-3">CONTACT INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-[#363636]">
          <p className="font-medium">Email id:</p>
          <p className="text-blue-500">{userData.email}</p>
          <p className="font-medium">Phone:</p>
          {isEdit ? (
            <input
              className=""
              type="number"
              value={userData.phone}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, phone: e.target.value }))
              }
            />
          ) : (
            <p className="text-blue-500">{userData.phone}</p>
          )}
          <p className="font-medium">Address:</p>
          {isEdit ? (
            <p>
              <input
                className=""
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line1: e.target.value },
                  }))
                }
                value={userData.address.line1}
                type="text"
              />
              <br className="" />
              <input
                className=""
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line2: e.target.value },
                  }))
                }
                value={userData.address.line2}
                type="text"
              />
            </p>
          ) : (
            <p className="text-gray-500">
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </p>
          )}
        </div>
      </div>
      <div className="">
        <p className="text-[#797979] underline mt-3">BASIC INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-gray-600">
          <p className="font-medium">Gender:</p>
          {isEdit ? (
            <select
              className=""
              value={userData.gender}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, gender: e.target.value }))
              }
            >
              <option className="" value="male">
                Male
              </option>
              <option className="" value="female">
                Female
              </option>
            </select>
          ) : (
            <p className="">{userData.gender}</p>
          )}
          <p className="font-medium">Birthday:</p>
          {isEdit ? (
            <input
              className=""
              type="date"
              value={userData.birthday}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, birthday: e.target.value }))
              }
            />
          ) : (
            <p className="">{userData.birthday}</p>
          )}
        </div>
      </div>
      <div className="mt-10">
        {isEdit ? (
          <button
            className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all"
            onClick={() => setIsEdit(false)}
          >
            Save Information
          </button>
        ) : (
          <button
            className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all"
            onClick={() => setIsEdit(true)}
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};
export default MyProfile;
