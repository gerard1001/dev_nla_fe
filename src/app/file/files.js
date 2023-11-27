"use client"

import Link from 'next/link';
import React, { useEffect, useState } from 'react'

import { useContext } from 'react'

import DataTable from 'react-data-table-component';


const Files = () => {
    const [searchText, setSearchText] = useState("")
    const [selectedRows, setSelectedRows] = useState([]);
	const [toggleCleared, setToggleCleared] = React.useState(false);
     const files = [
       
        {
          "id": 1,
          "name": "File1",
          "size": "10 MB",
          "date": "2023-11-22",
          "lasta": "2023-11-22",
          "autho": "User1"
        },
        {
          "id": 2,
          "name": "File2",
          "size": "8 MB",
          "date": "2023-11-21",
          "lasta": "2023-11-21",
          "autho": "User2"
        },
        // Add more files as needed
        {
          "id": 3,
          "name": "File3",
          "size": "15 MB",
          "date": "2023-11-20",
          "lasta": "2023-11-20",
          "autho": "User3"
        },
        {
          "id": 4,
          "name": "File4",
          "size": "12 MB",
          "date": "2023-11-19",
          "lasta": "2023-11-19",
          "autho": "User4"
        },
        {
          "id": 5,
          "name": "File5",
          "size": "18 MB",
          "date": "2023-11-18",
          "lasta": "2023-11-18",
          "autho": "User5"
        },
        {
          "id": 6,
          "name": "File6",
          "size": "14 MB",
          "date": "2023-11-17",
          "lasta": "2023-11-17",
          "autho": "User6"
        },
        {
          "id": 7,
          "name": "File7",
          "size": "11 MB",
          "date": "2023-11-16",
          "lasta": "2023-11-16",
          "autho": "User7"
        },
        {
          "id": 8,
          "name": "File8",
          "size": "9 MB",
          "date": "2023-11-15",
          "lasta": "2023-11-15",
          "autho": "User8"
        },
        {
          "id": 9,
          "name": "File9",
          "size": "13 MB",
          "date": "2023-11-14",
          "lasta": "2023-11-14",
          "autho": "User9"
        },
        {
          "id": 10,
          "name": "File10",
          "size": "16 MB",
          "date": "2023-11-13",
          "lasta": "2023-11-13",
          "autho": "User10"
        },
      ];
    const handleSelectedRowsChange = (state) => {
      setSelectedRows(state.selectedRows);
    };
    const contextActions = React.useMemo(() => {
		const handleDelete = () => {
			
			if (window.confirm(`Are you sure you want to delete:\r ${selectedRows.map(r => r.title)}?`)) {
				setToggleCleared(!toggleCleared);
				setData(differenceBy(files, selectedRows, 'title'));
			}
		};

		return (
			<button key="delete" onClick={handleDelete} style={{ backgroundColor: 'red' }} icon>
				Delete
			</button>
		);
	}, [files, selectedRows, toggleCleared]);
   
      
  
  const columns = [
   
    
    {
      name: 'File name',
      cell: (row) => (
        <>
         <div style={{background:"rgba(191, 219, 254, 1)",borderRadius:50}} className='h-10 flex items-center justify-center w-10 rounded-fill text-center'>
         <svg height={30} className='m-2' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M19 9V17.8C19 18.9201 19 19.4802 18.782 19.908C18.5903 20.2843 18.2843 20.5903 17.908 20.782C17.4802 21 16.9201 21 15.8 21H8.2C7.07989 21 6.51984 21 6.09202 20.782C5.71569 20.5903 5.40973 20.2843 5.21799 19.908C5 19.4802 5 18.9201 5 17.8V6.2C5 5.07989 5 4.51984 5.21799 4.09202C5.40973 3.71569 5.71569 3.40973 6.09202 3.21799C6.51984 3 7.0799 3 8.2 3H13M19 9L13 3M19 9H14C13.4477 9 13 8.55228 13 8V3" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
         </div>
         <p className='mx-2 text-gray-500'>{row.name}</p>

         </>
        
      ),
      sortable: true,
    },
  
    {
      name: 'File Size',
      selector: 'size',
      sortable: true,
    },
    {
      name: 'Date uploaded',
      selector: 'date',
      sortable: true,
    },
    {
        name: 'Last updated',
        selector: 'lasta',
        sortable: true,
      },
      {
        name: 'Uploaded by',
        selector: 'autho',
        sortable: true,
      },
    {
      name: 'Actions',
      cell: (row) => (
        <>
          <div>

<div className='grid grid-cols-3'>
  <div>
    
    
    <button className='text-blue-500'> <svg height={25} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z" stroke="blue" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z" stroke="blue" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg> View
    
    </button>
    
     </div>
  
  
  <div>
    <Link href="/useredit">
  <button className='text-green-500'> <svg viewBox="0 -0.5 25 25" height={25} fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7 5.12758L19.266 6.37458C19.4172 6.51691 19.5025 6.71571 19.5013 6.92339C19.5002 7.13106 19.4128 7.32892 19.26 7.46958L18.07 8.89358L14.021 13.7226C13.9501 13.8037 13.8558 13.8607 13.751 13.8856L11.651 14.3616C11.3755 14.3754 11.1356 14.1751 11.1 13.9016V11.7436C11.1071 11.6395 11.149 11.5409 11.219 11.4636L15.193 6.97058L16.557 5.34158C16.8268 4.98786 17.3204 4.89545 17.7 5.12758Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12.033 7.61865C12.4472 7.61865 12.783 7.28287 12.783 6.86865C12.783 6.45444 12.4472 6.11865 12.033 6.11865V7.61865ZM9.23301 6.86865V6.11865L9.23121 6.11865L9.23301 6.86865ZM5.50001 10.6187H6.25001L6.25001 10.617L5.50001 10.6187ZM5.50001 16.2437L6.25001 16.2453V16.2437H5.50001ZM9.23301 19.9937L9.23121 20.7437H9.23301V19.9937ZM14.833 19.9937V20.7437L14.8348 20.7437L14.833 19.9937ZM18.566 16.2437H17.816L17.816 16.2453L18.566 16.2437ZM19.316 12.4937C19.316 12.0794 18.9802 11.7437 18.566 11.7437C18.1518 11.7437 17.816 12.0794 17.816 12.4937H19.316ZM15.8863 6.68446C15.7282 6.30159 15.2897 6.11934 14.9068 6.2774C14.5239 6.43546 14.3417 6.87397 14.4998 7.25684L15.8863 6.68446ZM18.2319 9.62197C18.6363 9.53257 18.8917 9.13222 18.8023 8.72777C18.7129 8.32332 18.3126 8.06792 17.9081 8.15733L18.2319 9.62197ZM8.30001 16.4317C7.8858 16.4317 7.55001 16.7674 7.55001 17.1817C7.55001 17.5959 7.8858 17.9317 8.30001 17.9317V16.4317ZM15.767 17.9317C16.1812 17.9317 16.517 17.5959 16.517 17.1817C16.517 16.7674 16.1812 16.4317 15.767 16.4317V17.9317ZM12.033 6.11865H9.23301V7.61865H12.033V6.11865ZM9.23121 6.11865C6.75081 6.12461 4.7447 8.13986 4.75001 10.6203L6.25001 10.617C6.24647 8.96492 7.58269 7.62262 9.23481 7.61865L9.23121 6.11865ZM4.75001 10.6187V16.2437H6.25001V10.6187H4.75001ZM4.75001 16.242C4.7447 18.7224 6.75081 20.7377 9.23121 20.7437L9.23481 19.2437C7.58269 19.2397 6.24647 17.8974 6.25001 16.2453L4.75001 16.242ZM9.23301 20.7437H14.833V19.2437H9.23301V20.7437ZM14.8348 20.7437C17.3152 20.7377 19.3213 18.7224 19.316 16.242L17.816 16.2453C17.8195 17.8974 16.4833 19.2397 14.8312 19.2437L14.8348 20.7437ZM19.316 16.2437V12.4937H17.816V16.2437H19.316ZM14.4998 7.25684C14.6947 7.72897 15.0923 8.39815 15.6866 8.91521C16.2944 9.44412 17.1679 9.85718 18.2319 9.62197L17.9081 8.15733C17.4431 8.26012 17.0391 8.10369 16.6712 7.7836C16.2897 7.45165 16.0134 6.99233 15.8863 6.68446L14.4998 7.25684ZM8.30001 17.9317H15.767V16.4317H8.30001V17.9317Z" fill="#000000"></path> </g></svg> Edit
  </button>
  </Link>
   </div>
  <div><button className='text-red-500'><svg viewBox="0 0 24 24" height={25} fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 12V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14 12V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4 7H20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg> Delete</button> </div>

</div>
          
          </div>
        </>
      ),
      sortable: true,
    },

  ];



  const filteredData = files.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase()) ||
    item.size.toLowerCase().includes(searchText.toLowerCase()) || 
    item.autho.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="container">

        
 <div className='bg-white p-2 rounded-md my-3'>
 <div className="flex ">

