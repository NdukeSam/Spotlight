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
      <div className="my-5 md:mt-[7rem] flex flex-col-reverse md:flex-row items-center md:items-start justify-center gap-6 md:gap-[7rem] py-4 px-4">


        {/* Text container with max-width for better control on larger screens */}
        <div className=" max-w-lg md:self-center">
          <h3 className="text-lg md:text-3xl font-bold hidden md:block">{textTitle}</h3>
          <p className="mt-4 text-sm md:text-base text-gray-500">{textBody}</p>
        </div>

        {/* Image div */}
          <div className="flex flex-col-reverse md:flex-row max-w-3xl md:max-w-md overflow-hidden">
          <img src={image} alt={altText} className="h-full md:h-auto w-full" />
          <h3 className="text-lg md:text-3xl font-bold py-5 block md:hidden">{textTitle}</h3>
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
