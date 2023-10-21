import kit from '../assets/images/review-users/kit.jpeg'

function ReviewCarousel() {
  return (
    <div className="md:flex md:justify-center">
    <div className="flex flex-col sm:flex-row justify-center items-center w-full max-w-2xl">
      <div className="relative mx-8 md:mx-0 md:min-h-[300px] md:min-w-[300px]">
        <img src={kit} alt="Kit Moginie" className="border-rose-700" />
      </div>
      <div className="flex flex-col max-w-md sm:max-w-lg">
      <p className="w-full px-12 pt-8 tracking-wide leading-normal font-light text-lg">
        "Turned an idea into a product that has vastly enhanced our customer
        experience. Great to deal with from inception through to delivery,
        thanks Fliight Crew!"
      </p>
      <br/>
      <span className="w-full px-12 tracking-wide text-base font-semibold">Chris Moginie</span>
      <span className="w-full px-12 text-sm font-normal tracking-wide text-ft-grey">Marketing Manager</span>
    </div>
    </div>
    </div>
  )
}

export default ReviewCarousel
