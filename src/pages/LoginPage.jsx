import { useState } from "react";
import clouds from "../assests/clouds.jpg";
// import FontAwesomeIcon from "font-awesome"

const LoginPage = () =>{
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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
            value={username}
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
            value={password}
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

export default LoginPage;
// /* Login */

// position: relative;
// width: 1440px;
// height: 900px;

// /* Secondary */
// background: #101010;

// /* Login_Section */

// position: absolute;
// width: 1920px;
// height: 1080px;
// left: -308px;
// top: -55px;

// /* ed668cbb0444e58a3ee2cc93206cce34 1 */

// position: absolute;
// width: 1080px;
// height: 1920px;
// left: 1612px;
// top: -55px;

// background: url(ed668cbb0444e58a3ee2cc93206cce34.jpg);
// transform: rotate(90deg);

// /* Rectangle 5 */

// position: absolute;
// width: 720px;
// height: 900px;
// left: 720px;
// top: 0px;

// /* Grey-800 */
// background: #1F1F1F;
// opacity: 0.84;
// border-radius: 0px;

// /* Climato */

// position: absolute;
// width: 702px;
// height: 78px;
// left: calc(50% - 702px/2 - 357px);
// top: 388px;

// font-family: 'IBM Plex Mono';
// font-style: normal;
// font-weight: 500;
// font-size: 60px;
// line-height: 78px;
// /* identical to box height */
// display: flex;
// align-items: center;
// text-align: center;

// color: #FAF3DD;

// /* Group 25 */

// position: absolute;
// width: 510px;
// height: 70px;
// left: 825px;
// top: 216px;

// /* Rectangle 1 */

// position: absolute;
// width: 510px;
// height: 70px;
// left: 825px;
// top: 216px;

// /* Grey-100 */
// background: #FFFFFF;
// border-radius: 16px;

// /* Email address */

// position: absolute;
// width: 195px;
// height: 33px;
// left: 842px;
// top: 235px;

// font-family: 'IBM Plex Mono';
// font-style: normal;
// font-weight: 500;
// font-size: 25px;
// line-height: 32px;
// /* identical to box height */
// text-align: center;

// color: #BDBDBD;

// /* Group 26 */

// position: absolute;
// width: 510px;
// height: 70px;
// left: 824px;
// top: 346px;

// /* Rectangle 2 */

// position: absolute;
// width: 510px;
// height: 70px;
// left: 824px;
// top: 346px;

// /* Grey-100 */
// background: #FFFFFF;
// border-radius: 16px;

// /* Password */

// position: absolute;
// width: 120px;
// height: 33px;
// left: 842px;
// top: 364px;

// font-family: 'IBM Plex Mono';
// font-style: normal;
// font-weight: 500;
// font-size: 25px;
// line-height: 32px;
// /* identical to box height */
// text-align: center;

// color: #BDBDBD;

// /* Rectangle 3 */

// position: absolute;
// width: 510px;
// height: 81px;
// left: 825px;
// top: 476px;

// background: #FAF3DD;
// border-radius: 16px;

// /* Create Account */

// position: absolute;
// width: 269px;
// height: 42px;
// left: 945px;
// top: 496px;

// font-family: 'IBM Plex Mono';
// font-style: normal;
// font-weight: 700;
// font-size: 32px;
// line-height: 42px;
// /* identical to box height */
// text-align: center;

// color: #101010;

// /* By creating an account you agree to Climato’s Terms of Services and Privacy Policy */

// position: absolute;
// width: 720px;
// height: 45px;
// left: 720px;
// top: 758px;

// font-family: 'IBM Plex Mono';
// font-style: normal;
// font-weight: 400;
// font-size: 16px;
// line-height: 21px;
// text-align: center;

// /* Grey-300 */
// color: #D6D6D6;

// /* or sign up with */

// position: absolute;
// width: 144px;
// height: 21px;
// left: 1008px;
// top: 591px;

// font-family: 'IBM Plex Mono';
// font-style: normal;
// font-weight: 400;
// font-size: 16px;
// line-height: 21px;
// /* identical to box height */
// text-align: center;

// /* Grey-300 */
// color: #D6D6D6;

// /* Rectangle 5 */

// position: absolute;
// width: 70px;
// height: 70px;
// left: 925px;
// top: 646px;

// background: #FAEBDD;
// border-radius: 12px;

// /* Mask group */

// position: absolute;
// width: 39.64px;
// height: 39.64px;
// left: 940px;
// top: 661px;

// /* Google */

// position: absolute;
// width: 39.64px;
// height: 39.64px;
// left: 940px;
// top: 661px;

// background: url(.png);

// /* Rectangle 8 */

// position: absolute;
// width: 39.64px;
// height: 39.64px;
// left: 940px;
// top: 661px;

// background: #101010;

// /* Rectangle 6 */

// position: absolute;
// width: 70px;
// height: 70px;
// left: 1045px;
// top: 646px;

// background: #FAEBDD;
// border-radius: 12px;

// /* Mask group */

// position: absolute;
// width: 39.64px;
// height: 39.64px;
// left: 1060px;
// top: 661px;

// /* Apple Logo */

// position: absolute;
// width: 39.64px;
// height: 39.64px;
// left: 1060px;
// top: 661px;

// background: url(.png);

// /* Rectangle 9 */

// position: absolute;
// width: 39.64px;
// height: 39.64px;
// left: 1060px;
// top: 661px;

// background: #101010;

// /* Rectangle 7 */

// position: absolute;
// width: 70px;
// height: 70px;
// left: 1165px;
// top: 646px;

// background: #FAEBDD;
// border-radius: 12px;

// /* Mask group */

// position: absolute;
// width: 31.72px;
// height: 31.72px;
// left: 1184px;
// top: 665px;

// /* Microsoft */

// position: absolute;
// width: 31.72px;
// height: 31.72px;
// left: 1184px;
// top: 665px;

// background: url(.png);

// /* Rectangle 10 */

// position: absolute;
// width: 39.64px;
// height: 39.64px;
// left: 1180.04px;
// top: 661.04px;

// background: #101010;
