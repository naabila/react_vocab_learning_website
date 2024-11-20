import React from 'react'
import PageBanner from '../components/PageBanner'
import student from "../assets/student.jpg"
function About() {
  return (
   <>
     <div className="container mx-auto">
      <PageBanner text="About Us" />
    </div>
    <div className="container mx-auto flex items-center justify-center">
  <div className="grid grid-cols-1 md:grid-cols-2 my-16 items-center">
    <div className="mx-auto text-center md:text-left">
      <p className="animate__animated animate__fadeInUp text-lightBlue">About</p>
      <h2 className="my-3 text-deepBlue font-bold text-4xl animate__animated animate__fadeInUp">
        We are Dedicated to the Best of Japanese Course
      </h2>
      <p className="animate__animated animate__fadeInUp">
        Embark on your journey to mastering Japanese with our expertly crafted courses designed for all skill levels. Whether you're learning for travel, business, or personal growth, we are committed to delivering the best. Our experienced instructors, immersive materials, and interactive lessons help you build fluency and cultural understanding. From basic hiragana and katakana to advanced kanji and conversational skills, we cover every aspect to suit your goals. Enjoy personalized guidance, flexible schedules, and a supportive learning environment. Discover the beauty of the Japanese language and culture while achieving your language goals with confidence and ease.
      </p>
    </div>
    <div className="flex justify-center">
      <img
        src={student}
        className="h-[500px] animate__animated animate__fadeIn self-center"
        alt="student"
      />
    </div>
  </div>
</div>
   </>
    
  )
}

export default About