import React ,{useState} from 'react'
import Parrot from '../assets/Parrot.json'
import Lottie from 'lottie-react'
const Login = () => {
   const [state, setState] = useState("Sign-up");
    const [email, setEmail]=useState('')
    const [name,setName]=useState('')
    const [password, setPassword]=useState('')

    const onSubmitHandler=async(event)=>{
      event.preventDefault();
    }
  return (
    <>
      <div className='mx-[780px] ' style={{ width: "20%"}}>
        <Lottie loop={true} animationData={Parrot} />
      </div>
      <form className="min-h-[80vh] mt-[-200px]  flex items-center">
        <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg">
          <p className="text-2xl font-semibold">
            {state === "Sign-up" ? "Create Account" : "Login"}
          </p>
          <p className="w-full ">
            {state === "Sign-up" ? "Sign-up" : "Login"} to book appointment
          </p>
          {state === "Sign-up" && (
            <div className="">
              <p className="">Full Name</p>
              <input
                className="border border-[#DADADA] rounded w-full p-2 mt-1"
                type="text"
                onChange={(e) => setName(e.target.name)}
                value={name}
              />
            </div>
          )}

          <div className="w-full ">
            <p className="">Email</p>
            <input
              className="border border-[#DADADA] rounded w-full p-2 mt-1"
              type="email"
              onChange={(e) => setName(e.target.name)}
              value={name}
            />
          </div>
          <div className="w-full ">
            <p className="">Password</p>
            <input
              className="border border-[#DADADA] rounded w-full p-2 mt-1"
              type="password"
              onChange={(e) => setName(e.target.name)}
              value={name}
            />
          </div>
          <button className="bg-primary text-white w-full py-2 my-2 rounded-md text-base">
            {state === "Sign-up" ? "Create Account" : "Login"}
          </button>
          {state === "Sign-up" ? (
            <p>
              Already have an account?
              <span
                className="text-primary underline cursor-pointer"
                onClick={() => setState("Login")}
              >
                {" "}
                Login here
              </span>
            </p>
          ) : (
            <p>
              Create an new account?{" "}
              <span
                className="text-primary underline cursor-pointer"
                onClick={() => setState("Sign-up")}
              >
                click here
              </span>
            </p>
          )}
        </div>
      </form>
    </>
  );
};
export default Login;
