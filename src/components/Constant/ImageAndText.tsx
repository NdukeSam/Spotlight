// import React from 'react'

type Props = {
    image: string,
    altText: string,
    textTitle: string,
    textBody: string,
    buttonText: string

}

const ImageAndText = ( {image, altText, textTitle, textBody, buttonText}:  Props) => {
  return (
    <div>
    <div
    className="mt-10 md:mt-[7rem] flex flex-col md:flex-row items-center md:items-start justify-center gap-6 md:gap-8 py-4 px-4">
    {/* Image div */}
    <div className="relative max-w-xs md:max-w-md overflow-hidden">
      <h3 className="text-lg md:text-3xl font-bold py-5 block md:hidden">{textTitle}</h3>
      <img
        src={image}
        alt={altText}
        className="h-full md:h-auto w-full"
      />
    </div>

    {/* Text container with max-width for better control on larger screens */}
    <div className="text-left max-w-lg ">
      <h3 className="text-lg md:text-3xl font-bold hidden md:block">{textTitle}</h3>
      <p className="mt-4 text-sm md:text-base text-gray-700">{textBody}</p>
      <button className="mt-4 bg-black text-white px-5 py-2 md:mt-[4rem] rounded-3xl hover:bg-gray-800 transition-colors duration-300">
        {buttonText}
      </button>
    </div>
  </div>
    </div>
  )
}

export default ImageAndText;