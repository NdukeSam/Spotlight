import { useNavigate } from "react-router"
import ImageAndText from "../Constant/ImageAndText"
import serve from "@/assets/opportunities/serve.png"

const ServeCommunity = () => {
  const navigate = useNavigate();
  return (
    <div>
        <ImageAndText
        image={serve}
        altText="Serve your community"
        textTitle="Get Involved! Serve your community by volunteering"
        textBody="Volunteering is not only a way to enrich the lives of individuals in your community, but it can also promote social equity. By volunteering, you can also gain greater access to resources and services, develop new skills, increase social connections, and gain a deeper understanding of community issues."
        buttonText="Get Involved Now"
        onButtonClick={()=> navigate('/serviceaction')}
        />
    </div>
  )
}

export default ServeCommunity;