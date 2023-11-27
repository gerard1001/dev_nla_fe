import React, { Fragment } from 'react'

const MenuIcon = () => {
  return (
    <Fragment>
      <svg
        height={30}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#dedede"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {' '}
          <circle
            cx="18"
            cy="12"
            r="1.5"
            transform="rotate(90 18 12)"
            fill="#ffffff"
          ></circle>{' '}
          <circle
            cx="12"
            cy="12"
            r="1.5"
            transform="rotate(90 12 12)"
            fill="#ffffff"
          ></circle>{' '}
          <circle
            cx="6"
            cy="12"
            r="1.5"
            transform="rotate(90 6 12)"
            fill="#ffffff"
          ></circle>{' '}
        </g>
      </svg>
    </Fragment>
  )
}

export default MenuIcon
