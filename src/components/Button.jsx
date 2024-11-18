import React from 'react'

function Button({btnText}) {
  return (
    <>
        <a className="btn bg-lightBlue text-white hover:bg-white hover:text-deepBlue border">{btnText}</a>
    </>
  )
}

export default Button