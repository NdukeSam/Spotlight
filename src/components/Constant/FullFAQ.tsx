import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi"; // Plus and minus icons

const faqs = [
  {
    question: "How does Spotlight work?",
    answer:
      "Spotlight connects community members to social good organizations providing resources and services. Users can find, explore, and engage with local opportunities.",
  },
  {
    question: "Is Spotlight available only in Atlanta?",
    answer:
      "Currently, Spotlight focuses on Atlanta, but we are working on expanding to other regions in the future.",
  },
  {
    question: "Are the services and opportunities on Spotlight free?",
    answer:
      "Yes, all the services and opportunities listed on Spotlight are free for under-served communities and individuals.",
  },
  {
    question: "How does the matching process between community residents and social impact organizations work?",
    answer:
      "Community residents fill out a needs assessment that helps us understand their specific needs and goals. Based on these responses, we match them with social impact organizations that offer relevant services and programs. The social impact organizations then review the anonymous profiles of the community residents and make selections based on their own preferences and criteria. Once a mutual match is made, community residents and social impact organizations can schedule a meeting to discuss next steps.",
  },
  {
    question: "How can I contact Spotlight for further assistance?",
    answer:
      "You can reach out to Spotlight via the contact form on our website, or email us at support@spotlight.org for further assistance.",
  },
];

const FullFAQ = () => {
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
        <h2 className="text-2xl md:text-3xl font-bold">Frequently Asked Questions</h2>
        <p className="text-gray-600 my-12">
        We have compiled a list of common questions to provide you with the information you need. If you don't find the answer you're looking for, feel free to reach out to our support team for further assistance..
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
    </section>
  );
};

export default FullFAQ;
