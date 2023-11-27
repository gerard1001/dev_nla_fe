"use client"
import React from 'react'
import { useState } from 'react';
import DataTable from 'react-data-table-component';
import Link from 'next/link';

const Access = () => {
    const [searchText, setSearchText] = useState("")
    const [selectedRows, setSelectedRows] = useState([]);
	const [toggleCleared, setToggleCleared] = React.useState(false);
  const data = [
    {
      name: "John Doe",
      loginmail: "john@example.com",
      role: "Developer",
      projectname: "Project A",
      percentage: 90,
      time: "10:00 AM"
    },
    {
      name: "Jane Smith",
      loginmail: "jane@example.com",
      role: "Designer",
      projectname: "Project B",
      percentage: 45,
      time: "11:30 AM"
    },
    {
      name: "Bob Johnson",
      loginmail: "bob@example.com",
      role: "Tester",
      projectname: "Project C",
      percentage: 90,
      time: "2:45 PM"
    },
    {
      name: "Alice Williams",
      loginmail: "alice@example.com",
      role: "Manager",
      projectname: "Project D",
      percentage: 60,
      time: "4:15 PM"
    },
    {
      name: "Charlie Brown",
      loginmail: "charlie@example.com",
      role: "Analyst",
      projectname: "Project E",
      percentage: 75,
      time: "5:30 PM"
    },
    {
      name: "Eva Davis",
      loginmail: "eva@example.com",
      role: "Engineer",
      projectname: "Project F",
      percentage: 85,
      time: "8:00 AM"
    },
    {
      name: "Frank Miller",
      loginmail: "frank@example.com",
      role: "Architect",
      projectname: "Project G",
      percentage: 40,
      time: "1:00 PM"
    },
    {
      name: "Grace Turner",
      loginmail: "grace@example.com",
      role: "QA",
      projectname: "Project H",
      percentage: 55,
      time: "3:30 PM"
    },
    {
      name: "Henry White",
      loginmail: "henry@example.com",
      role: "Support",
      projectname: "Project I",
      percentage: 70,
      time: "6:45 PM"
    },
    {
      name: "Ivy Lee",
      loginmail: "ivy@example.com",
      role: "Coordinator",
      projectname: "Project J",
      percentage: 95,
      time: "9:15 AM"
    }
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
	}, [data, selectedRows, toggleCleared]);
   
      
  
  const columns = [
   
    
    {
      name: 'Names',
      cell: (row) => (
        <>
         <div  className=' flex items-center justify-center  rounded-fill text-center'>
         <img src="https://switchiify.net.rw/u/assets/img/profile.png" alt="" style={{ width: 50, height: 50, borderRadius: 50, marginBlock: 5 }} />
         </div>
         <p className='mx-2 text-gray-500'>{row.name}</p>

         </>
        
      ),
      sortable: true,
    },
  
    {
      name: 'Login mail',
      selector: 'loginmail',
      sortable: true,
    },
    {
      name: 'Role',
      selector: 'role',
      sortable: true,
    },
    {
        name: 'Project',
        selector: 'projectname',
        sortable: true,
      },
      {
        name: 'Time',
        selector: 'time',
        sortable: true,
      },
    {
      name: 'Status',
      cell: (row) => (
        <>
        <div>{row.percentage}
          {}
  {row.percentage >= 90 ? (
    <>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-100">
        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: 100 }}></div>
      </div>
    </>
  ) : (
    <>
      {row.percentage >= 80 && row.percentage < 90 ? (
        <>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-100">
            <div className="bg-green-600 h-2.5 rounded-full dark:bg-green-500" style={{ width: 80 }}></div>
          </div>
        </>
      ) : (
        <>
          {row.percentage >= 50 && row.percentage < 70 ? (
            <>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-100">
                <div className="bg-yellow-400 h-2.5 rounded-full" style={{ width: 50 }}></div>
              </div>
            </>
          ) : (
            <>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-100">
                <div className="bg-red-600 h-2.5 rounded-full dark:bg-red-500"  style={{ width: 30 }}></div>
              </div>
            </>
          )}
        </>
      )}
    </>
  )}
</div>

        </>
      ),
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



  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase()) ||
    item.projectname.toLowerCase().includes(searchText.toLowerCase()) || 
    item.role.toLowerCase().includes(searchText.toLowerCase()) || 

    item.time.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
         <div>
        <h3 className='flex mb-1 font-bold  items-center opacity-70 text-lg'>
        <svg  fill="#000000" height="20px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xmlSpace="preserve">
  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
  <g id="SVGRepo_iconCarrier">
    <g id="XMLID_467_">
      <path id="XMLID_468_" d="M15,60h107.58c6.192,17.459,22.865,30,42.42,30s36.227-12.541,42.42-30H315c8.284,0,15-6.716,15-15 s-6.716-15-15-15H207.42C201.227,12.542,184.555,0,165,0s-36.227,12.542-42.42,30H15C6.716,30,0,36.716,0,45S6.716,60,15,60z M165,30c8.271,0,15,6.729,15,15s-6.729,15-15,15s-15-6.729-15-15S156.729,30,165,30z"></path>
      <path id="XMLID_472_" d="M315,150h-77.58c-6.192-17.458-22.865-30-42.42-30s-36.227,12.542-42.42,30H15c-8.284,0-15,6.716-15,15 s6.716,15,15,15h137.58c6.192,17.458,22.865,30,42.42,30s36.227-12.542,42.42-30H315c8.284,0,15-6.716,15-15S323.284,150,315,150z M195,180c-8.271,0-15-6.729-15-15s6.729-15,15-15s15,6.729,15,15S203.271,180,195,180z"></path>
      <path id="XMLID_475_" d="M315,270H177.42c-6.192-17.458-22.865-30-42.42-30s-36.228,12.542-42.42,30H15c-8.284,0-15,6.716-15,15 s6.716,15,15,15h77.58c6.192,17.458,22.865,30,42.42,30s36.227-12.542,42.42-30H315c8.284,0,15-6.716,15-15S323.284,270,315,270z M135,300c-8.271,0-15-6.729-15-15s6.729-15,15-15s15,6.729,15,15S143.271,300,135,300z"></path>
    </g>
  </g>
