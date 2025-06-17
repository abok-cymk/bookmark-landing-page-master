import { useState } from "react";
import FaqsAccordion from "../components/FaqsAccordion";
import { Link } from "react-router";

const faqs = [
  {
    question: "What is Bookmark?",
    answer:
      "Bookmark is your personal assistant for saving and organizing your favorite websites. With a single click, you can store links, categorize them, and access them from any device, making your browsing experience seamless and efficient.",
  },
  {
    question: "How can I request a new browser?",
    answer:
      "If your preferred browser isn’t supported yet, simply reach out to us through our feedback form. We’re always listening to our users and prioritize new browsers based on demand and compatibility, so your suggestion truly matters!",
  },
  {
    question: "Is there a mobile app?",
    answer:
      "Yes! Our mobile app is designed for both iOS and Android, allowing you to manage your bookmarks on the go. Sync your saved sites instantly and enjoy a smooth, intuitive experience wherever you are.",
  },
  {
    question: "What about other Chromium browsers?",
    answer:
      "We’re actively working to expand support for all Chromium-based browsers. If you use a browser built on Chromium, chances are high that Bookmark will work, or will soon be compatible after our next update.",
  },
];
const Faqs = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  // close if already open, open if not
  const handleToggle = (question) => {
    setActiveFaq((prev) => (prev === question ? null : question));
  };

  return (
    <section className="max-w-3xl mx-auto mt-24 md:mt-48 px-10 mb-24">
      <div className="text-center max-w-md mx-auto max-sm:px-2">
        <h2 className="text-3xl font-500 text-Blue-950 pb-4">
          Frequently Asked Questions
        </h2>
        <p>
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>
      </div>
      <div className="flex flex-col gap-y-3 text-left mt-8 max-w-md mx-auto">
        {faqs.map(({ question, answer }) => (
          <FaqsAccordion
            key={question}
            question={question}
            answer={answer}
            setToggle={handleToggle}
            activeFaq={activeFaq}
          />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Link to="/" className="w-fit bg-Blue-600 px-3 py-2 rounded-md text-Grey-50">More Info</Link>
      </div>
    </section>
  );
};

export default Faqs;
