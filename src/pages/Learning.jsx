import React from 'react'
import PageBanner from '../components/PageBanner'
import SectionHeader from '../components/SectionHeader'
import LessonCards from '../components/lessonCard/LessonCards';
import { Link, Outlet, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import Button from '../components/Button';


function Learning() {
  const {lesson_no}=useParams();
  console.log(lesson_no)
  return (
    <>
       <div className="container mx-auto">
        <PageBanner text="Learning Page" />
        <div className='mt-16'>
            {/* alphabet tutorial vedio */}
        <div className="mt-16 mb-10">
        <SectionHeader  heading="Learn Alphabets" subHeading='Master the basics with engaging alphabet lessons and exercises' />
        </div>
         <div className='mt-16' style={{ textAlign: 'center', marginTop: '20px'}}>
         <div style={{ position: 'relative', paddingTop: '56.25%' }}>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=ukwsC_k-Aag"
        playing
        muted
        controls
        width="100%"
        height="80%"
        style={{ position: 'absolute', top: 0, left: 0 }}
      />
      <div style={{ position: 'absolute',top:"85%",left:"50%",transform: 'translateX(-50%)' }}>
      <Link to='/tutorials'>
        <Button btnText='view more' />
      </Link>
      </div>
    </div>
          </div>
   
        <SectionHeader preHeading="Learn Better" heading="Lets Learn" subHeading="Start Your Vocabulary learning journey" />
        </div>
        {/* Lesson card */}
        <div className="">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 items-center justify-center my-16">
        {/* card-1 */}
        <Link to='/lesson/1' className="hover:scale-105 transition-transform">
            <div className="card animate__animated animate__slideInUp animate__duration-1000 border-2 border-lightBlue bg-white shadow-lg p-6 rounded-lg text-center">
              <h2 className="text-lg font-bold text-lightBlue">Lesson 1</h2>
              </div>
        </Link>
        {/* card-2 */}
        <Link to='/lesson/2' className="hover:scale-105 transition-transform">
            <div className="card animate__animated animate__slideInUp animate__duration-1000 border-2 border-lightBlue bg-white shadow-lg p-6 rounded-lg text-center">
              <h2 className="text-lg font-bold text-lightBlue">Lesson 2</h2>
              </div>
        </Link>
        {/* card-3 */}
        <Link to='/lesson/3' className="hover:scale-105 transition-transform">
            <div className="card animate__animated animate__slideInUp animate__duration-1000 border-2 border-lightBlue bg-white shadow-lg p-6 rounded-lg text-center">
              <h2 className="text-lg font-bold text-lightBlue">Lesson 3</h2>
              </div>
        </Link>
         {/* card-4 */}
         <Link to='/lesson/4' className="hover:scale-105 transition-transform">
            <div className="card animate__animated animate__slideInUp animate__duration-1000 border-2 border-lightBlue bg-white shadow-lg p-6 rounded-lg text-center">
              <h2 className="text-lg font-bold text-lightBlue">Lesson 4</h2>
              </div>
        </Link>
         {/* card-5 */}
         <Link to='/lesson/5' className="hover:scale-105 transition-transform">
            <div className="card animate__animated animate__slideInUp animate__duration-1000 border-2 border-lightBlue bg-white shadow-lg p-6 rounded-lg text-center">
              <h2 className="text-lg font-bold text-lightBlue">Lesson 5</h2>
              </div>
        </Link>
         {/* card-6 */}
         <Link to='/lesson/6' className="hover:scale-105 transition-transform">
            <div className="card animate__animated animate__slideInUp animate__duration-1000 border-2 border-lightBlue bg-white shadow-lg p-6 rounded-lg text-center">
              <h2 className="text-lg font-bold text-lightBlue">Lesson 6</h2>
              </div>
        </Link>
         {/* card-7 */}
         <Link to='/lesson/7' className="hover:scale-105 transition-transform">
            <div className="card animate__animated animate__slideInUp animate__duration-1000 border-2 border-lightBlue bg-white shadow-lg p-6 rounded-lg text-center">
              <h2 className="text-lg font-bold text-lightBlue">Lesson 7</h2>
              </div>
        </Link>
         {/* card-8 */}
         <Link to='/lesson/8' className="hover:scale-105 transition-transform">
            <div className="card animate__animated animate__slideInUp animate__duration-1000 border-2 border-lightBlue bg-white shadow-lg p-6 rounded-lg text-center">
              <h2 className="text-lg font-bold text-lightBlue">Lesson 8</h2>
              </div>
        </Link>
         {/* card-9 */}
         <Link to='/lesson/9' className="hover:scale-105 transition-transform">
            <div className="card animate__animated animate__slideInUp animate__duration-1000 border-2 border-lightBlue bg-white shadow-lg p-6 rounded-lg text-center">
              <h2 className="text-lg font-bold text-lightBlue">Lesson 9</h2>
              </div>
        </Link>
         {/* card-10 */}
         <Link to='/lesson/10' className="hover:scale-105 transition-transform">
            <div className="card animate__animated animate__slideInUp animate__duration-1000 border-2 border-lightBlue bg-white shadow-lg p-6 rounded-lg text-center">
              <h2 className="text-lg font-bold text-lightBlue">Lesson 10</h2>
              </div>
        </Link>

      </div>
      </div>
     
       </div>
    </>
  )
}

export default Learning