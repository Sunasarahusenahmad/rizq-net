import React, { useState } from "react";

const faqData = [
  {
    question: "What is custom software development?",
    answer: (
      <div>
        <p>
          Custom software development is the process of designing and building
          software solutions specifically tailored to the needs of your
          business. Unlike off-the-shelf software, custom software is built with
          your company's unique requirements in mind, ensuring that it fits
          perfectly with your workflows and processes.
        </p>
        <p>
          Whether you're looking for a custom CRM, an eCommerce platform, or a
          specialized application for your internal operations, we can help you
          build a solution that grows with your business.
        </p>
      </div>
    ),
  },
  {
    question:
      "What is the typical timeline for a software development project?",
    answer: (
      <div>
        <p>
          The timeline for a software development project depends on various
          factors such as the scope, complexity, and features required. Smaller
          projects with fewer features may take anywhere from 2 to 4 months,
          while larger projects could take 6 months or more.
        </p>
        <p>
          During the initial consultation, we will assess your requirements and
          provide an estimated timeline. We work closely with you to ensure that
          deadlines are met without compromising on quality.
        </p>
      </div>
    ),
  },
  {
    question: "Do you offer ongoing IT support?",
    answer: (
      <p>
        Yes, we provide ongoing IT support as part of our services. Whether you
        need help with network management, cloud solutions, software
        maintenance, or troubleshooting technical issues, our team is available
        to assist. Our support packages are flexible, and we can tailor them to
        suit your specific needs, whether you're looking for 24/7 support or
        periodic maintenance.
      </p>
    ),
  },
  {
    question: "How do you ensure the security of my systems?",
    answer: (
      <div>
        <p>
          Security is one of our top priorities. We implement industry-standard
          practices such as encryption, two-factor authentication, regular
          software updates, and vulnerability assessments to protect your
          systems from cyber threats. We also offer ongoing security monitoring
          and incident response services to ensure that any potential risks are
          addressed promptly.
        </p>
        <p>
          Additionally, we provide training and best practices to your staff to
          help them identify potential threats and ensure they are following
          security protocols.
        </p>
      </div>
    ),
  },
];

const FaqAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close if clicked again
    } else {
      setActiveIndex(index); // Open clicked accordion
    }
  };

  return (
    <ul className="accordion-list">
      {faqData.map((item, index) => (
        <li
          key={index}
          className={activeIndex === index ? "active" : ""}
          onClick={() => toggleAccordion(index)}
        >
          <h3>{item.question}</h3>
          <div
            className="answer"
            style={{ display: activeIndex === index ? "block" : "none" }}
          >
            {item.answer}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default FaqAccordion;
