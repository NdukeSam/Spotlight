import { useNavigate } from "react-router";
import ImageAndText from "../Constant/ImageAndText";
import hands from "@/assets/about/about.png";

const Diversity = () => {
  const navigate = useNavigate()
  return (
    <div>
      <ImageAndText
        image={hands} // Pass the image correctly without colon
        altText="Hands together image"
        textTitle="We are on a mission to bridge the diversity gap..."
        textBody="In Georgia alone, there are over 42k Non-profit organizations, but the services offered by these NPOs are not easily accessible and visible to their core audience of under-served community."
        buttonText="Take Action"
        onButtonClick={()=> navigate('/serviceaction')}

      />
    </div>
  );
};

export default Diversity;
