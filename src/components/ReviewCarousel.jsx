import { useState } from 'react'
import kit from '../assets/images/review-users/kit.jpeg'
import emily from '../assets/images/review-users/emily.jpg'
import john from '../assets/images/review-users/john.jpg'
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
    image: emily,
    alt: 'Another User',
    quote: "This is absolute jibberish random words that i'm saying!",
    name: 'Jenna Smith',
    role: 'Film Director',
  },
  {
    image: john,
    alt: 'Someone Else',
    quote: 'I love bohemian rhapsody!',
    name: 'Spooky Man',
    role: 'Slender Mans Manager',
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
    <div className="sm:flex sm:justify-center items-center sm:my-16">
      <div className="container px-4 md:px-8 lg:px-16 sm:flex md:flex-row items-center justify-center">
        <div className="flex flex-col justify-center items-center w-fit">
          <div className="py-4 relative mx-8 md:mx-0 md:min-h-[300px] md:min-w-[300px] min-h-[300px] z-50 my-8 md:my-16">
            <div className="image-container justify-center">
              <img src={currentReview.image} alt={currentReview.alt} className="min-h-[300px]"/>
            </div>
          </div>
        </div>
        <div className="items-center justify-around lg:py-8 flex flex-col sm:w-96 md:w-[30rem] lg:w-[40rem] mb-8 mt-2 sm:p-8  sm:my-16">
        <div className="flex flex-col w-full mx-6">
          <p className="px-12 tracking-wide leading-normal font-light text-lg min-h-[10rem] sm:pt-12 sm:min-h-[9rem] w-full">
            "{currentReview.quote}"
          </p>
        </div>
        <div className="flex flex-col text-left mt-4 sm:mt-8 w-full mx-6">
          <span className="px-12 tracking-wide text-base font-semibold">
            {currentReview.name}
          </span>
          <span className="px-12 text-sm font-normal tracking-wide text-ft-grey">
            {currentReview.role}
          </span>
          <div className="sm:w-full mb-auto text-right text-3xl sm:p-4 flex gap-4 justify-end mr-4 my-3 sm:mx-1">
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
