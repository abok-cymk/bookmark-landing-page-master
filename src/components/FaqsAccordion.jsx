import clsx from 'clsx';
import { forwardRef, memo } from 'react';
import { FaChevronDown } from "react-icons/fa";

const FaqsAccordion = forwardRef(({ question, answer, setToggle, activeFaq }, ref) => {
    const isActiveFaq = activeFaq === question;
  return (
    <>
      <button
        ref={ref}
        onClick={() => setToggle(question)}
        aria-expanded={isActiveFaq}
        className={clsx(
          "flex hover:text-Red-400 transition-colors duration-200 focus-visible:text-Red-400 text-sm w-full justify-between font-medium items-center cursor-pointer",
          isActiveFaq ? "text-Red-400" : "text-Blue-950"
        )}
      >
        {question}
        <FaChevronDown
          className={clsx(
            "",
            isActiveFaq ? "rotate-180" : "text-Blue-600"
          )}
        />
      </button>
      {isActiveFaq && <p className="text-sm/7">{answer}</p>}
    </>
  );
});

export default memo(FaqsAccordion);
