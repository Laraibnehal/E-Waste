import { useState } from "react";
import clouds from "../assests/clouds.jpg";
// import FontAwesomeIcon from "font-awesome"
const LoginPage = () =>{
  const [username, setUsername] = useState([]);
const [password, setPassword] = useState([]);

  const handleLogin = () => {
    // Add your login logic here
    console.log('Username:', username);
    console.log('Password:', password);
  }
  return (
    <div className="w-full flex flex-col ">
      <div className="w-full relative mt-7 h-screen flex flex-col md:flex-row items-center overflow-hidden">
        <img
          src={clouds}
          className="w-1/2 md:w-screen overflow-hidden object-cover rotate-90 "
        />
        <p className="absolute flex text-center  text-white not-italic font-medium text-6xl w-96 h-8 top-80 font-mono leading-10 items-center right-96">
          Climato
        </p>
        <div className="overflow-hidden object-cover absolute  w-96 flex  h-screen bg-black opacity-80 ">
        <div className="flex min-h-screen items-center  justify-center bg-black flex-col flex-wrap">
      <div className="bg-black p-8 rounded w-96">
        {/* <h2 className="text-2xl font-semibold mb-6">Login</h2> */}
        <div className="mb-10">
          {/* <label htmlFor="username" className="block font-medium">
            Username
          </label> */}
          <input
            type="text"
            id="username"
            className="w-full p-2 border rounded-md"
            placeholder="Enter your Email Address"
            // value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-10">
          {/* <label htmlFor="password" className="block font-medium">
            Password
          </label> */}
          <input
            type="password"
            id="password"
            className="w-full p-2 border rounded-md"
            placeholder="Enter your password"
            // value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="w-full py-2 bg-orange-100 text-black rounded-md hover:bg-orange-200"
          onClick={handleLogin}
        >
         Create Account
        </button>
      </div>
      <div className="flex flex-col">
        <p className="text-white text-center">By creating an account you agree to Climato’s<span className="text-sky-400">Terms of Services</span> and<span className="text-sky-400">Privacy Policy</span></p>
       
      </div>
    </div>
        </div>
      </div>
    </div>
  );
}
export default LoginPage


