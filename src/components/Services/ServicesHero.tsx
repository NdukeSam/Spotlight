import people from "@/assets/services/services.png";

// Define the servicesData object
const servicesData = {
  image: people,
  textTitle: "Services for our users!",
  textBody:
    "Embark on your journey with us by choosing your path: Connect with Nonprofits, Explore Opportunities and Join the Community. Together we can make a difference.",
  altText: "People working together",
};

// Define the prop structure for ServicesHero
interface Props {
  image: string;
  textTitle: string;
  textBody: string;
  altText: string;
}

// ServicesHero component that takes servicesData as a prop
const ServicesHero = ({ image, textTitle, textBody, altText }: Props) => {
  return (
    <div>
      <div className="py-10 px-4 md:px-12 mb-[5rem] lg:px-16">
        {/* Main Container */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">

          {/* Text Section */}
          <div className="md:w-1/2 items-start">
            <h2 className="hidden md:block text-center md:text-left text-2xl md:text-3xl font-bold mb-4">
            {textTitle}
            </h2>
            <p className="text-gray-800 text-lg leading-relaxed mb-4">
            {textBody}
            </p>

          </div>

            {/* Image Section */}
          <div className="md:w-1/2">
            <h2 className=" block md:hidden text-center md:text-left text-2xl md:text-3xl font-bold mb-4">
              Meet Your Corporate Social Responsibility Goals
            </h2>
            <img
              src={image}
              alt={altText}
              className="rounded-md object-cover w-full"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

// // Use ServicesHero component in the parent and pass servicesData as props
const ServicesHeroParent = () => {
  return <ServicesHero {...servicesData} />;
};

export default ServicesHeroParent;

