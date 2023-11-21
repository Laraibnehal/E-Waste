import React from 'react'
import TableRow from '../components/Table'
const data = [[
  "1",
  "Laraib Nehal",

  "670"
],[
  "2",
  "Chayan Das",
  "500"
],[
  "3",
  "Sahil ",
 
  "800"
],[
  "1",
  "Krishnendu Mishra",
 
  "560"
],
[
  "1",
  "Krishnendu Mishra",
 
  "560"
],
[
  "1",
  "Krishnendu Mishra",
 
  "560"
],

];
function LeaderBoard() {
  
  return (
    <div>
      <div className=" ml-4 border-slate-50  w-32  rounded-2xl border-2 mt-5">
<div className=''>
<h1 className=' text-white text-start flex justify-center text-lg '>
LearderBoard
</h1>
</div>
</div>
<TableRow dataMap={data}/>
    </div>
  )
}



export default LeaderBoard