import React from 'react'
import {  Link, useLoaderData, useNavigate, useParams } from 'react-router-dom'
import PageBanner from '../components/PageBanner';
import Button from '../components/Button';
import SectionHeader from '../components/SectionHeader';

function MatchedLesson() {
  const matchedData=useLoaderData();
  const {lesson_no}=useParams()
  console.log(matchedData,lesson_no);
const navigate=useNavigate()
  const handleClick = () => {
    navigate('/lesson');
  };

  return (
    <>
     <div className="container mx-auto">
     <PageBanner text={`Lesson ${lesson_no}`} ></PageBanner>
     <div className='mt-20'>
      <SectionHeader preHeading='Sorted' heading="Vocabulary Vault" subHeading="Explore lessons categorized for focused and effective language learning." />
     </div>
     {/* lesson cards */}
     <div className="grid animate__animated animate__fadeIn animation__duration-3000 mt-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {
        matchedData.map((data)=>{
          return(
            <div 
  key={data.id} 
  className={`card ${
    data.difficulty === "easy"
      ? "bg-green-500/20"
      : data.difficulty === "medium"
      ? "bg-yellow-600/40"
      : "bg-red-600/60"
  } text-darkBlue`}
>
  <div className="card-body items-center text-center gap-3">
    <h2 className="card-title">{data.word}</h2>
    <p>Meaning: {data.meaning}</p>
    <p><span className='font-bold'>When to say</span>: {data.when_to_say}</p>
    <p><span className='font-bold'>Example</span>: {data.example}</p>
    <div className="card-actions justify-end">
      <Link to="/lesson"><Button  btnText="Back to leson"></Button></Link>
      
    </div>
  </div>
</div>
          )
        })
      }
     </div>
    
     </div>
    </>
  )
}

export default MatchedLesson
