import roadmapImage from "@/assets/services/roadmap.png"; // Import your road image

const Roadmap = () => {
  return (
    <div className="bg-gray-900 text-white py-10 pl-4 md:pl-40 mt-10 md:mt-[7rem]">
      {/* Main Container */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Text Section */}
        <div className="md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Personalized Roadmaps
          </h2>
          <p className="text-gray-400 mb-4">
            The Roadmap feature on Spotlight takes into account your unique
            needs and interests, and creates a personalised plan that suits your
            schedule and pace. From bite-sized steps to long-term milestones,
            our roadmaps will keep you on track and motivated every step of the
            way.
          </p>
        </div>

        {/* Roadmap Image Section */}
        <div className="md:w-1/2">
          <img
            src={roadmapImage}
            alt="Personalized Roadmap"
            className="rounded-md object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
