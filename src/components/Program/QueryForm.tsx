import axios from "axios";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import BackArrow from "../../assets/images/back-arrow.svg";

const QueryForm = ({ pageData, content = [] }) => {
  const isMobile = useMediaQuery({ query: `(max-width: 1200px)` });
  const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState({
    FullName: "",
    CompanyName: "",
    Email: "",
    PhoneNumber: "",
    JobTitle: "",
  });
  const [successMessage, setSuccessMsg] = useState(null);
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMsg] = useState(null);
  const navigate = useNavigate();

  const validateForm = (data) => {
    const errors = {};

    if (!data.FullName.trim()) {
      errors.FullName = "Full Name is required";
    }
    if (!data.CompanyName.trim()) {
      errors.CompanyName = "Company Name is required";
    }
    if (!data.JobTitle.trim()) {
      errors.JobTitle = "Job Title is required";
    }

    if (!data.Email.trim()) {
      errors.Email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.Email)) {
      errors.Email = "Email is invalid";
    }

    if (!data.PhoneNumber.trim()) {
      errors.PhoneNumber = "Phone Number is required";
    } else if (data.PhoneNumber.length < 10) {
      errors.PhoneNumber =
        "Phone Number is invalid. Minimum 10 digits required";
    } else if (data.PhoneNumber.length > 12) {
      errors.PhoneNumber = "Phone Number is invalid. Maximum 12 digits allowed";
    }

    if (!isChecked) {
      errors.terms = 'You must agree to the terms and conditions';
    }

    return errors;
  };

  const submitQueryForm = () => {
    const newErrors = validateForm(formData);
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      formData.Services = formData.Services.join(", ");

      const config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `${import.meta.env.VITE_API_URL}submit-query-form`,
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify(formData),
      };

      axios
        .request(config)
        .then((response) => {
          if (response.data.status === 200) {
            setSuccessMsg(response.data.message);
          }
          if (response.data.status === 500) {
            setErrorMsg(response.data.message);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setErrorMsg(
        "Please fill all the required(*) fields and agree to the terms and conditions to submit your details ."
      );
      return false;
    }
  };

  const setCheckBoxValue = (e) => {
    let services = formData.Services;

    if (services && services.length > 0) {
      if (e.target.checked) {
        services.push(e.target.value);
      } else {
        services = services.filter((el: any) => el !== e.target.value);
      }

      setFormData({ ...formData, Services: services });
    } else {
      const servicesArray = [];
      servicesArray.push(e.target.value);
      setFormData({ ...formData, Services: servicesArray });
    }
  };

  return successMessage ? (
    <section className="xl:px-28 lg:px-24 md:px-20 px-8 xl:pb-16 lg:pb-12 md:pb-8 pb-4 xl:py-16 lg:py-12 md:py-8 py-8 cursor-pointer">
      <div className="flex">
        <div className="grid space-y-10 text-center ">
          <h1
            className="mt-20 text-3xl md:text-center text-left font-bold md:text-5xl"
            dangerouslySetInnerHTML={{
              __html: content[0]?.Heading1,
            }}
          />
          <p
            className="text-xl mb-20 md:px-32 md:text-center text-left"
            dangerouslySetInnerHTML={{
              __html: content[0]?.Heading2,
            }}
          />
          <h3 className="mt-20 text-3xl md:text-center text-left font-bold md:text-5xl z-10">
            {successMessage}
          </h3>
        </div>
      </div>
    </section>
  ) : (
    <>
      <section className="xl:px-32 lg:px-24 md:px-20 px-4 xl:pb-16 lg:pb-12 md:pb-8 pb-4 xl:py-16 lg:py-12 md:py-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10  items-center">
        {/* Left Side - Image */}
        <div>
          <img
            src="https://cdn.dribbble.com/userupload/25909716/file/original-ad5a414a6765ede38fdb500174599317.jpg?resize=400x0"
            alt="Rareminds Banner"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* <div className="flex justify-center">
          <div className="grid space-y-10 text-center ">
            <h1
              className="text-3xl md:text-center text-left font-bold md:text-5xl"
              dangerouslySetInnerHTML={{
                __html: content[0]?.Heading1 || "Greetings, Trailblazers!"
                ,
              }}
            />
            <p
              className="text-xl mb-20 md:px-16 xl:px-64 md:text-center text-left"
              dangerouslySetInnerHTML={{
                __html: content[0]?.Heading2 || "Are you ready to embark on a journey of unparalleled success? You are at your destination! Rareminds is your gateway to tailor-made talent solutions that elevate your game. Let's join forces and craft the path to greatness together!",
              }}
            />

            <h3
              className={`text-xl mt-8 px-24 md:text-center text-left text-red-500 font-bold font-playfair fixed ${errorMessage ? "bg-gray-300" : "transparent"} top-10 left-0 w-full p-5 xl:p-0 z-50`}
            >
              {errorMessage}
            </h3>
          </div>
        </div> */}

        <Form className="max-w-4xl w-full mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-6">
            {/* Full Name - Takes 2 columns */}
            <div className="md:col-span-2">
              <label htmlFor="fullName" className="text-sm md:text-base  text-black-500">
                Full Name*
              </label>
              <input
                id="fullName"
                className={`my-2 w-full border-2 ${errors.FullName ? "border-red-500" : "border-black"} rounded-lg px-2 py-2 md:px-4 md:py-2`}
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
              {errors.FullName && <span className="text-red-500 font-bold">{errors.FullName}</span>}
            </div>

            {/* Company Name */}
            <div>
              <label htmlFor="companyName" className="text-sm md:text-base  text-black-500">
                Company Name*
              </label>
              <input
                id="companyName"
                className={`my-2 w-full border-2 ${errors.CompanyName ? "border-red-500" : "border-black"} rounded-lg px-2 py-2 md:px-4 md:py-2`}
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
              {errors.CompanyName && <span className="text-red-500 font-bold">{errors.CompanyName}</span>}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="text-sm md:text-base  text-black-500">
                Email address*
              </label>
              <input
                id="email"
                className={`my-2 w-full border-2 ${errors.Email ? "border-red-500" : "border-black"} rounded-lg px-2 py-2 md:px-4 md:py-2`}
                type="email"
                placeholder="Type your email"
                value={formData.Email}
                onChange={(e) => {
                  setFormData({ ...formData, Email: e.target.value });
                  setErrors({ ...errors, Email: "" });
                }}
              />
              {errors.Email && <span className="text-red-500 font-bold">{errors.Email}</span>}
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phoneNumber" className="text-sm md:text-base  text-black-500">
                Phone Number*
              </label>
              <input
                id="phoneNumber"
                className={`my-2 w-full border-2 ${errors.PhoneNumber ? "border-red-500" : "border-black"} rounded-lg px-2 py-2 md:px-4 md:py-2`}
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
              {errors.PhoneNumber && <span className="text-red-500 font-bold">{errors.PhoneNumber}</span>}
            </div>

            {/* Job Title */}
            <div>
              <label htmlFor="jobTitle" className="text-sm md:text-base  text-black-500">
                Job Title*
              </label>
              <input
                id="jobTitle"
                className={`my-2 w-full border-2 ${errors.JobTitle ? "border-red-500" : "border-black"} rounded-lg px-2 py-2 md:px-4 md:py-2`}
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
              {errors.JobTitle && <span className="text-red-500 font-bold">{errors.JobTitle}</span>}
            </div>
          </div>


          <h3 className="text-base md:text-lg font-bold  text-black-500 mt-2 md:mt-5  ">
            Which of Rareminds' services are you most interested in? <br />
            <span className="text-sm md:text-base font-light text-black/60 ">
              (Select all that apply)
            </span>
          </h3>

          <div className="grid md:grid-cols-3 grid-cols-1  mt-5">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="sm:text-[18px] md:text-[30px] leading-[36px] font-normal checkbox font-Syne"
                value="TA"
                onChange={setCheckBoxValue}
              />
              <span>Talent Acquisition</span>
            </label>

            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="sm:text-[18px] md:text-[30px] leading-[36px] font-normal checkbox font-playfair"
                value="TM"
                onChange={setCheckBoxValue}
              />
              <span>Talent Management</span>
            </label>

            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="sm:text-[18px] md:text-[30px] leading-[36px] font-normal checkbox font-playfair"
                value="TD"
                onChange={setCheckBoxValue}
              />
              <span>Talent Development</span>
            </label>
          </div>


          <h3 className="text-base md:text-lg font-bold  text-black-500 mt-5 ">
            How did you hear about Rareminds?
          </h3>

          <div className="md:flex grid grid-cols-2 sm:gap-0 mt-3 ">
            <label className="radio-button text-base md:text-lg">
              <input
                type="radio"
                onChange={() =>
                  setFormData({ ...formData, ReferralSource: "Website" })
                }
                name="example-radio"
                value="option1"
                className="text-base md:text-lg font-normal radio text-white"
              />
              <span className="radio"></span>
              Website
            </label>
            <label className="radio-button text-base md:text-lg">
              <input
                type="radio"
                onChange={() =>
                  setFormData({ ...formData, ReferralSource: "Referral" })
                }
                name="example-radio"
                value="option1"
                className="sm:text-[18px] md:text-[30px] leading-[36px] font-normal radio text-black font-playfair"
              />
              <span className="radio"></span>
              Referral
            </label>
            <label className="radio-button text-base md:text-lg">
              <input
                type="radio"
                onChange={() =>
                  setFormData({ ...formData, ReferralSource: "Social Media" })
                }
                name="example-radio"
                value="option1"
                className="sm:text-[18px] md:text-[30px] leading-[36px] font-normal radio text-black font-playfair"
              />
              <span className="radio"></span>
              Social Media
            </label>
            <label className="radio-button text-base md:text-lg">
              <input
                type="radio"
                onChange={() =>
                  setFormData({ ...formData, ReferralSource: "Industry Event" })
                }
                name="example-radio"
                value="option1"
                className="sm:text-[18px] md:text-[30px] leading-[36px] font-normal radio text-black font-playfair"
              />
              <span className="radio"></span>
              Industry Event
            </label>
            <label className="radio-button text-base md:text-lg">
              <input
                type="radio"
                onChange={() =>
                  setFormData({ ...formData, ReferralSource: "Other" })
                }
                name="example-radio"
                value="option1"
                className="sm:text-[18px] md:text-[30px] leading-[36px] font-normal radio text-black font-playfair"
              />
              <span className="radio"></span>
              Other
            </label>
          </div>

          <h3 className="text-base md:text-lg font-bold  text-black-500 mt-5">
            Feel free to share any additional information or questions you have
            for the Rareminds team:
          </h3>

          <Form.Control
            as="textarea"
            className="mt-5 border-2 sm:w-[100%] w-[70%] p-5 rounded-xl"
            rows={5}
            placeholder="Type here"
            onChange={(e) =>
              setFormData({ ...formData, Comment: e.target.value })
            }
          />

          <Form.Check // prettier-ignore
            type="checkbox"
            checked={isChecked}
            label="By submitting this form, you agree to be contacted by our team representative to discuss a customised talent solution for your organisation. Rest assured, your information will be kept confidential.*"
            className="text-base md:text-lg font-bold  text-black/60 md:w-full  checkbox mt-5"
            onChange={(e) => setIsChecked(e.target.checked)}
          />

          <h2 className="text-base md:text-lg font-bold  text-black-500 mt-5 ">
            {content[0]?.SubHeading1 || "Ready to make waves? Let's dive in and unlock your full potential!"}
          </h2>

          <h2 className="text-xl md:text-xl font-extrabold  text-black/60 mt-5">
            {content[0]?.SubHeading2 || "Let's Connect"}
          </h2>

          <div className="grid grid-cols-4 gap-4 mt-2 md:mt-5">
            <div>
              <Button
                className=" bg-[#CAF0F8] px-10 py-2 font-bold  text-xl rounded-md"
                variant="primary"
                size="lg"
                onClick={() => submitQueryForm()}
              >
                Submit
              </Button>
            </div>

            <div></div>
            <div></div>

            <div className="text-[16px] leading-[20px] font-bold font-playfair flex items-center ml-auto cursor-pointer px-5" onClick={() => { navigate(-1) }}>

              <img
                className="flex-inline mr-2"
                src={BackArrow}
                alt="back"
                width="12px"
              />
              <span className="flex-inline">Back</span>
            </div>
          </div>
        </Form>

        </div>
      </section>
    </>
  );
};

export default QueryForm;