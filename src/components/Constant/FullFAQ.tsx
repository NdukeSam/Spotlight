import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

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
    question: "How does the matching process between community residents and social impact organizations work?",
    answer:
      "Community residents fill out a needs assessment that helps us understand their specific needs and goals. Based on these responses, we match them with social impact organizations that offer relevant services and programs. The social impact organizations then review the anonymous profiles of the community residents and make selections based on their own preferences and criteria. Once a mutual match is made, community residents and social impact organizations can schedule a meeting to discuss next steps.",
  },
  {
    question: "How can I contact Spotlight for further assistance?",
    answer:
      "If you have any questions, concerns, or need assistance, you can reach out to our support team through the contact information provided on the website. We are here to help and ensure you have a positive experience using the Spotlight app.",
  },
  {
    question: "How can I contact Spotlight for further assistance?",
    answer:
      "If you have any questions, concerns, or need assistance, you can reach out to our support team through the contact information provided on the website. We are here to help and ensure you have a positive experience using the Spotlight app.",
  },
  {
    question: "How does the service referral process work?",
    answer:
      "External organizations, such as social services or health services, can refer their clients to Spotlight by providing relevant details about the individual's needs and preferences. Once referred, the individual gains access to a wide range of opportunities and services offered by nonprofits on the platform.",
  },
  {
    question: "Can I apply for multiple services or opportunities through Spotlight?",
    answer:
      "Absolutely! You can apply for multiple services and opportunities that align with your needs and interests. However, to ensure you make the most of Spotlight, you can only undergo one service per time on the professional development and personal growth tracks respectively.",
  },
  {
    question: "What is Service Reimbursement?",
    answer:
      "Service reimbursement is a program where the federal government supports non-profit organizations by reimbursing them for every successful service rendered to members of the community through Spotlight. This program ensures that non-profits receive the financial support they need to continue their impactful work.",
  },
  {
    question: "What is Social Impact Report?",
    answer:
      "The social impact report highlights the impact of social impact services based on various criteria. It includes metrics like the number of candidates who completed the programs, profile shared, total number of social impact organization matches, and popularity score.",
  },
  {
    question: "As a community member, can I offer help to other members of the community through Spotlight?",
    answer:
      "Absolutely! You have the opportunity to extend a helping hand to fellow community members. With the innovative 'Ask for Help' feature, individuals within the community can both seek and provide assistance to one another.",
  },
  {
    question: "How can my organization benefit from service reimbursement?",
    answer:
      "By partnering with Spotlight, your non-profit organization becomes eligible for service reimbursement. This means that for every service provided to community members through the platform, your organization will receive financial reimbursement from the federal government. It's a way to not only make a difference but also receive recognition and support for your efforts.",
  },
  {
    question: "How does Spotlight ensure the safety and privacy of its users?",
    answer:
      "Spotlight takes the safety and privacy of its users very seriously. We have implemented several security measures to protect users' personal information and prevent unauthorized access to the platform. All user data is stored securely and is encrypted in transit. We also have strict policies in place to ensure that user data is only accessed by authorized personnel for legitimate purposes. Additionally, we do not share any user data with third-party organizations without explicit consent from the user.",
  }
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