<h2 className="text-2xl">Files Uploaded</h2>

<div className='rounded-md flex ml-auto'>
<button style={{borderRadius:10}} className='bg-white-700 text-gray-500 mx-3 ml-auto  mt-1 hover:bg-white-600 border mr-[-20px] border-gray p-2'>Download All</button>
<button style={{borderRadius:10}} className='bg-blue-700 flex text-white mx-3 ml-auto  mt-1 hover:bg-blue-600 p-2'>
<svg height={30} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 16L12 12M12 12L16 16M12 12V21M20 16.7428C21.2215 15.734 22 14.2079 22 12.5C22 9.46243 19.5376 7 16.5 7C16.2815 7 16.0771 6.886 15.9661 6.69774C14.6621 4.48484 12.2544 3 9.5 3C5.35786 3 2 6.35786 2 10.5C2 12.5661 2.83545 14.4371 4.18695 15.7935" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg> 
 
 <span className='pl-1'> Upload</span></button>
<input
  className='p-2  w-30 rounded-md'
  type="text"
  placeholder="Search file.."
  value={searchText}
  onChange={(e) => setSearchText(e.target.value)}
  style={{ width: "30%", border: "2px solid rgb(18, 43, 226,0.7)" }}
/>
</div>

</div>
          <h5 className='text-muted fw-bold bg-green-500 w-[100px] rounded-md px-1'>Users 300+ </h5>
              <DataTable
                columns={columns}
                data={filteredData}
                selectableRows 
                onSelectedRowsChange={handleSelectedRowsChange} // Handle selected rows change
                contextActions={contextActions}
                clearSelectedRows={toggleCleared}
                pagination
              />
 </div>
          
           

    </div>
  );
};
export default Files