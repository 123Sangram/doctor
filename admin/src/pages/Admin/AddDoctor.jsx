import React ,{useState,useContext} from'react'
import {assets} from  '../../assets/assets_admin/assets'
import { AdminContext } from "../../context/AdminContext";
 import { toast } from "react-toastify";
import axios from 'axios'
const AddDoctor=()=>{
    // add docImage, name email, password, experience fees about speciality, degree, address1 address2
    const [docImg, setDocImg] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [experience, setExperience] = useState("1 year");
    const [fees, setFees] = useState("");
    const [about, setAbout] = useState("");
    const [speciality, setSpeciality] = useState("Cardiologist");
    const [degree, setDegree] = useState("");
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState(""); 
  
    const {backendUrl, aToken} = useContext(AdminContext)
 const onSubmitHandler = async (event) => {
   event.preventDefault();

   try {
     // Collect required fields and their labels for validation
     const requiredFields = [
       { value: docImg, label: "Doctor Image" },
       { value: name, label: "Name" },
       { value: email, label: "Email" },
       { value: password, label: "Password" },
       { value: experience, label: "Experience" },
       { value: fees, label: "Fees" },
       { value: about, label: "About Doctor" },
       { value: speciality, label: "Speciality" },
       { value: degree, label: "Education/Degree" },
       { value: address1, label: "Address 1" },
       { value: address2, label: "Address 2" },
     ];

     // Find missing fields
     const missingFields = requiredFields
       .filter((field) => !field.value)
       .map((field) => field.label);

     // If there are missing fields, show errors and stop submission
     if (missingFields.length > 0) {
       return toast.error(`Missing fields: ${missingFields.join(", ")}`);
     }

     // ✅ Create FormData object
     const formData = new FormData();
     formData.append("image", docImg);
     formData.append("name", name);
     formData.append("email", email);
     formData.append("password", password);
     formData.append("experience", experience);
     formData.append("fees", fees);
     formData.append("about", about);
     formData.append("speciality", speciality);
     formData.append("degree", degree);
     formData.append("address1", address1);
     formData.append("address2", JSON.stringify({ line1: address2 }));

     // ✅ Debug: Log FormData key-value pairs
     formData.forEach((value, key) => {
       console.log(`${key}: ${value}`);
     });

     // ✅ API Request
     const { data } = await axios.post(
       `${backendUrl}/api/admin/add-doctor`,
       formData,
       {
         headers: {
           Authorization: `Bearer ${aToken}`,
           "Content-Type": "multipart/form-data",
         },
       }
     );

     // ✅ Handle Response
     if (data.success) {
       toast.success(data.message);
     } else {
       toast.error(data.message);
     }
   } catch (error) {
     console.error("Error in adding doctor:", error);
     toast.error("Something went wrong. Please try again.");
   }
 };


    return (
      <form onSubmit={onSubmitHandler} className="m-5 w-full ">
        <p className="mb-3 text-lg font-medium ">Add Doctor</p>
        <div className="bg-white px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll ">
          <div className="flex items-center gap-4 mb-8 text-gray-500 ">
            <label className=" doc-img" htmlFor="doc-img">
              <img
                className="w-16 bg-gray-100 rounded-full cursor-pointer "
                src={docImg ? URL.createObjectURL(docImg) : assets.upload_area}
                alt=""
              />
            </label>
            <input
              onChange={(e) => setDocImg(e.target.files[0])}
              className=" "
              type="file"
              id="doc-img"
              hidden
            />
            <p className=" ">
              Upload doctor <br />
              Picture
            </p>
          </div>
          <div className=" flex flex-col lg:flex-row items-start gap-10 text-gray-600">
            <div className="w-full lg:flex-1 flex flex-col gap-4 ">
              <div className="flex-1 flex flex-col gap-1 ">
                <p className=" ">Your name</p>
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  className="border rounded px-3 py-2"
                  type="text"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="flex-1 flex flex-col gap-1">
                <p className="">Doctor Email</p>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="border rounded px-3 py-2 "
                  type="email"
                  placeholder="email"
                  required
                />
              </div>
              <div className="flex-1 flex flex-col gap-1 ">
                <p className=" ">Dotor Password</p>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  className=" border rounded px-3 py-2"
                  type="password"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="flex-1 flex flex-col gap-1 ">
                <p className=" ">Experience</p>
                <select
                  onChange={(e) => setExperience(e.target.value)}
                  value={experience}
                  className=" border rounded px-2 py-2"
                  name=""
                  id=""
                >
                  <option value="1 year">1 year</option>
                  <option value="2 years">2 years</option>
                  <option value="3 years">3 years</option>
                  <option value="4 years">4 years</option>
                </select>
              </div>
              <div className="flex-1 flex flex-col gap-1 ">
                <p className=" ">Fees</p>
                <input
                  onChange={(e) => setFees(e.target.value)}
                  value={fees}
                  className=" border rounded px-3 py-2"
                  type="number"
                  placeholder="fees"
                  required
                />
              </div>
            </div>
            <div className=" w-full lg:flex-1 flex flex-col gap-4">
              <div className=" flex-1 flex flex-col gap-1">
                <p className=" ">Speciality</p>
                <select
                  onChange={(e) => setSpeciality(e.target.value)}
                  value={speciality}
                  name="speciality"
                >
                  <option className=" " value="Cardiologist">
                    Cardiologist
                  </option>
                  <option className=" " value="Dentist">
                    Dentist
                  </option>
                  <option className=" " value="Dermatologist">
                    Dermatologist
                  </option>
                  <option className=" " value="Endocrinologist">
                    Endocrinologist
                  </option>
                  <option className=" " value="Gastroenterologist">
                    Gastroenterologist
                  </option>
                  <option className=" " value="Gynecologist">
                    Gynecologist
                  </option>
                  <option className=" " value="Immunologist">
                    Immunologist
                  </option>
                </select>
              </div>
              <div className="flex-1 flex flex-col gap-1 ">
                <p className=" ">Degree</p>
                <input
                  onChange={(e) => setDegree(e.target.value)}
                  value={degree}
                  className="border rounded px-3 py-2 "
                  type="text"
                  placeholder="degree"
                  required
                />
              </div>

              <div className="flex-1 flex flex-col gap-1 ">
                <p className=" ">Address</p>
                <input
                  onChange={(e) => setAddress1(e.target.value)}
                  value={address1}
                  className="border rounded px-3 py-2 "
                  type="text"
                  placeholder="address 1"
                  required
                />
                <input
                  onChange={(e) => setAddress2(e.target.value)}
                  value={address2}
                  className="border rounded px-3 py-2 "
                  type="text"
                  placeholder="address 2"
                  required
                />
              </div>
            </div>
          </div>
          <div className=" ">
            <p className="mt-4 mb-2 ">About Doctor</p>
            <textarea
              onChange={(e) => setAbout(e.target.value)}
              value={about}
              className="w-full px-4 pt-2 border rounded "
              type="text"
              placeholder="write about doctor"
              required
            />
          </div>
          <button className=" bg-[#5f6FFF] px-10 py-3 mt-4 text-white rounded-full">
            Add doctor
          </button>
        </div>
      </form>
    );
}
export default AddDoctor