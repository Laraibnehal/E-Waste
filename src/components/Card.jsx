import React,{useState} from "react";
import { Link } from "react-router-dom";
import computer from "../assests/computer.jpg"
import computers from "../assests/computers.jpg"
import letters from "../assests/Letters.jpg"
import smile from "../assests/simle.jpg"
import mobiles from "../assests/mobiles.jpg"
import two from "../assests/-2.jpg"

const Card = ({ image, read, description }) => {
        return (
            // <div className=" cursor-pointer shadow-lg flex flex-wrap  mb-6 rounded-3xl ml-9 w-1/4 bg-slate-400 text-white"  >
            // {image && <img src={image} className="w-full h-[250px] object-cover rounded-3xl" />}
            // <div className="p-4 w-[95%] md:w-[300px] ">
            // <Link to="/read" className="m-0 p-0 text-sm text-white mr-0 ">{read }</Link>
            //   <p className="text-sm my-2 h-[65px]  ">{description}</p>
            // </div>
            // </div>
            <div className=" flex-col relative justify-between  p-2 w-[90%] md:w-[250px]  my-3 md:my-0 md:mx-3 cursor-pointer hover:bg-black hover:text-white  h-56 rounded-3xl">
      
      <p style={{
      
        color: "white",
        margin: "0",
        padding: "0",
        textAlign:"right",
        position:"absolute",
        marginTop:"7rem",
        fontSize:"2rem"
        
        

      }}>{read}</p>
    
      
      <img src={image} className="h-[204px] w-[282px] rounded-lg"></img>
      <p className=" mt-4  w-full text-md bottom-3 left-3 absolute text-white">{description}</p>
    </div>
        );
      };

export default Card;