import odie from "@/assets/serviceaction/odie.png";
import quote from "@/assets/serviceaction/quote.png"

const PresidentQuote = () => {
  return (
    <div>
    <div className="py-10 flex flex-col items-center  mt-[7rem]">
        <div className="absolute  left-8">
            <img src={quote} alt="" />
        </div>
      <p className=" max-w-4xl text-center text-base  mb-20">
      By joining forces with us, you can ensure that individuals in underserved communities receive the support they need, empowering them to thrive. Together, let's create a brighter future for Atlanta.
      </p>
      <div className="flex flex-col gap-5 px-4 md:px-20 items-center justify-items-center">
        <div className="rounded-full">
            <img src={odie} className="h-full rounded-full object-cover" alt="Spotlight President" />
        </div>
        <h2 className="text-2xl pb-1 font-bold">
        Odie Gray
        </h2>
        <p className="text-base mb-2">
        President, spotlightapp.org
        </p>
      </div>
    </div>
    </div>
  )
}

export default PresidentQuote