import "./InformationStyle.css";
import React from "react";
import InfoImg from "../images/infoimg.jpg";

const Information = () => {
  return (
    <div className="info-container">
      <div className="info-left">
        <img className="info-img" src={InfoImg} alt="info" />
      </div>
      <div className="info-right">
        <h1>Ready To Grow With A Digital Marketing Agency</h1>
        <h2>You Can Trust?</h2>
        <p>Know what makes us different from others!</p>
        <h4>
          At <span>CodeCraft Consulting</span>, we are passionate about helping businesses achieve
          their goals through IT services and digital marketing solutions. Our
          team of experienced professionals has the knowledge and expertise to
          help you develop a comprehensive strategy that will take your business
          to the next level. If you’re a business owner or professional who
          takes this seriously, we’ll save you time. Yes, you need a strong web
          design and digital marketing agency to help your business develop. We
          create a user-friendly, mobile-friendly, and responsive website with a
          focus on your customers and help you get noticed using new internet
          marketing approaches. We offer digital services to help small and
          large businesses develop online. Our SEO specialists, designers, and
          developers work tirelessly to meet your company’s goals. Consultation,
          design, and development enable you to expand your business. If you
          want a new website, an e-commerce site, or think your current site
          needs a makeover, or if you think your business could benefit from
          smart Web Applications, or if you think tech-enabled marketing
          services could help your business improve online leads, calls, and
          income, read on. 
        </h4>
      </div>
    </div>
  );
};
export default Information;
