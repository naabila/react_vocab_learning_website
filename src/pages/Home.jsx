import React from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom';
import bannerBg from "../assets/jp.jpg" 

function Home() {
  let data=useLoaderData();
  const navigate=useNavigate()
  return (
    <>
    {/* Banner */}
    <div
  className="hero min-h-screen"
  style={{
  backgroundImage: `url(${bannerBg})`,
  backgroundSize: "cover",
  backgroundPosition: "center center",
  backgroundColor: "#f0f0f0",
}}
>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-lg">
      <h1 className="mb-5 text-center leading-16 text-5xl font-bold">Learn New Languages 
      <br />
      and Move Forward</h1>
      <p className="mb-5">
      Unlock new opportunities by learning languages. Expand your horizons, embrace cultures, and boost your career. Start today, and move forward with confidence in a globally connected world!
      </p>
      <button onClick={()=>navigate("/lesson")} className="btn bg-lightBlue border-none hover:bg-lightBlue text-white">Get Started</button>
    </div>
  </div>
</div>
    {/* Banner */}
    </>
  )
}

export default Home