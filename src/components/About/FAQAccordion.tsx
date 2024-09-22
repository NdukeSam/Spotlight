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
    question: "How can I contact Spotlight for further assistance?",
    answer:
      "You can reach out to Spotlight via the contact form on our website, or email us at support@spotlight.org for further assistance.",
  },
];

const FAQAccordion = () => {
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
        <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-900">
          More FAQs
        </button>
      </div>
    </section>
  );
};

export default FAQAccordion;
