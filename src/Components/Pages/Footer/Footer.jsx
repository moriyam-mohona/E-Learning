import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { GrYoutube } from "react-icons/gr";
const Footer = () => {
  const companyLinks = [
    { text: "Career / Recruitment", path: "/career-recruitment" },
    { text: "Join as a Teacher", path: "/join-teacher" },
    { text: "Join as an Affiliate", path: "/join-affiliate" },
    { text: "Privacy Policy", path: "/privacy-policy" },
    { text: "Refund Policy", path: "/refund-policy" },
    { text: "Terms & Conditions", path: "/terms-conditions" },
  ];

  const otherLinks = [
    { text: "Blog", path: "/blog" },
    { text: "Book Store", path: "/book-store" },
    { text: "Free Notes & Guides", path: "/free-notes-guides" },
    { text: "Job Preparation Courses", path: "/job-preparation-courses" },
    { text: "Verify Certificate", path: "/verify-certificate" },
    { text: "Free Download", path: "/free-download" },
  ];

  const contactDetails = [
    { text: "Call Us: 16910 (24x7)", path: "/contact" },
    { text: "WhatsApp: +8801896016252 (24x7)", path: "/contact" },
    { text: "Outside Bangladesh: +880 9612001010", path: "/contact" },
    { text: "Email Us: support@10minuteschool.com", path: "/contact" },
  ];

  const socialIcons = [
    { icon: <FaFacebookF />, key: "facebook" },
    { icon: <GrYoutube />, key: "youtube" },
    { icon: <FaLinkedinIn />, key: "linkedin" },
    { icon: <FaInstagram />, key: "instagram" },
  ];
  const renderLinks = (links) => {
    return links.map((link, index) => (
      <li key={index}>
        <Link to={link.path} className="hover:text-gray-300">
          {link.text}
        </Link>
      </li>
    ));
  };

  const renderSocialIcons = () => {
    return socialIcons.map((social) => (
      <div
        key={social.key}
        className="bg-black text-white p-2 text-base rounded-md"
      >
        {social.icon}
      </div>
    ));
  };
  return (
    <div className="bg-gray-50 mt-10 px-5 py-10 md:px-8">
      <div className="grid grid-cols-12 gap-5 text-black">
        {/* footer part 1  */}
        <div className="col-span-12 lg:col-span-4 space-y-4 mb-10 flex flex-col items-center lg:items-start">
          <img src={logo} alt="" className="w-28" />
          <h2 className="font-bold">Download Our Mobile App</h2>
        </div>
        {/* footer part 2  */}
        <div className="col-span-12 lg:col-span-4 flex justify-between">
          {/* Company */}
          <div>
            <h2 className="font-bold text-lg mb-4">Company</h2>
            <ul className="text-black/80">{renderLinks(companyLinks)}</ul>
          </div>
          {/* others  */}
          <div>
            <h2 className="font-bold text-lg mb-4">Others</h2>
            <ul className="text-black/80">{renderLinks(otherLinks)}</ul>
          </div>
        </div>
        {/* footer part 3 */}
        <div className="col-span-12 lg:col-span-4 space-y-1">
          <h2 className="font-bold text-lg mb-4 hidden md:flex">
            Keep up with us at
          </h2>
          <ul className=" hidden md:flex flex-col">
            {renderLinks(contactDetails)}
          </ul>
          <div className="flex justify-center lg:justify-start">
            <div className="col-span-12 flex gap-4 items-center lg:items-start py-2">
              {renderSocialIcons()}
            </div>
          </div>
        </div>
        <h2 className="col-span-12 text-black/70 text-xs text-center">
          2015 - 2024 Copyright © 10 Minute School. All rights reserved.
        </h2>
      </div>
    </div>
  );
};

export default Footer;
