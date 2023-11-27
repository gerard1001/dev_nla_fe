import React from 'react'
import Graph from '../components/Graph'
import Graphview from '../components/Geralview'

const page = () => {
  return (
    <div>
        <div>
            <Graphview />  
            <div className='bg-white p-3 rounded-md my-3'>
    <h1 className='text-2xl'>Generate report</h1>
 <div className='grid gap-6  md:grid-cols-3 '>
    
   
<div>
<label >From:</label>
<input type='date' className="bg-white-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
</div>

<div>
  
<label >To:</label>
<input type='date' className="bg-white-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
</div>
<div>
  <label>Cases  Type</label>
<select id="large" className="bg-white-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected>All cases</option>
  <option value="US">Submited Cases</option>
  <option value="CA">Pending Cases</option>
  <option value="FR">Submitted Cases</option>
  <option value="DE">District level Cases</option>
</select>
</div>
 </div>
 <button className='bg-blue-500 p-3 hover:bg-blue-800 rounded-md text-white'>GENERATE REPORT</button>


        </div>
     
        </div>

    </div>
  )
}

export default page