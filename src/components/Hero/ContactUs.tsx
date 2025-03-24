import CTA from "@/common/CTA";
import { Helmet } from "react-helmet";
import { MapPin, Phone, Mail, MapPinCheckIcon, Rss, X } from "lucide-react";
import axios from "axios";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import BackArrow from "../../assets/images/back-arrow.svg";
import Lottie from 'react-lottie-player';
import animation from './mail-submit.json'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, AnimatePresence } from "framer-motion";
import { faYoutube, faInstagram, faLinkedinIn, faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons';


const contactInfo = [
  {
    icon: <Mail size={25} color="white" />,
    title: 'Email Us:',
    content: 'info@rareminds.in',
  },
  {
    icon: <Phone size={25} color="white" />,
    title: 'Call Us:',
    content: '+91 99023 26951',
  },
  {
    icon: <MapPinCheckIcon size={25} color="white" />,
    title: 'Address:',
    content: 'Rareminds 231, 13th Cross Rd, 2nd Stage, Indira Nagar II Stage, Hoysala Nagar, Indiranagar, Bengaluru, Karnataka 560038',
  },
  {
    socialLinks: [
      {
        icon: <FontAwesomeIcon icon={faYoutube} className="text-red-500" />,
        platform: 'Youtube',
        link: 'https://www.youtube.com/@rareminds-empoweringyoungm7746',
      },
      {
        icon: <FontAwesomeIcon icon={faInstagram} className="text-[#e1306c]" />,
        platform: 'Instagram',
        link: 'https://www.instagram.com/rareminds_eym/',
      },
      {
        icon: <FontAwesomeIcon icon={faTwitter} className="text-[#00acee]" />,
        platform: 'Twitter',
        link: 'https://x.com/minds_rare/',
      },
      {
        icon: <FontAwesomeIcon icon={faLinkedinIn} className="text-[#00acee]" />,
        platform: 'LinkedIn',
        link: 'https://www.linkedin.com/company/rareminds',
      },
      {
        icon: <FontAwesomeIcon icon={faFacebookF} className="text-[#0e76a8]" />,
        platform: 'LinkedIn',
        link: 'https://www.linkedin.com/company/rareminds',
      },
    ],
  },
];

const ContactUs = ({ content = [], ctaContent, pageData }) => {
  const isMobile = useMediaQuery({ query: `(max-width: 1024px)` });
  const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState({
    FullName: "",
    CompanyName: "",
    Email: "",
    PhoneNumber: "",
    JobTitle: "",
    Services: [],
  });
  const [successMessage, setSuccessMsg] = useState(null);
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMsg] = useState(null);

  const navigate = useNavigate();

  const validateForm = (data) => {
    const errors = {};

    // Validate Full Name
    if (!data.FullName.trim()) {
      errors.FullName = "Full Name is required";
    }

    // Validate Company Name
    if (!data.CompanyName.trim()) {
      errors.CompanyName = "Company Name is required";
    }

    // Validate Job Title
    if (!data.JobTitle.trim()) {
      errors.JobTitle = "Job Title is required";
    }

    // Validate Email
    if (!data.Email.trim()) {
      errors.Email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.Email)) {
      errors.Email = "Email is invalid";
    }

    // Validate Phone Number
    if (!data.PhoneNumber.trim()) {
      errors.PhoneNumber = "Phone Number is required";
    } else if (data.PhoneNumber.length < 10) {
      errors.PhoneNumber =
        "Phone Number is invalid. Minimum 10 digits required";
    } else if (data.PhoneNumber.length > 12) {
      errors.PhoneNumber = "Phone Number is invalid. Maximum 12 digits allowed";
    }

    // Validate Terms checkbox
    if (!isChecked) {
      errors.terms = 'You must agree to the terms and conditions';
    }

    return errors;
  };
  const submitQueryForm = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = validateForm(formData);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {

      const formDataToSubmit = { ...formData, Services: formData.Services.join(", ") };

      const config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `${import.meta.env.VITE_API_URL}submit-query-form`,
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify(formDataToSubmit),
      };


      setSuccessMsg("");
      setErrorMsg("");

      axios
        .request(config)
        .then((response) => {
          if (response.data.status === 200) {

            setSuccessMsg(response.data.message);

            setFormData({
              FullName: "",
              CompanyName: "",
              Email: "",
              PhoneNumber: "",
              JobTitle: "",
              Services: [],
            });
          } else if (response.data.status === 500) {
            // Handle server error response
            setErrorMsg(response.data.message);
          }
        })
        .catch((error) => {
          console.error(error);
          setErrorMsg("An error occurred while submitting your form.");
        });
    } else {
      setErrorMsg(
        "Please fill all the required(*) fields and agree to the terms and conditions to submit your details."
      );
    }
  };

  const setCheckBoxValue = (e) => {
    let services = formData.Services || [];

    if (e.target.checked) {
      services = [...services, e.target.value];
    } else {
      services = services.filter((service) => service !== e.target.value);
    }
    setFormData({ ...formData, Services: services });
  };

  return (
    <>
      <Helmet>
        <title>{pageData?.MetaTitle}</title>
        <meta name="description" content={pageData?.MetaDescription} />
        <meta name="keywords" content={pageData?.MetaKeywords} />
        <meta property="og:title" content={pageData?.OGTitle} />
        <meta property="og:description" content={pageData?.OGDescription} />
      </Helmet>

      {successMessage ? (
        <>
          {/* Modal with Animation */}
          <AnimatePresence>
            <motion.div
              className="fixed p-3 inset-0 z-50 flex items-center justify-center text-gray-600 bg-gray-800 bg-opacity-70 backdrop-blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white p-6 rounded-3xl max-w-md mx-auto flex flex-col items-center justify-center relative"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* X Icon in the top-right corner */}
                <button
                  onClick={() => setSuccessMsg(false)} // Close modal on click
                  className="absolute -top-2 -right-2 p-2 border shadow-md border-red-600 bg-white rounded-full hover:bg-red-300 focus:outline-none"
                >
                  <X className="w-5 h-5 text-red-600 " />
                </button>

                <Lottie
                  loop
                  animationData={animation}
                  play
                  style={{ width: 150, height: 150, marginBottom: "1rem" }}
                />
                <h2 className="text-xl font-bold text-center mb-4">Submission Successful!</h2>
                <p className="text-center font-thin mb-6">
                  Your submission has been successfully received :).
                </p>
                <div className="flex justify-center">
                  <button
                    className="px-6 py-2 shadow-xl bg-gradient-to-b from-red-500 border-2 border-red-200 to-red-600 text-white rounded-3xl hover:bg-blue-600 focus:outline-none"
                    onClick={() => setSuccessMsg(false)} // Close modal on click
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </>
      ) :
        <section className="px-4 sm:px-6 lg:px-8 py-12 lg:py-16 mx-auto max-w-screen-xxl z-50">
          <div className="animate-fade-in">
            <p className="text-highlight font-medium mb-3 text-lg md:text-2xl text-red-500">Get in Touch</p>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-5 md:mb-16 leading-[1.1]">
              Let's Chat, Reach Out to Us
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

            {/* Left side */}
            <div className="col-span-1 lg:col-span-7 md:border rounded-3xl p-0 md:p-10">
              <section>
                <Form className="w-full mx-auto" onSubmit={submitQueryForm}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6">

                    {/* Full Name */}
                    <div className="md:col-span-2">
                      <label htmlFor="fullName" className="text-sm md:text-base text-gray-600 font-medium">
                        Full Name*
                      </label>
                      <input
                        id="fullName"
                        className={`placeholder:text-sm my-2 w-full border ${errors.FullName ? "border-red-500" : "border-black/20"} rounded-lg px-2 py-2 md:px-2 md:py-2`}
                        type="text"
                        placeholder="Type your name"
                        value={formData.FullName}
                        onChange={(e) => {
                          const re = /^[A-Za-z\s]+$/;
                          if (e.target.value === "" || re.test(e.target.value)) {
                            setFormData({ ...formData, FullName: e.target.value });
                            setErrors({ ...errors, FullName: "" });
                          }
                        }}
                      />
                      {errors.FullName && <span className="text-red-500 text-sm font-bold">{errors.FullName}</span>}
                    </div>

                    {/* Company Name */}
                    <div>
                      <label htmlFor="companyName" className="text-sm md:text-base text-gray-600 font-medium">
                        Company Name*
                      </label>
                      <input
                        id="companyName"
                        className={`placeholder:text-sm my-2 w-full border ${errors.CompanyName ? "border-red-500" : "border-black/20"} rounded-lg px-2 py-2 md:px-2 md:py-2`}
                        type="text"
                        placeholder="Type your company"
                        value={formData.CompanyName}
                        onChange={(e) => {
                          const re = /^[A-Za-z\s]+$/;
                          if (e.target.value === "" || re.test(e.target.value)) {
                            setFormData({ ...formData, CompanyName: e.target.value });
                            setErrors({ ...errors, CompanyName: "" });
                          }
                        }}
                      />
                      {errors.CompanyName && <span className="text-red-500 text-sm font-bold">{errors.CompanyName}</span>}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="text-sm md:text-base text-gray-600 font-medium">
                        Email address*
                      </label>
                      <input
                        id="email"
                        className={`placeholder:text-sm my-2 w-full border ${errors.Email ? "border-red-500" : "border-black/20"} rounded-lg px-2 py-2 md:px-2 md:py-2`}
                        type="email"
                        placeholder="Type your email"
                        value={formData.Email}
                        onChange={(e) => {
                          setFormData({ ...formData, Email: e.target.value });
                          setErrors({ ...errors, Email: "" });
                        }}
                      />
                      {errors.Email && <span className="text-red-500 text-sm font-bold">{errors.Email}</span>}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label htmlFor="phoneNumber" className="text-sm md:text-base text-gray-600 font-medium">
                        Phone Number*
                      </label>
                      <input
                        id="phoneNumber"
                        className={`placeholder:text-sm my-2 w-full border ${errors.PhoneNumber ? "border-red-500" : "border-black/20"} rounded-lg px-2 py-2 md:px-2 md:py-2`}
                        type="tel"
                        placeholder="Type your number"
                        value={formData.PhoneNumber}
                        onChange={(e) => {
                          const re = /^[0-9\b]+$/;
                          if (e.target.value === "" || re.test(e.target.value)) {
                            setFormData({ ...formData, PhoneNumber: e.target.value });
                            setErrors({ ...errors, PhoneNumber: "" });
                          }
                        }}
                      />
                      {errors.PhoneNumber && <span className="text-red-500 text-sm font-bold">{errors.PhoneNumber}</span>}
                    </div>

                    {/* Job Title */}
                    <div>
                      <label htmlFor="jobTitle" className="text-sm md:text-base text-gray-600 font-medium">
                        Job Title*
                      </label>
                      <input
                        id="jobTitle"
                        className={`placeholder:text-sm my-2 w-full border ${errors.JobTitle ? "border-red-500" : "border-black/20"} rounded-lg px-2 py-2 md:px-2 md:py-2`}
                        type="text"
                        placeholder="Type your job title"
                        value={formData.JobTitle}
                        onChange={(e) => {
                          const re = /^[A-Za-z\s]+$/;
                          if (e.target.value === "" || re.test(e.target.value)) {
                            setFormData({ ...formData, JobTitle: e.target.value });
                            setErrors({ ...errors, JobTitle: "" });
                          }
                        }}
                      />
                      {errors.JobTitle && <span className="text-red-500 text-sm font-bold">{errors.JobTitle}</span>}
                    </div>
                  </div>

                  <h3 className="text-sm md:text-lg text-gray-700 font-medium mt-3 md:mt-7">
                    Which of Rareminds' services are you most interested in? <br />
                    <span className="text-sm md:text-sm text-gray-500 font-light">
                      (Select all that apply)
                    </span>
                  </h3>

                  <div className="grid md:grid-cols-3 gap-3 grid-cols-1 mt-5 text-sm md:text-base text-gray-500 font-light">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="w-3 h-3 border-transparent rounded-sm focus:outline-none focus:ring-0 focus:ring-transparent"
                        value="TA"
                        onChange={setCheckBoxValue}
                      />
                      <span className="">Talent Acquisition</span>
                    </label>

                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="w-3 h-3 bg-gray-100 border-none rounded-sm focus:outline-none focus:ring-0"
                        value="TM"
                        onChange={setCheckBoxValue}
                      />
                      <span>Talent Management</span>
                    </label>

                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="w-3 h-3 bg-gray-100 border-none rounded-sm focus:outline-none focus:ring-0"
                        value="TD"
                        onChange={setCheckBoxValue}
                      />
                      <span>Talent Development</span>
                    </label>
                  </div>

                  <h3 className="text-sm md:text-lg text-gray-700 font-medium mt-4 md:mt-7">
                    How did you hear about Rareminds?
                  </h3>

                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-3">
                    {[
                      { label: "Website", value: "Website" },
                      { label: "Referral", value: "Referral" },
                      { label: "Social Media", value: "Social Media" },
                      { label: "Industry Event", value: "Industry Event" },
                      { label: "Other", value: "Other" },
                    ].map((option) => (
                      <label key={option.value} className="flex items-center text-sm md:text-base text-gray-500 font-light">
                        <input
                          type="radio"
                          onChange={() => setFormData({ ...formData, ReferralSource: option.value })}
                          name="referral-source"
                          value={option.value}
                          className="w-3 h-3 bg-gray-100 border-gray-300 dark:ring-offset-gray-800  mr-2"
                        />
                        {option.label}
                      </label>
                    ))}
                  </div>

                  <h3 className="text-sm md:text-base text-gray-700 font-light mt-7">
                    Please share any additional information or questions for the Rareminds team:
                  </h3>

                  <Form.Control
                    as="textarea"
                    className="mt-5 border-2 sm:w-[100%] w-[70%] p-5 rounded-xl"
                    rows={5}
                    placeholder="Type here"
                    onChange={(e) => setFormData({ ...formData, Comment: e.target.value })}
                  />

                  <Form.Check
                    type="checkbox"
                    checked={isChecked}
                    label="By submitting this form, you agree to be contacted by our team representative to discuss a customised talent solution for your organisation. Rest assured, your information will be kept confidential.*"
                    className="checkbox mt-5 text-sm md:text-base text-gray-500 font-light"
                    onChange={(e) => setIsChecked(e.target.checked)}
                  />

                  <button
                    className="px-6 py-3 mt-5 text-lg font-semibold text-white bg-gradient-to-b from-red-500 to-red-600 rounded-xl shadow-lg transform transition-transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
                    onClick={(e) => submitQueryForm(e)}
                  >
                    Submit
                  </button>
                </Form>
              </section>
            </div>

            {/* Right side */}
            <div className="col-span-1 lg:col-span-5 md:border border-black/10 p-0 md:p-6 md:rounded-3xl overflow-auto">
              <div className="flex items-center mb-4">
                <MapPin className="h-5 w-5 text-highlight mr-2" />
                <h2 className="text-xl font-semibold">Spot us on the map</h2>
              </div>
              <div className="rounded-lg overflow-hidden h-auto md:h-80 ">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15551.567290229752!2d77.634574!3d12.9787703!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14046209c375%3A0x1a762e3d7ac6dfe1!2sRareMinds!5e0!3m2!1sen!2sin!4v1731734062067!5m2!1sen!2sin"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Our location on Google Maps"
                ></iframe>
              </div>

              {contactInfo.slice(0, -1).map((item, index) => (
                <div className="flex items-center space-x-3 mt-7" key={index}>
                  <div className="flex items-center justify-center border-2 border-blue-200 bg-gradient-to-b from-blue-500 to-blue-600 shadow-lg rounded-xl p-3">
                    {item.icon}
                  </div>
                  <div className="flex flex-col justify-center">
                    <h4 className="text-sm md:text-lg text-gray-700 font-medium">{item.title}</h4>
                    <p className="text-sm md:text-sm text-gray-600 font-light">{item.content}</p>
                  </div>
                </div>
              ))}

              <div className="mt-7">
                <div className="flex items-center space-x-2">
                  <Rss size={20} color="black" />
                  <h4 className="text-sm md:text-lg text-gray-700 font-medium">Follow Us:</h4>
                </div>
                <div className="flex space-x-2 md:grid md:grid-cols-5 lg:grid-cols-4 xl:grid-cols-5 mt-5">
                  {contactInfo[3]?.socialLinks?.map((item, index) => (
                    <div key={index} className="flex flex-col items-center justify-center">
                      <a href={item.link} target="_blank" rel="noopener noreferrer">
                        <div className="w-14 md:w-20  text-[18px] md:text-[25px] flex items-center justify-center border-2  mg:shadow-lg rounded-xl p-3  transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
                          {item.icon}
                        </div>
                      </a>
                      <div className="mt-2 hidden md:block">
                        <h4 className="text-xs md:text-sm text-gray-700 font-medium text-center">{item.platform}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

      }
    </>
  );
};

export default ContactUs;
