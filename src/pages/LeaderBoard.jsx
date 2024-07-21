import React from 'react'
// import TableRow from '../components/Table'
import DataTable from 'react-data-table-component';
// const data = [[
//   "1",
//   "Laraib Nehal",
//   "670"
// ],[
//   "2",
//   "Chayan Das",
//   "500"
// ],[
//   "3",
//   "Sahil ",
 
//   "800"
// ],[
//   "1",
//   "Krishnendu Mishra",
 
//   "560"
// ],
// [
//   "1",
//   "Krishnendu Mishra",
 
//   "560"
// ],
// [
//   "1",
//   "Krishnendu Mishra",
 
//   "560"
// ],

// ];
function LeaderBoard() {
  const  columns = [
    {
      name: 'Sl',
      selector: row => row.sl
    },
    {
      name: "Name",
      selector: row=> row.name
    },
    {
      name: 'points',
      selector: row => row.points,
    }
  ]
  const data = [
    {
      id: 1,
      sl: '1',
      name: "Laraib Nehal",
      points:"234"
    },
    {
      id: 2,
      sl: '1',
      name: "Laraib Nehal",
      points:"234"
    },
    {
      id: 3,
      sl: '1',
      name: "Laraib Nehal",
      points:"234"
    },
    {
      id: 4,
      sl: '1',
      name: "Laraib Nehal",
      points:"234"
    },
    {
      id: 5,
      sl: '1',
      name: "Laraib Nehal",
      points:"234"
    },

  ]
  

  return (
    <div>
      <div className=" ml-4 border-slate-50  w-32  rounded-2xl border-2 mt-5">
<div className=''>
<h1 className=' text-white text-start flex justify-center text-lg '>
LearderBoard
</h1>
</div>
</div>
<div>

<DataTable
  columns = {columns}
  data = {data}
>

</DataTable>
</div>
    </div>
  )
}



export default LeaderBoard;