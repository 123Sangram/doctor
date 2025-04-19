import React ,{useState,useContext} from 'react'
import {AdminContext} from '../context/AdminContext'
import {assets} from '../assets/assets_frontend/assets'
import axios from 'axios'
 import {toast } from "react-toastify";
const Login =()=>{

   const [state,setState] = useState('Admin')
   const [email,setEmail]=useState('')
   const [password, setPassword] = useState("");
   const {setAToken,backendUrl}=useContext(AdminContext)
    
const onSubmitHandler = async (event) => {
  event.preventDefault();
  try {
    if (state === "Admin") {
      // Await API call and destructure data
      const { data } = await axios.post(`${backendUrl}/api/admin/login`, {
        email,
        password, // ✅ Fixed spelling
      });

      // Check if the API call is successful
      if (data.success) {
        console.log(data.token);
        localStorage.setItem("aToken", data.token);
        setAToken(data.token);
      } else {
        toast.error(data.message); // Handle failure response
      }
    } else {
      console.log("hello");
      toast.error("Doctor login not implemented");
    }
  } catch (error) {
    console.error("Login Error:", error);
    toast.error("Something went wrong. Please try again.");
  }
};

   return (
     <form
       onSubmit={onSubmitHandler}
       className="min-h-[80vh] flex items-center"
     >
       <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg">
         <p className="text-2xl font-semibold m-auto">
           <span className="text-primary">{state} </span>
           login
         </p>
         <div className="w-full ">
           <p className="">Email</p>
           <input
             onChange={(e) => setEmail(e.target.value)}
             value={email}
             className="border border-[#DADADA] rounded w-full p-2 mt-1"
             type="email"
           />
         </div>
         <div className="w-full ">
           <p className="">Password</p>
           <input
             onChange={(e) => setPassword(e.target.value)}
             value={password}
             className="border border-[#DADADA] rounded w-full p-2 mt-1"
             type="password"
           />
         </div>
         <button className="bg-[#5f6FFF] text-white w-full py-2 rounded-md text-base">
           Login
         </button>
         {state === "Admin" ? (
           <p>
             Doctor login ?{" "}
             <span
               className="text-[#5f6FFF] underline cursor-pointer"
               onClick={() => setState("Doctor")}
             >
               Click here
             </span>
           </p>
         ) : (
           <p>
             Admin login ?{" "}
             <span className="" onClick={() => setState("Admin")}>
               Click here
             </span>
           </p>
         )}
       </div>
     </form>
   );
}

export default Login;  //exporting the component