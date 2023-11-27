import React from 'react'
import FileIcon from '../resources/FileIcon'
import AddIcon from '@/resources/AddIcon'
import MenuIcon from '@/resources/MenuIcon'

const SummaryCard = ({ title, number, gradients, buttons }) => {
  return (
    <div className={`relative flex flex-col bg-clip-border rounded-xl bg-gradient-to-tr ${gradients?.from} ${gradients?.to} text-gray-700 shadow-md`}>
      <div className="flex m-5">
        <div className="flex items-center">
          <span className="">
            <FileIcon />
          </span>
          <p className="flex items-center text-white ml-1 font-bold ">
            {title}
          </p>
        </div>

        <div className="flex items-center ml-auto">
          <button className="hover:bg-white/30 rounded-md">
            <MenuIcon />
          </button>
        </div>
      </div>

      <div className="ml-5">
        <h2 className="font-bold text-white text-2xl">{number}</h2>
      </div>

      <div className="flex flex-row m-5">
        <div>
          <button
            style={{ borderRadius: 50 }}
            className={`${buttons.primary.default} hover:${buttons.primary.hover} p-2 rounded-fill`}
          >
            <AddIcon />
          </button>
        </div>
        <div>
          <button
            style={{ borderRadius: 50 }}
            className={`${buttons.secondary.default} text-white mx-3  mt-1 hover:${buttons.secondary.hover} p-2 rounded-fill`}
          >
            View all
          </button>
        </div>
      </div>
    </div>
  )
}

export default SummaryCard
