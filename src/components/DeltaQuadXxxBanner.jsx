function DeltaQuadProBanner({ title, imageSrc, subheading }) {
  return (
    <div className="h-screen w-screen border bg-white">
      <div className="flex flex-col items-center my-12 mx-8">
        <h1 className="text-6xl md:text-7xl font-medium leading md:leading-10 tracking-widest mt-24 py-20 justify-center flex uppercase  text-ft-black text-center">
          {title}
        </h1>
        <p className="text-ft-black text-center font-light font-['Inter']">{subheading}</p>
      </div>
      <div className="flex justify-center ">
        <img
          src={imageSrc}
          className="px-4 my-8 h-auto md:px-20 lg:h-80 xl:h-[400px]"
        />
      </div>
    </div>
  )
}

export default DeltaQuadProBanner
