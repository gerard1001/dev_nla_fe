import SummaryCard from '@/components/SummaryCard'
import React from 'react'

const StatusCars = () => {
  return (
    <div>
      <div className="mt-2">
        <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5">
          <SummaryCard
            title="Pending cases"
            number="1 220"
            gradients={{ from: 'from-blue-600', to: 'to-blue-400' }}
            buttons={{
              primary: {
                default: 'bg-blue-500',
                hover: 'bg-blue-700',
              },
              secondary: {
                default: 'bg-blue-400',
                hover: 'bg-blue-600',
              },
            }}
          />
          {/* <div className="relative flex flex-col bg-clip-border rounded-xl bg-gradient-to-tr from-blue-600 to-blue-400 text-gray-700 shadow-md">
            <div className="flex m-5">
              <div className="flex items-center">
                <span className="">

                </span>
                <p className="flex items-center text-white ml-1 font-bold ">
                  Pending cases
                </p>
              </div>

              <div className="flex items-center ml-auto">
                <button className="hover:bg-white/30 rounded-md">
                  
                </button>
              </div>
            </div>

            <div className="ml-5">
              <h2 className="font-bold text-white text-2xl">1 220</h2>
            </div>

            <div className="flex flex-row m-5">
              <div>
                <button
                  style={{ borderRadius: 50 }}
                  className="bg-blue-500 hover:bg-blue-700 p-2 rounded-fill"
                >
                  
                </button>
              </div>
              <div>
                <button
                  style={{ borderRadius: 50 }}
                  className="bg-blue-400 text-white mx-3  mt-1 hover:bg-blue-600 p-2 rounded-fill"
                >
                  View all
                </button>
              </div>
            </div>
          </div> */}
          <SummaryCard
            title="Resolved Cases"
            number="1 220"
            gradients={{ from: 'from-yellow-600', to: 'to-yellow-400' }}
            buttons={{
              primary: {
                default: 'bg-black',
                hover: 'bg-opacity-60',
              },
              secondary: {
                default: 'bg-black',
                hover: 'bg-opacity-60',
              },
            }}
          />
          {/* <div className="relative flex flex-col bg-clip-border rounded-xl bg-gradient-to-tr from-yellow-600 to-yellow-400 text-gray-700 shadow-md">
            <div className="flex m-5 p-[-10px]">
              <div className="flex items-center ">
                <span className=""></span>
                <p className="flex items-center mr-3 text-white ml-1 font-bold ">
                  Resolved Cases
                </p>
              </div>
              <div className="relative inline-block text-left">
                <div>
                  <button
                    type="button"
                    className="inline-flex w-full my-[10px] justify-center gap-x-1.5 rounded-full border border-white px-3 py-2 text-sm font-semibold text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 text-white opacity-50 mr-3"
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                  >
                    Month
                  </button>
                </div>
              </div>
              <div className="flex items-center ml-auto">
                <button className="hover:bg-white/30 rounded-md">
                  
                </button>
              </div>
            </div>

            <div className="ml-5">
              <h2 className="font-bold text-white text-2xl">1 220</h2>
            </div>

            <div className="flex flex-row m-5">
              <div>
                <button
                  style={{ borderRadius: 50 }}
                  className="bg-black bg-opacity-50 hover:bg-opacity-60 p-2 rounded-fill"
                >
                  
                </button>
              </div>
              <div>
                <button
                  style={{ borderRadius: 50 }}
                  className="bg-black bg-opacity-50 text-white mx-3 mt-1 hover:bg-opacity-60 p-2 rounded-fill"
                >
                  View all
                </button>
              </div>
            </div>
          </div> */}
          <SummaryCard
            title="Submited Disputes"
            number="1 220"
            gradients={{ from: 'from-green-700', to: 'from-green-700' }}
            buttons={{
              primary: {
                default: 'bg-green-500',
                hover: 'bg-opacity-60',
              },
              secondary: {
                default: 'bg-green-500',
                hover: 'bg-opacity-60',
              },
            }}
          />
          {/* <div className="relative flex flex-col bg-clip-border rounded-xl bg-gradient-to-tr from-green-700 to-green-700 text-gray-700 shadow-md">
            <div className="flex m-5 p-[-10px]">
              <div className="flex items-center ">
                <span className=""></span>
                <p className="flex items-center mr-3 text-white ml-1 font-bold ">
                  Submited Disputes
                </p>
              </div>
              <div className="relative inline-block text-left">
                <div>
                  <button
                    type="button"
                    className="inline-flex w-full my-[10px] justify-center gap-x-1.5 rounded-full border border-white px-3 py-2 text-sm font-semibold text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 text-white opacity-50"
                    ml-2
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                  >
                    Month
                  </button>
                </div>
              </div>
              <div className="flex items-center ml-auto">
                <button className="hover:bg-white/30 rounded-md">
                  
                </button>
              </div>
            </div>

            <div className="ml-5">
              <h2 className="font-bold text-white text-2xl">1 339</h2>
            </div>

            <div className="flex flex-row m-5">
              <div>
                <button
                  style={{ borderRadius: 50 }}
                  className="bg-green-500 bg-opacity-50 hover:bg-opacity-60 p-2 rounded-fill"
                >
                  
                </button>
              </div>
              <div>
                <button
                  style={{ borderRadius: 50 }}
                  className="bg-green-500 bg-opacity-50 text-white mx-3  mt-1 hover:bg-opacity-60 p-2 rounded-fill"
                >
                  View all
                </button>
              </div>
            </div>
          </div> */}
          <SummaryCard
            title="District level cases"
            number="1 220"
            gradients={{ from: 'from-blue-600', to: 'to-blue-400' }}
            buttons={{
                primary: {
                    default: 'bg-blue-500',
                    hover: 'bg-blue-700',
                },
                secondary: {
                    default: 'bg-blue-400',
                    hover: 'bg-blue-600',
                },
            }}
          />
          {/* <div className="relative flex flex-col bg-clip-border rounded-xl bg-gradient-to-tr from-blue-600 to-blue-400 text-gray-700 shadow-md">
            <div className="flex m-5">
              <div className="flex items-center">
                <span className="">
                  
                </span>
                <p className="flex items-center text-white ml-1 font-bold ">
                  District level cases
                </p>
              </div>

              <div className="flex items-center ml-auto">
                <button className="hover:bg-white/30 rounded-md">
                  
                </button>
              </div>
            </div>

            <div className="ml-5">
              <h2 className="font-bold text-white text-2xl">1 220</h2>
            </div>

            <div className="flex flex-row m-5">
              <div>
                <button
                  style={{ borderRadius: 50 }}
                  className="bg-blue-500 hover:bg-blue-700 p-2 rounded-fill"
                >
                  
                </button>
              </div>
              <div>
                <button
                  style={{ borderRadius: 50 }}
                  className="bg-blue-400 text-white mx-3  mt-1 hover:bg-blue-600 p-2 rounded-fill"
                >
                  View all
                </button>
              </div>
            </div>
          </div> */}
          <SummaryCard
            title="Unsolved cases"
            number="1 220"
            gradients={{ from: 'from-pink-200', to: 'to-pink-100' }}
            buttons={{
                primary: {
                    default: 'bg-red-500',
                    hover: 'bg-opacity-50',
                },
                secondary: {
                    default: 'bg-red-500',
                    hover: 'bg-opacity-50',
                },
            }}
          />
          {/* <div className="relative flex flex-col bg-clip-border rounded-xl bg-gradient-to-tr from-pink-200 to-pink-100 text-gray-700 shadow-md">
            <div className="flex m-5">
              <div className="flex items-center">
                <p className="flex items-center text-red-600 ml-1 mr-4 font-bold ">
                  Unsolved
                </p>
              </div>
              <div className="relative inline-block text-left">
                <div>
                  <button
                    type="button"
                    className="inline-flex w-full my-[10px] justify-center gap-x-1.5 rounded-full border border-red-500 px-3 py-2 text-sm font-semibold text-red-500 shadow-sm ring-1 ring-inset ring-gray-300 text-white opacity-50"
                    ml-2
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                  >
                    <span className="text-red-800">Month</span>
                  </button>
                </div>
              </div>
              <div className="flex items-center ml-auto">
                <button className="hover:bg-red-200 rounded-md">

                </button>
              </div>
            </div>

            <div className="ml-5">
              <h2 className="font-bold text-red-500 text-2xl">1 220</h2>
            </div>

            <div className="flex flex-row m-5">
              <div>
                <button
                  style={{ borderRadius: 50 }}
                  className="bg-red-500 bg-opacity-30 hover:bg-opacity-50 p-2 rounded-fill"
                >
                  
                </button>
              </div>
              <div>
                <button
                  style={{ borderRadius: 50 }}
                  className="bg-red-500 bg-opacity-30 text-red-600 mx-3  mt-1 hover:bg-opacity-50 p-2 rounded-fill"
                >
                  View all
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default StatusCars
