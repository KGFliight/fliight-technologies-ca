import { useState } from 'react'
import kit from '../assets/images/review-users/kit.jpeg'
import '../App.css'

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
    image: kit,
    alt: 'Another User',
    quote: "This is absolute jibberish random words that i'm saying!",
    name: 'Jenna Smith',
    role: 'Film Director',
  },
  {
    image: kit,
    alt: 'Someone Else',
    quote: 'I love bohemian rhapsody!',
    name: 'Jack Beanstalk',
    role: 'Person Manager',
  },
]

function ReviewCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  function goToPreviousReview() {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
    )
  }
  function goToNextReview() {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length)
  }

  const currentReview = reviews[currentIndex]

  return (
    <div className="sm:flex sm:justify-center my-16">
      <div className="container px-4 md:px-8 lg:px-16 sm:flex md:flex-row">
        <div className="flex flex-col justify-center items-center w-full max-w-2xl">
          <div className="p-4 relative mx-8 md:mx-0 md:min-h-[300px] md:min-w-[300px] z-50 my-16">
            <div className="image-container">
              <img src={currentReview.image} alt={currentReview.alt} />
            </div>
          </div>
        </div>
        <div className="items-center justify-center flex flex-col sm:w-96 md:w-[30rem] lg:w-[40rem]">
        <div className="flex flex-col w-full mx-6">
          <p className="px-12 tracking-wide leading-normal font-light text-lg min-h-[8rem] sm:min-h-[4rem] w-full">
            {currentReview.quote}
          </p>
        </div>
        <div className="flex flex-col text-left mt-4 sm:mt-8 w-full mx-6">
          <span className="px-12 tracking-wide text-base font-semibold">
            {currentReview.name}
          </span>
          <span className="px-12 text-sm font-normal tracking-wide text-ft-grey">
            {currentReview.role}
          </span>
          <div className="sm:w-full h-auto text-right text-3xl sm:p-4 flex gap-4 justify-end mr-4 py-3 sm:mx-1">
            <button className="border border-ft-dark-grey px-3" onClick={goToPreviousReview}> &lt; </button>
            <button className="border border-ft-dark-grey px-3" onClick={goToNextReview}> &gt; </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewCarousel
