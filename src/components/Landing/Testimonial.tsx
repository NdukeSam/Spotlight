import  { useState } from "react";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import ellipse1 from "@/assets/circle/Ellipse_1.png"
import ellipse2 from "@/assets/circle/Ellipse_2.png"
import ellipse3 from "@/assets/circle/Ellipse_3.png"
import ellipse4 from "@/assets/circle/Ellipse_4.png"

const testimonials = [
  {
    text: "“I joined Spotlight in search of legal services. I’m impressed with the support I received from XYZ NPO and how they ensured my issue was resolved.”",
    name: "Jack Lowry",
    location: "Chicago, USA",
    image: ellipse1, // Replace with actual image URL
  },
  {
    text: "Spotlight helped me find new opportunities to get involved in my community. The platform is user-friendly, and I love the network I've built.",
    name: "Emy Smith",
    location: "Los Angeles, USA",
    image: ellipse2,
  },
  {
    text: "Thanks to Spotlight, I could volunteer with local non-profits that I didn't know existed before. I'm excited to continue my journey with them.",
    name: "Mary Johnson",
    location: "New York, USA",
    image: ellipse3,
  },
  {
    text: "Thanks to Spotlight, I could volunteer with local non-profits that I didn't know existed before. I'm excited to continue my journey with them.",
    name: "Carl Henz",
    location: "Delaware, USA",
    image: ellipse4,
  },
  {
    text: "Thanks to Spotlight, I could volunteer with local non-profits that I didn't know existed before. I'm excited to continue my journey with them.",
    name: "Caroline Peters",
    location: "Chicago, USA",
    image: ellipse1,
  },
  {
    text: "Thanks to Spotlight, I could volunteer with local non-profits that I didn't know existed before. I'm excited to continue my journey with them.",
    name: "Mary Johnson",
    location: "Illinois, USA",
    image: ellipse2,
  },
  // Add more testimonials as needed
];

const TestimonialComponent = () => {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  };

  const handleNext = () => {
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
  };

  return (
    <section className="py-10 px-4 bg-gray-50 mt-[10rem]">
      {/* Header with Carousel Buttons */}
      <div className="max-w-6xl mx-auto flex justify-between items-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold">
          What Members of our Community are Saying...
        </h2>
        
        {/* Carousel Control Buttons */}
        <div className="flex items-center space-x-2">
          <button
            onClick={handlePrev}
            className="text-2xl p-2 hover:bg-gray-200 rounded-full"
          >
            <MdArrowBackIos />
          </button>
          <button
            onClick={handleNext}
            className="text-2xl p-2 hover:bg-gray-200 rounded-full"
          >
            <MdArrowForwardIos />
          </button>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative max-w-6xl mx-auto">
        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.slice(current, current + 4).map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center text-center"
            >
              <p className="mb-4 italic">"{testimonial.text}"</p>
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full mb-4"
              />
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-gray-500">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-4 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                current === index ? "bg-gray-800" : "bg-gray-400"
              }`}
              onClick={() => setCurrent(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialComponent;
