import { useState } from 'react'
import kit from '../assets/images/review-users/kit.jpeg'
import emily from '../assets/images/review-users/emily.jpg'
import john from '../assets/images/review-users/john.jpg'
import '../App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()

const reviews = [
  {
    image: kit,
    alt: 'Kit Moginie',
    quote:
      'Turned an idea into a product that has vastly enhanced our customer experience. Great to deal with from inception through to delivery, thanks Fliight Crew!',
    name: 'Chris Moginie',
    role: 'Marketing Manager',
  },
  {
    image: emily,
    alt: 'Another User',
    quote:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem perferendis reprehenderit nostrum, tenetur asperiores tempora.',
    name: 'Jenna Smith',
    role: 'Film Director',
  },
  {
    image: john,
    alt: 'Someone Else',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, odit.',
    name: 'Spooky Man',
    role: 'Slender Mans Manager',
  },
]

function ReviewCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [fadeClass, setFadeClass] = useState('fade-in');

  function changeReview(newIndex) {
    setFadeClass('fade-out');
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setFadeClass('fade-in');
    }, 500); // This should match your CSS animation duration
  }

  function goToPreviousReview() {
    const newIndex = (currentIndex - 1 + reviews.length) % reviews.length;
    changeReview(newIndex);
  }

  function goToNextReview() {
    const newIndex = (currentIndex + 1) % reviews.length;
    changeReview(newIndex);
  }

  const currentReview = reviews[currentIndex];

  return (
    <div className="sm:flex sm:justify-center items-center sm:my-0 ">
      <div className="container px-4 md:px-8 lg:px-16 sm:flex md:flex-row items-center justify-center sm:h-[480px] mb-40">
        <div className="flex flex-col justify-center items-center w-fit">
        <div className={`${fadeClass} py-4 relative mx-8 md:mx-0 md:min-h-[300px] md:min-w-[300px] min-h-[300px] z-50 my-8 md:my-16`}>
            <div className="image-container justify-center ">
              <img
                src={currentReview.image}
                alt={currentReview.alt}
                className="min-h-[300px] rounded"
              
              />
            </div>
          </div>
        </div>
        <div className="items-center justify-around lg:py-8 flex flex-col sm:w-96 md:w-[30rem] lg:w-[88rem] mb-8 mt-2 sm:p-8  sm:my-16">
          <div className="flex flex-col w-full mx-6">
            <p
              className={`${fadeClass} pl-12 pr-8 tracking-wide leading-9 font-light text-xl min-h-[18rem] sm:pt-6 sm:min-h-[12rem] w-full font-['Inter'] flex items-center`}
            
            >
              &quot;{currentReview.quote}&quot;
            </p>
          </div>
          <div
            className="flex flex-col text-left mt-4 sm:mt-4 w-full mx-6"
          
          >
            <span className={`${fadeClass} px-12 tracking-wide text-xl font-semibold font-['Inter']`}>
              {currentReview.name}
            </span>
            <span className={`${fadeClass} px-12 text-base font-normal tracking-wide text-ft-grey font-['Inter']`}>
              {currentReview.role}
            </span>
            <div className="sm:w-full mb-auto text-right text-3xl sm:p-4 flex gap-4 justify-end mr-4 my-3 sm:mx-1">
              <button
                className="border border-ft-dark-grey px-3 hover:bg-ft-red hover:border-ft-dark-grey  transition duration-300 rounded active:-translate-y-1"
                onClick={goToPreviousReview}
              >
                {' '}
                &lt;{' '}
              </button>
              <button
                className="border border-ft-dark-grey px-3 hover:bg-ft-red hover:border-ft-dark-grey transition duration-300 rounded active:-translate-y-1"
                onClick={goToNextReview}
              >
                {' '}
                &gt;{' '}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewCarousel
