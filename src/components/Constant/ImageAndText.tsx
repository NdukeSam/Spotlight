// import React from 'react'

type Props = {
    image: string,
    altText: string,
    textTitle: string,
    textBody: string,
    buttonText: string,
    onButtonClick: () => void;

}

const ImageAndText = ({ image, altText, textTitle, textBody, buttonText, onButtonClick }: Props) => {
  return (
    <div>
      <div className="mt-[7rem] py-10 px-4 md:px-12 lg:px-16">
        {/* Main Container */}
        <div className="flex flex-col md:flex-row items-center gap-8">

          {/* Image Section */}
          <div className="md:w-[40%]">
            <h2 className="block md:hidden text-center text-2xl md:text-3xl font-bold mb-4">
              {textTitle}
            </h2>
            <img
              src={image}
              alt={altText}
              className="rounded-md object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="md:w-[60%] ">
            <h2 className="hidden md:block text-3xl md:text-3xl font-bold mb-4">
              {textTitle}
            </h2>
            <p className="text-gray-700 text-md leading-loose md:text-xl  md:pr-4 mb-4">
              {textBody}
            </p>

            <button onClick={onButtonClick}  className="mt-4 md:mt-[6rem] bg-black text-white px-4 py-2 md:px-5 md:py-2.5 rounded-full shadow-lg hover:bg-gray-800 hover:scale-105 transition-all duration-300 ease-in-out">
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageAndText;


