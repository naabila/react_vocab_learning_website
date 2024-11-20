import React from 'react'
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import CountUp from "react-countup";
import bannerBg from "../assets/jp.jpg" 
import student from "../assets/student.jpg";
import learn from "../assets/learn.jpg";
import bgOverlay from "../assets/background.png";
import videoThumbnail from "../assets/videoThumbnail.jpg"
import SectionHeader from '../components/SectionHeader';
import { FaBook, FaCheck } from 'react-icons/fa';
import Button from '../components/Button';
import { TiTick } from 'react-icons/ti';
import { IoBarChartSharp } from 'react-icons/io5';
import { IoMdHappy } from 'react-icons/io';

function Home() {
  
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
      <h1 className="mb-5 text-center leading-16 text-5xl font-bold animate__animated animate__fadeInUp">Learn New Languages 
      <br />
      and Move Forward</h1>
      <p className="mb-5 animate__animated animate__fadeInUp">
      Unlock new opportunities by learning languages. Expand your horizons, embrace cultures, and boost your career. Start today, and move forward with confidence in a globally connected world!
      </p>
      <button onClick={()=>navigate("/lesson")} className="btn bg-lightBlue border-none hover:bg-lightBlue text-white animate__animated animate__fadeInUp">Get Started</button>
    </div>
  </div>
</div>
    {/* Banner */}

    <div className="container mx-auto flex items-center justify-center">
  <div className="grid grid-cols-1 md:grid-cols-2 my-16 items-center">
    <div className="mx-auto text-center md:text-left">
      <p className="animate__animated animate__fadeInUp text-lightBlue">About</p>
      <h2 className="text-4xl lg:text-5xl font-bold text-deepBlue my-4 animate__animated animate__fadeInUp">
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

{/* Counter section */}
<div className="container mx-auto my-16">
      <SectionHeader heading="Our Achievements" />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center mt-10">
        {/* Users Count */}
        <div className="card bg-lightBlue/10 shadow-md rounded-lg p-6 animate__animated animate__fadeInUp">
          <div className="text-5xl font-bold text-lightBlue">
            <CountUp start={0} end={15000} duration={2.5} suffix="+" />
          </div>
          <p className="text-lg mt-2 text-deepBlue font-semibold">Users</p>
        </div>

        {/* Lessons Count */}
        <div className="card animate__animated animate__fadeInUp bg-lightBlue/10 shadow-md rounded-lg p-6">
          <div className="text-5xl font-bold text-lightBlue">
            <CountUp start={0} end={200} duration={2.5} />
          </div>
          <p className="text-lg mt-2 text-deepBlue font-semibold">Lessons</p>
        </div>

        {/* Vocabulary Count */}
        <div className="card animate__animated animate__fadeInUp bg-lightBlue/10 shadow-md rounded-lg p-6">
          <div className="text-5xl font-bold text-lightBlue">
            <CountUp start={0} end={5000} duration={2.5} suffix="+" />
          </div>
          <p className="text-lg mt-2 text-deepBlue font-semibold">Vocabulary</p>
        </div>

        {/* Tutorials Count */}
        <div className="card animate__animated animate__fadeInUp bg-lightBlue/10 shadow-md rounded-lg p-6">
          <div className="text-5xl font-bold text-lightBlue">
            <CountUp start={0} end={120} duration={2.5} />
          </div>
          <p className="text-lg mt-2 text-deepBlue font-semibold">Tutorials</p>
        </div>
      </div>
</div>

{/* Multimedia section */}

<div className="container  mx-auto px-6 lg:px-16 my-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        {/* Left Content */}
        <div className='animate__animated animate__fadeInLeft md:mt-16'>
          <p className="text-lightBlue font-medium">Lifetime Digital Access</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-deepBlue mt-4">
            With Multimedia Content And Engaging Activities
          </h2>
          <p className="text-gray-600 mt-4">
          Interactive videos, quizzes, and engaging activities for immersive language learning and cultural exploration
          </p>
          <div className="flex flex-col md:flex-row gap-6 mt-6">
            {/* Roadmap Learning */}
            <div className="flex items-start">
              <FaCheck className="text-lightBlue mt-1" />
              <div className="ml-2">
                <h4 className="font-bold text-deepBlue">Roadmap Learning</h4>
                <p className="text-gray-600">Interactive videos, quizzes, and engaging activities for immersive language learning and cultural exploration</p>
              </div>
            </div>

            {/* Video Content */}
            <div className="flex items-start">
              <FaCheck className="text-pink-500 mt-1" />
              <div className="ml-2">
                <h4 className="font-bold text-deepBlue">150+ tutorials</h4>
                <p className="text-gray-600">Structured roadmap and 150+ tutorials to guide your learning journey</p>
              </div>
            </div>
          </div>

          <div className='mt-10'>
          <Link to="/lesson">
          <Button btnText="Learn more" />
          </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="animate__animated animate__fadeInRight relative">
          <img
            src={videoThumbnail}
            alt="Student"
            className="rounded-lg shadow-lg w-full"
          />
          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button
            onClick={()=>navigate("/lesson")}
             className="btn btn-circle bg-white text-orange-500 shadow-lg hover:scale-110">
              ▶
            </button>
          </div>
        </div>
      </div>
</div>

{/* Uniqe section 2 */}
<section className="bg-lightBlue/20 py-20 px-8"
style={{ backgroundImage: `url(${bgOverlay})`, backgroundSize: "cover", backgroundPosition: "top center" }}
>
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        {/*  Image */}
        <div className=" lg:w-1/2 flex justify-center mb-10 lg:mb-0 animate__animated animate__fadeInLeft">
          <img
            src={learn}
            alt="Person smiling"
            className="shadow-lg"
          />
        </div>

        {/* Right Side: Text and Features */}
        <div className="lg:w-1/2 animate__animated animate__fadeInRight">
          <h3 className="text-lightBlue mb-2">
            Join With Us
          </h3>
          <h1 className="text-4xl lg:text-5xl font-bold text-deepBlue mt-4">
            Find Out Why You Should Learn With Us
          </h1>
          <p className="text-gray-600 mb-8">
          Embark on your journey to mastering Japanese with our expertly crafted courses designed for all skill levels.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Feature Cards */}
            <div className="card shadow-md bg-base-100 p-4">
              <div className="flex items-center">
                <div className="text-primary text-3xl mr-4"><TiTick /></div>
                <div>
                  <h4 className="font-semibold">Create Account</h4>
                  <p className="text-sm text-gray-500">
                  Create an account to unlock personalized learning and track your progress effortlessly.
                  </p>
                </div>
              </div>
            </div>

            <div className="card shadow-md bg-base-100 p-4">
              <div className="flex items-center">
                <div className="text-success text-3xl mr-4"><FaBook /></div>
                <div>
                  <h4 className="font-semibold">Select Course</h4>
                  <p className="text-sm text-gray-500">
                  Choose from a variety of courses tailored to your learning goals and interests
                  </p>
                </div>
              </div>
            </div>

            <div className="card shadow-md bg-base-100 p-4">
              <div className="flex items-center">
                <div className="text-warning text-3xl mr-4"><IoBarChartSharp /></div>
                <div>
                  <h4 className="font-semibold">Learn Your Skill</h4>
                  <p className="text-sm text-gray-500">
                    
                  Explore inspiring success stories of learners who transformed their lives through our courses.
                  </p>
                </div>
              </div>
            </div>

            <div className="card shadow-md bg-base-100 p-4">
              <div className="flex items-center">
                <div className="text-info text-3xl mr-4"><IoMdHappy /></div>
                <div>
                  <h4 className="font-semibold">Success Story</h4>
                  <p className="text-sm text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

</>
  )
}

export default Home