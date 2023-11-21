import React from 'react'
// import Navbar from '../components/Navbar'
import Card from '../components/Card'
import computer from "../assests/computer.jpg"
import computers from "../assests/computers.jpg"
import letters from "../assests/Letters.jpg"
import smile from "../assests/simle.jpg"
import mobiles from "../assests/mobiles.jpg"
import two from "../assests/-2.jpg"
function Learn() {
  return (
    <div className='bg-slate-800 h-full rounded-2xl ml-5 mr-5 '>

<div className=" ml-4 border-slate-50  w-24  rounded-2xl border-2 mt-5">
<div className=''>
<h1 className=' text-white text-start flex justify-center text-lg '>
Learn
</h1>
</div>
</div>
       <div className="w-full p-4 md:p-8 md:py-16 flex  items-center ">
           
           <div className="mt-10 flex flex-col md:flex-row  flex-wrap justify-center w-full items-center">
              <Card 
               read={"Read"}
               image={letters} 
               description={"How to navigate in the modern world & manage e-waste "} />
              <Card read={"Read"}
               image={two} 
               description={"How to recycle your old TV and make a quick buck. "} />
              <Card read={"Read"}
               image={computers} 
               description={"Did you know old computers are a pressing issue..."} />
              <Card read={"Read"}
               image={smile} 
               description={" Know how you can save the environment while making money."} />
              <Card read={"Read"}
               image={computer}
                description={" Will computers be the next armageddon..."} />
              <Card read={"Read"}
               image={mobiles}
               description={" How to get rid of your old phone in 2023"} />
            </div>
          </div>
  

 

    </div>
  )
}

export default Learn