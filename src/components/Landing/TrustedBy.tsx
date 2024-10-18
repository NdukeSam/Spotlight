// TrustedBySection.tsx
import atlanta from "@/assets/landing/trusted/atlanta.png"
import houston from "@/assets/landing/trusted/houston.png"
import ngif from "@/assets/landing/trusted/ngif.png"
import oxfam from "@/assets/landing/trusted/oxfam.png"
import savethechildren from "@/assets/landing/trusted/savethechildren.png"

const TrustedBySection = () => {
    return (
      <section className="py-10 mt-16 bg-white text-center">
        <h2 className="text-2xl font-bold">Ideal Clients</h2>
  
        {/* Infinite scrolling carousel for mobile */}
        <div className="md:hidden overflow-hidden mt-16 relative">
          <div className="flex justify-center items-center gap-6 animate-infinite-scroll whitespace-nowrap">
            <img src={atlanta} alt="Atlanta Community Foodbank" className="h-12 mx-auto" />
            <img src={houston} alt="Houston Foodbank" className="h-12 mx-auto" />
            <img src={ngif} alt="NGIF" className="h-12 mx-auto" />
            <img src={oxfam} alt="Oxfam" className="h-12 mx-auto" />
            <img src={savethechildren} alt="Save the Children" className="h-12 mx-auto" />
            {/* Duplicate images for seamless scrolling */}
            <img src={atlanta} alt="Atlanta Community Foodbank" className="h-12 mx-auto" />
            <img src={houston} alt="Houston Foodbank" className="h-12 mx-auto" />
            <img src={ngif} alt="NGIF" className="h-12 mx-auto" />
            <img src={oxfam} alt="Oxfam" className="h-12 mx-auto" />
            <img src={savethechildren} alt="Save the Children" className="h-12 mx-auto" />
          </div>
        </div>
  
        {/* Static layout for desktop */}
        <div className="hidden md:flex justify-center items-center gap-8 mt-6">
          <img src={atlanta} alt="Atlanta Community Foodbank" className="h-12 mx-auto" />
          <img src={houston} alt="Houston Foodbank" className="h-12 mx-auto" />
          <img src={ngif} alt="NGIF" className="h-12 mx-auto" />
          <img src={oxfam} alt="Oxfam" className="h-12 mx-auto" />
          <img src={savethechildren} alt="Save the Children" className="h-12 mx-auto" />
        </div>
      </section>
    );
  };
  
  export default TrustedBySection;
  
  
  