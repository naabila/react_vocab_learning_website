import React from 'react'
import { Link, useLoaderData} from 'react-router-dom'
import Card from "../lessonCard/Card"
function LessonCards() {
  const data=useLoaderData()
  console.log(data)
  return (
    <>
      <div className="">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 items-center justify-center mt-10">
        {/* card-1 */}
        <Link to='/lesson/:lesson_no' className="hover:scale-105 transition-transform">
            <div className="card animate__animated animate__slideInUp animate__duration-1000 border-2 border-lightBlue bg-white shadow-lg p-6 rounded-lg text-center">
              <h2 className="text-lg font-bold text-lightBlue">Lesson 1</h2>
              </div>
        </Link>
        {/* card-2 */}
        <Link className="hover:scale-105 transition-transform">
            <div className="card animate__animated animate__slideInUp animate__duration-1000 border-2 border-lightBlue bg-white shadow-lg p-6 rounded-lg text-center">
              <h2 className="text-lg font-bold text-lightBlue">Lesson 2</h2>
              </div>
        </Link>
        {/* card-3 */}
        <Link className="hover:scale-105 transition-transform">
            <div className="card animate__animated animate__slideInUp animate__duration-1000 border-2 border-lightBlue bg-white shadow-lg p-6 rounded-lg text-center">
              <h2 className="text-lg font-bold text-lightBlue">Lesson 3</h2>
              </div>
        </Link>
         {/* card-4 */}
         <Link className="hover:scale-105 transition-transform">
            <div className="card animate__animated animate__slideInUp animate__duration-1000 border-2 border-lightBlue bg-white shadow-lg p-6 rounded-lg text-center">
              <h2 className="text-lg font-bold text-lightBlue">Lesson 4</h2>
              </div>
        </Link>
         {/* card-5 */}
         <Link className="hover:scale-105 transition-transform">
            <div className="card animate__animated animate__slideInUp animate__duration-1000 border-2 border-lightBlue bg-white shadow-lg p-6 rounded-lg text-center">
              <h2 className="text-lg font-bold text-lightBlue">Lesson 5</h2>
              </div>
        </Link>
         {/* card-6 */}
         <Link className="hover:scale-105 transition-transform">
            <div className="card animate__animated animate__slideInUp animate__duration-1000 border-2 border-lightBlue bg-white shadow-lg p-6 rounded-lg text-center">
              <h2 className="text-lg font-bold text-lightBlue">Lesson 6</h2>
              </div>
        </Link>
         {/* card-7 */}
         <Link className="hover:scale-105 transition-transform">
            <div className="card animate__animated animate__slideInUp animate__duration-1000 border-2 border-lightBlue bg-white shadow-lg p-6 rounded-lg text-center">
              <h2 className="text-lg font-bold text-lightBlue">Lesson 7</h2>
              </div>
        </Link>
         {/* card-8 */}
         <Link className="hover:scale-105 transition-transform">
            <div className="card animate__animated animate__slideInUp animate__duration-1000 border-2 border-lightBlue bg-white shadow-lg p-6 rounded-lg text-center">
              <h2 className="text-lg font-bold text-lightBlue">Lesson 8</h2>
              </div>
        </Link>
         {/* card-9 */}
         <Link className="hover:scale-105 transition-transform">
            <div className="card animate__animated animate__slideInUp animate__duration-1000 border-2 border-lightBlue bg-white shadow-lg p-6 rounded-lg text-center">
              <h2 className="text-lg font-bold text-lightBlue">Lesson 9</h2>
              </div>
        </Link>
         {/* card-10 */}
         <Link className="hover:scale-105 transition-transform">
            <div className="card animate__animated animate__slideInUp animate__duration-1000 border-2 border-lightBlue bg-white shadow-lg p-6 rounded-lg text-center">
              <h2 className="text-lg font-bold text-lightBlue">Lesson 10</h2>
              </div>
        </Link>

      </div>
      </div>
    </>
  )
}

export default LessonCards