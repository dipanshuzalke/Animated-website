import { useState } from "react";
import { ChevronDown } from "lucide-react"; // Optional: or use any icon

const faqs = [
  {
    question: "What types of tennis programs do you offer?",
    answer: "We offer beginner, intermediate, and advanced coaching programs tailored to your skill level.",
  },
  {
    question: "Do you provide equipment rentals?",
    answer: "Yes, we provide rackets and balls on rent for members and guests.",
  },
  {
    question: "Can I book a court in advance?",
    answer: "Absolutely! Court reservations can be made via our website or at the front desk.",
  },
  {
    question: "Are your facilities open year-round?",
    answer: "Yes, our indoor and outdoor courts remain open year-round.",
  },
  {
    question: "Do you offer group lessons or clinics?",
    answer: "Yes, we run group lessons and seasonal clinics led by our professional coaches.",
  },
  {
    question: "How do I sign up for membership?",
    answer: "You can sign up online or visit our front office to register in person.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-black text-white px-6 py-30 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left side */}
        <div>
          <h2 className="text-4xl font-extrabold mb-5">FAQS</h2>
          <p className="text-lg mb-2">
            Can’t find the answer you’re looking for? Please chat to our friendly team or write us an email at
          </p>
          <a
            href="mailto:info@elysiantennis.com"
            className="text-lime-400 font-semibold underline"
          >
            info@elysiantennis.com
          </a>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className={`border-b border-gray-700 pb-1 transition-all duration-600 ease-in-out
                  ${
                    isOpen
                      ? "border-b border-lime-300 text-lime-300"
                      : "border-gray-700"
                  }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left font-semibold text-lg"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                  className={`h-8 w-8 transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
                </button>
                <div
                  className={`mt-2 text-sm text-gray-300 overflow-hidden transition-all duration-600
                    ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}
                  `}
                >
                  {faq.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
