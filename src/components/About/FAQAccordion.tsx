import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi"; // Plus and minus icons
import { useNavigate } from "react-router";

const faqs = [
  {
    question: "How does Spotlight work?",
    answer:
      "Spotlight is a web application that connects members of underserved communities in Atlanta with opportunities and services offered by non-profit organizations. Users can browse through various services and opportunities, apply through the app, and benefit from the offerings provided by our partnering non-profits. We welcome users seeking assistance in areas such as education, job training, healthcare, social services, and more.",
  },
  {
    question: "Is Spotlight available only in Atlanta?",
    answer:
      "Currently, Spotlight focuses on serving underserved communities in Atlanta. However, we have plans to expand our services to other locations in the future, allowing more individuals and organizations to benefit from the platform.",
  },
  {
    question: "Are the services and opportunities on Spotlight free?",
    answer:
      "Spotlight is free for community residents or social impact organizations. Our goal is to make our services and resources accessible to all, regardless of their financial situation. Formation about each service or opportunity, allowing you to make informed decisions.",
  },
  {
    question: "How can I contact Spotlight for further assistance?",
    answer:
      "If you have any questions, concerns, or need assistance, you can reach out to our support team through the contact information provided on the website. We are here to help and ensure you have a positive experience using the Spotlight app.",
  },
];

const FAQAccordion = () => {
  const navigate = useNavigate()
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null); // Close if clicked again
    } else {
      setOpenIndex(index); // Open the clicked FAQ
    }
  };

  return (
    <section className="w-full px-4 py-10 md:py-16 lg:py-20 bg-white">
      <div className="max-w-6xl mx-auto text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold">Common Questions</h2>
        <p className="text-gray-600 my-12">
          Some frequently asked questions by members of our community.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b  border-gray-200 py-2">
            <button
              className="w-full text-left flex justify-between items-center py-4 px-6 focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-lg  font-medium">{faq.question}</span>
              {openIndex === index ? (
                <FiMinus className="text-xl" />
              ) : (
                <FiPlus className="text-xl" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 flex max-w-6xl justify-end">
        <button onClick={()=> navigate('/faq')} className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-900">
          More FAQs
        </button>
      </div>
    </section>
  );
};

export default FAQAccordion;
