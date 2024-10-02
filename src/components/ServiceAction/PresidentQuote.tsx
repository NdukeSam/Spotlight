import odie from "@/assets/serviceaction/odie.png";
import quote from "@/assets/serviceaction/quote.png";

const PresidentQuote = () => {
  return (
    <div>
      <div className="py-10 flex flex-col items-center mt-[7rem]">
        {/* Container for the quote symbol and the text */}
        <div className="flex items-start max-w-4xl text-base mb-20 relative">
          {/* Quote symbol beside the text */}
          <div className="mr-4">
            <img src={quote} alt="Quote Symbol" className="w-full h-full" />
          </div>
          {/* Quote text */}
          <p className="text-left">
            By joining forces with us, you can ensure that individuals in underserved communities 
            receive the support they need, empowering them to thrive. Together, let's create a brighter 
            future for Atlanta.
          </p>
        </div>

        {/* Section for president's image and details */}
        <div className="flex flex-col gap-5 px-4 md:px-20 items-center justify-items-center">
          <div className="rounded-full">
            <img src={odie} className="h-full rounded-full object-cover" alt="Spotlight President" />
          </div>
          <h2 className="text-2xl pb-1 font-bold">Odie Gray</h2>
          <p className="text-base mb-2">President, spotlightapp.org</p>
        </div>
      </div>
    </div>
  );
};

export default PresidentQuote;
