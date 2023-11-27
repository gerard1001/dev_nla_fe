"use client"

import Link from 'next/link';
import React, { useEffect, useState } from 'react'

import { useContext } from 'react'

import DataTable from 'react-data-table-component';


const Logs = () => {
    const [searchText, setSearchText] = useState("")
    const [selectedRows, setSelectedRows] = useState([]);
    const [toggleCleared, setToggleCleared] = React.useState(false);
    const logs = [
        {
          id: 1,
          name: "John Doe",
          department: "Ministry of Infrastructure",
          phoneNumber: "555-1234",
          loginTime: "08:00 AM",
          logoutTime: "05:00 PM",
          date: "2023-11-22",
          salary: 80000,
        },
        {
          id: 2,
          name: "Jane Smith",
          department: "NATIONAL LAND AUTHORITY",
          phoneNumber: "555-5678",
          loginTime: "09:00 AM",
          logoutTime: "06:00 PM",
          date: "2023-11-22",
          salary: 70000,
        },
        {
          id: 3,
          name: "Bob Johnson",
          department: "NLA",
          phoneNumber: "555-4321",
          loginTime: "08:30 AM",
          logoutTime: "05:30 PM",
          date: "2023-11-22",
          salary: 90000,
        },
        {
          id: 4,
          name: "Alice Williams",
          department: "Irembo",
          phoneNumber: "555-8765",
          loginTime: "09:30 AM",
          logoutTime: "06:30 PM",
          date: "2023-11-22",
          salary: 95000,
        },
      ];
      
  const handleSelectedRowsChange = (state) => {
    setSelectedRows(state.selectedRows);
  };
  const columns = [
 
    
    
    {
      name: 'names',
      selector: 'name',
      sortable: true,
    },
    {
      name: 'Department',
      selector: 'department',
      sortable: true,
    },
    {
      name: 'Phone Number',
      selector: 'phoneNumber',
      sortable: true,
    },

    {
        name: 'Date',
        selector: 'date',
        sortable: true,
      },
    {
      name: 'Login time',
      cell: (row) => (
        <>
          <div>

    
    <button style={{color:"rgba(2, 122, 72, 1)", background:"rgba(236, 253, 243, 1)"}} className='flex justify-center items-center px-3 rounded-full h-[30px]'>
    <i style={{fontSize:30}} className="bi bi-dot"></i>
    Logged In {row.loginTime}
    
    </button>
    

          
          </div>
        </>
      ),
      sortable: true,
    },

    {
        name: 'Logout time',
        cell: (row) => (
          <>
            <div>
 
      
      <button style={{color:"rgba(192, 83, 58, 0.8)", background:"rgba(255, 86, 48, 0.24)"}} className='flex justify-center items-center px-1 rounded-full h-[30px]'> 
     
      <i style={{fontSize:30}} className="bi bi-dot"></i>

      Logged Out {row.loginTime}

      </button>
      
    
            
            </div>
          </>
        ),
        sortable: true,
      },
  ];



  const filteredData = logs.filter((item) =>
    item.department.toLowerCase().includes(searchText.toLowerCase()) ||
    item.name.toLowerCase().includes(searchText.toLowerCase()) || 
    item.loginTime.toLowerCase().includes(searchText.toLowerCase()) || 
    item.logoutTime.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="container">
 <div>
        <h3 className='flex mb-1 font-bold opacity-70 text-lg'>
        <svg height={26} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="System / Terminal"> <path id="Vector" d="M17 15H12M7 10L10 12.5L7 15M3 15.8002V8.2002C3 7.08009 3 6.51962 3.21799 6.0918C3.40973 5.71547 3.71547 5.40973 4.0918 5.21799C4.51962 5 5.08009 5 6.2002 5H17.8002C18.9203 5 19.4796 5 19.9074 5.21799C20.2837 5.40973 20.5905 5.71547 20.7822 6.0918C21 6.5192 21 7.07899 21 8.19691V15.8031C21 16.921 21 17.48 20.7822 17.9074C20.5905 18.2837 20.2837 18.5905 19.9074 18.7822C19.48 19 18.921 19 17.8031 19H6.19691C5.07899 19 4.5192 19 4.0918 18.7822C3.71547 18.5905 3.40973 18.2837 3.21799 17.9074C3 17.4796 3 16.9203 3 15.8002Z" stroke= "#1C274C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
 {" "}System Logs {`>`}</h3>
        </div>
        
 <div className='bg-white p-2 rounded-md my-3'>
 <div className="flex items-center justify-between">

<h2 className="text-2xl flex font-bold">Logs </h2>
<button className='bg-blue-500 px-2 rounded-full text-white h-[-10px] mx-1'>Today</button>


<input
  className='p-2 rounded-md ml-auto w-full '
  type="text"
  placeholder="Search any logs.."
  value={searchText}
  onChange={(e) => setSearchText(e.target.value)}
  style={{ width: "30%", border: "2px solid blue" }}
/>
</div>


              <DataTable
                columns={columns}
                data={filteredData}
               selectableRows
                pagination
                onSelectedRowsChange={handleSelectedRowsChange} // Handle selected rows change

              />
 </div>
          
           

    </div>
  );
};
export default Logs