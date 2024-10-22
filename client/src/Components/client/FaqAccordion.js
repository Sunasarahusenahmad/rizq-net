import React, { useState } from 'react';

const faqData = [
  {
    question: 'How much does a website cost?',
    answer: (
      <div>
        <p>
          While we would love to give a definitive, fixed price for a website, it really depends on the specific needs for each individual business. If one business needs a website comprised of five pages, while another has a substantially larger site of over 100 pages - obviously those projects are going to command different price points.
        </p>
        <p>With that being said - here are some general guidelines on what to expect from a pricing standpoint.</p>
        <p>
          If you can get by with a small website (between 3 - 10 pages) using a pre-designed template, you can expect to pay approximately $2,500.00. A mid-sized website that has anywhere from 11 - 25 pages, but still uses a pre-made template, will be between $3,000.00 - $5,000.00. If you have a lot of pages, are looking for something completely custom, or are looking for something that has special functionality such as eCommerce, custom calculators, or integrations with other services, you may be looking at anywhere from $10,000 - $20,000.
        </p>
        <p>Ultimately, the takeaway here is that we can accommodate projects of just about any budget - so long as expectations are set accordingly.</p>
      </div>
    ),
  },
  {
    question: 'Are there any monthly fees?',
    answer: (
      <p>
        This will vary depending on the type of project. For logo & branding projects, fees will be one-time costs. For website projects, we will typically charge a monthly fee, depending on the level of service you choose. To view a full list of our monthly packages, click here.
      </p>
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
        <li key={index} className={activeIndex === index ? 'active' : ''} onClick={() => toggleAccordion(index)}>
          <h3>{item.question}</h3>
          <div className="answer" style={{ display: activeIndex === index ? 'block' : 'none' }}>
            {item.answer}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default FaqAccordion;