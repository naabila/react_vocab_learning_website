import React from 'react';
import { Link, useLoaderData, useNavigate, useParams } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import Button from '../components/Button';
import SectionHeader from '../components/SectionHeader';
import { AiFillSound } from 'react-icons/ai';

function MatchedLesson() {
  const matchedData = useLoaderData();
  const { lesson_no } = useParams();
  const navigate = useNavigate();

  // Function to navigate back
  const handleClick = () => {
    navigate('/lesson');
  };

  // Modal opening
  const openModal = (id) => {
    const modal = document.getElementById(id);
    if (modal) {
      modal.showModal();
    }
  };

  // Function to close modal by ID
  const closeModal = (id) => {
    const modal = document.getElementById(id);
    if (modal) {
      modal.close();
    }
  };

  //Pronounciation functionality
  function pronounceWord(word) {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'ja-JP'; // Japanese
    window.speechSynthesis.speak(utterance);
  }
  return (
    <>
      <div className="container mx-auto">
        <PageBanner text={`Lesson ${lesson_no}`} />
        <div className="mt-20">
          <SectionHeader
            preHeading="Sorted"
            heading="Vocabulary Vault"
            subHeading="Explore lessons categorized for focused and effective language learning."
          />
        </div>

        {/* Lesson cards */}
        <div className="grid animate__animated animate__fadeIn animation__duration-3000 mt-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {matchedData.map((data) => {
            const modalId = `modal-${data.id}`; // Unique ID for each modal
            return (
              <div
             
                key={data.id}
                className={`card ${
                  data.difficulty === 'easy'
                    ? 'bg-green-500/20'
                    : data.difficulty === 'medium'
                    ? 'bg-yellow-600/40'
                    : 'bg-red-600/60'
                } text-darkBlue`}
              >
                <div className="card-body items-center text-center gap-3">
                  <h2 className="card-title">{data.word}</h2>
                  <p>Meaning: {data.meaning}</p>
                  <p>
                    <span className="font-bold">Part of speech</span>: {data.part_of_speech}
                  </p>
                  <p className='flex items-center gap-2' onClick={()=>pronounceWord(data.word)}>
                    <span className="font-bold">Pronounce</span>: <AiFillSound />
                  </p>

                  {/* Modal */}
                  <dialog id={modalId} className="modal">
                    <div className="modal-box">
                      <button
                        onClick={() => closeModal(modalId)}
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                      >
                        ✕
                      </button>
                      <h3 className="font-bold text-lg">When to use {data.word}</h3>
                      <p className="py-4">{data.example}</p>
                    </div>
                  </dialog>

                 

                  {/* Back to Lesson button */}
                  <div className="card-actions justify-end">
                   {/* Modal button */}
                   <button
                    onClick={() => openModal(modalId)}
                    className="btn bg-lightBlue text-white hover:bg-white hover:text-deepBlue border"
                  >
                    When to say
                  </button>
                    <Link to="/lesson">
                      <Button btnText="Back to lesson" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default MatchedLesson;
