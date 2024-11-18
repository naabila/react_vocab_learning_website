import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Home() {
  let data=useLoaderData();
  console.log(data)
  return (
    <div>Home</div>
  )
}

export default Home