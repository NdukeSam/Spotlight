

type SpotlightProps = {
  title: string,
  details: string,
  buttonText: string,
  image: string,
  reverse?: boolean, // Prop to control the layout order
  onButtonClick: () => void;
};

const SpotlightSection = ({ title, details, buttonText, image, reverse = false, onButtonClick }: SpotlightProps) => {
  return (
    <div
      className={`mt-10 md:mt-[7rem] flex flex-col md:flex-row items-center md:items-center justify-center gap-6 md:gap-8 px-4 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Image with hover effect */}
      <div className="relative max-w-xs md:max-w-md rounded-3xl overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full md:h-auto w-full transform transition-transform duration-500 ease-in-out hover:scale-105 overflow-hidden"
        />
      </div>

      {/* Text container with max-width for better control on larger screens */}
      <div className="text-left max-w-lg">
        <h3 className="text-lg md:text-xl font-bold">{title}</h3>
        <p className="my-4 text-sm md:text-base">{details}</p>
        <button onClick={onButtonClick} className="mt-4 bg-black text-white px-4 py-2 rounded-3xl hover:bg-gray-800 transition-colors duration-300">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default SpotlightSection;