</svg>
 {" "} Access Control {`>`}</h3>

<div className='bg-white p-3 rounded-md'>
    <h1 className='text-2xl'>Search Filters</h1>
 <div className='grid gap-6  md:grid-cols-3 '>
    
   
<div>

<select id="large" className="bg-white-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected>Select Role</option>
  <option value="US">United States</option>
  <option value="CA">Canada</option>
  <option value="FR">France</option>
  <option value="DE">Germany</option>
</select>
</div>

<div>
<select id="large" className="bg-white-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected>Invoice Date</option>
  <option value="US">United States</option>
  <option value="CA">Canada</option>
  <option value="FR">France</option>
  <option value="DE">Germany</option>
</select>
</div>
<div>
<select id="large" className="bg-white-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected>Invoice Status</option>
  <option value="US">United States</option>
  <option value="CA">Canada</option>
  <option value="FR">France</option>
  <option value="DE">Germany</option>
</select>
</div>
 </div>
        </div>
    </div>


    <div>

        
    <div className='bg-white p-2 rounded-md my-3'>
    <div className="flex ">

    <button style={{borderRadius:10}} className='bg-white-700 text-gray-500 mx-3  flex  mt-1 hover:bg-white-600 border mr-[-20px] border-gray p-2'> <svg height={20} style={{marginInline:3}} fill="gray" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" transform="matrix(-1, 0, 0, 1, 0, 0)rotate(90)" stroke="gray"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M16 13v-2H7V8l-5 4 5 4v-3z"></path><path d="M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z"></path></g></svg> EXPORT</button>

    <div className='rounded-md flex felx-row ml-auto'>
    <input
    className='p-2   rounded-md mx-2'
    type="text"
    
    placeholder="Search Invoice.."
    value={searchText}
    onChange={(e) => setSearchText(e.target.value)}
    style={{  border: "2px solid rgb(18, 43, 226,0.7)" }}
    />
    <button style={{borderRadius:10}} className='bg-blue-700 flex text-white  ml-auto  mt-1 hover:bg-blue-600 p-2'>
    
    <span className='pl-1'> Add user</span></button>
    <button style={{borderRadius:10}} className='flex text-white  ml-auto  mt-1 hover:bg-gray-200 p-2'>
    
    <svg height={25} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M13.75 5C13.75 5.9665 12.9665 6.75 12 6.75C11.0335 6.75 10.25 5.9665 10.25 5C10.25 4.0335 11.0335 3.25 12 3.25C12.9665 3.25 13.75 4.0335 13.75 5ZM13.75 19C13.75 19.9665 12.9665 20.75 12 20.75C11.0335 20.75 10.25 19.9665 10.25 19C10.25 18.0335 11.0335 17.25 12 17.25C12.9665 17.25 13.75 18.0335 13.75 19ZM12 13.75C12.9665 13.75 13.75 12.9665 13.75 12C13.75 11.0335 12.9665 10.25 12 10.25C11.0335 10.25 10.25 11.0335 10.25 12C10.25 12.9665 11.0335 13.75 12 13.75Z" fill="#000000"></path> </g></svg></button>
    </div>

    </div>
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
    </div>
  )
}

export default Access