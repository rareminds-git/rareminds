import React, { useEffect, useState } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import { useNavigate } from "react-router-dom";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Form from "react-bootstrap/Form";
import { useMediaQuery } from "react-responsive";
import Button from "react-bootstrap/Button";
import axios from "axios";
import BackArrow from "../../assets/images/back-arrow.svg";

const QueryForm = ({ pageData, content }) => {
  const isMobile = useMediaQuery({ query: `(max-width: 1200px)` });
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
      <section className="xl:px-32 lg:px-24 md:px-20 px-8 xl:pb-16 lg:pb-12 md:pb-8 pb-4 xl:py-16 lg:py-12 md:py-8 py-8 cursor-pointer">
        <div className="flex justify-center">
          <div className="grid space-y-10 text-center ">
            <h1
              className="text-3xl md:text-center text-left font-bold md:text-5xl"
              dangerouslySetInnerHTML={{
                __html: content[0]?.Heading1,
              }}
            />
            <p
              className="text-xl mb-20 md:px-16 xl:px-64 md:text-center text-left"
              dangerouslySetInnerHTML={{
                __html: content[0]?.Heading2,
              }}
            />

            <h3
              className={`text-xl mt-8 px-24 md:text-center text-left text-red-500 font-bold font-playfair fixed ${errorMessage ? "bg-gray-300" : "transparent"} top-10 left-0 w-full p-5 xl:p-0 z-50`}
            >
              {errorMessage}
            </h3>
          </div>
        </div>

        <Form className="mt-20 max-w-4xl w-full mx-auto">
          <div className="grid md:grid-cols-2 grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 gap-16">
            <Form.Group className="w-full grid md:grid-rows-2">
              <Form.Label className="sm:text-[18px] md:text-[26px] leading-[31.2px] text-black-500 font-medium">
                Full Name*
              </Form.Label>
              <Form.Control
                className={`my-2 w-full border-b-2 ${errors.FullName ? "border-red-500" : "border-black"} placeholder-placeholder-red`}
                type="text"
                placeholder="Type your name"
                onChange={(e) => {
                  const re = /^[A-Za-z\s]+$/;

                  if (e.target.value === "" || re.test(e.target.value)) {
                    setFormData({ ...formData, FullName: e.target.value });
                    setErrors({ ...errors, FullName: "" });
                  }
                }}
                value={formData.FullName}
              />
              {errors.FullName && (
                <span className="error-message text-red-500 font-bold">
                  {errors.FullName}
                </span>
              )}
            </Form.Group>

            <Form.Group className="grid md:grid-rows-2 w-full">
              <Form.Label className="sm:text-[18px] md:text-[26px] leading-[31.2px] text-black-500 font-medium">
                Company Name*
              </Form.Label>
              <Form.Control
                className={`my-2 w-full border-b-2 ${errors.CompanyName ? "border-red-500" : "border-black"} placeholder-placeholder-red`}
                type="text"
                placeholder="Type your company"
                onChange={(e) => {
                  const re = /^[A-Za-z\s]+$/;

                  if (e.target.value === "" || re.test(e.target.value)) {
                    setFormData({ ...formData, CompanyName: e.target.value });
                    setErrors({ ...errors, CompanyName: "" });
                  }
                }}
                value={formData.CompanyName}
              />
              {errors.CompanyName && (
                <span className="error-message text-red-500 font-bold">
                  {errors.CompanyName}
                </span>
              )}
            </Form.Group>

            <Form.Group className="grid md:grid-rows-2 w-full">
              <Form.Label className="sm:text-[18px] md:text-[26px] leading-[31.2px] text-black-500 font-medium">
                Email address*
              </Form.Label>
              <Form.Control
                className={`my-2 w-full border-b-2 ${errors.Email ? "border-red-500" : "border-black"} placeholder-placeholder-red`}
                type="text"
                placeholder="Type your email"
                onChange={(e) => {
                  setFormData({ ...formData, Email: e.target.value });
                  setErrors({ ...errors, Email: "" });
                }}
              />
              {errors.Email && (
                <span className="error-message text-red-500 font-bold">
                  {errors.Email}
                </span>
              )}
            </Form.Group>
            <Form.Group className="grid md:grid-rows-2 w-full">
              <Form.Label className="sm:text-[18px] md:text-[26px] leading-[31.2px] text-black-500 font-medium">
                Phone Number*
              </Form.Label>
              <Form.Control
                className={`my-2 w-full border-b-2 ${errors.PhoneNumber ? "border-red-500" : "border-black"} placeholder-placeholder-red`}
                type="text"
                placeholder="Type your number"
                onChange={(e) => {
                  const re = /^[0-9\b]+$/;

                  if (e.target.value === "" || re.test(e.target.value)) {
                    setFormData({ ...formData, PhoneNumber: e.target.value });
                    setErrors({ ...errors, PhoneNumber: "" });
                  }
                }}
                value={formData.PhoneNumber}
              />
              {errors.PhoneNumber && (
                <span className="error-message text-red-500 font-bold">
                  {errors.PhoneNumber}
                </span>
              )}
            </Form.Group>
            <Form.Group className="grid md:grid-rows-2 w-full">
              <Form.Label className="sm:text-[18px] md:text-[26px] leading-[31.2px] text-black-500 font-medium">
                Job Title*
              </Form.Label>
              <Form.Control
                className={`my-2 w-full border-b-2 ${errors.JobTitle ? "border-red-500" : "border-black"} placeholder-placeholder-red`}
                type="text"
                placeholder="Type your job title"
                onChange={(e) => {
                  const re = /^[A-Za-z\s]+$/;

                  if (e.target.value === "" || re.test(e.target.value)) {
                    setFormData({ ...formData, JobTitle: e.target.value });
                    setErrors({ ...errors, JobTitle: "" });
                  }
                }}
                value={formData.JobTitle}
              />
              {errors.JobTitle && (
                <span className="error-message text-red-500 font-bold">
                  {errors.JobTitle}
                </span>
              )}
            </Form.Group>
          </div>

          <h3 className="sm:text-[22px] md:text-[26px] leading-[42.12px] font-medium mt-24 ">
            Which of Rareminds' services are you most interested in? <br />
            <span className="text-[20px] leading-[32.4px] font-normal">
              (Select all that apply)
            </span>
          </h3>

          <div className="grid md:grid-cols-3 grid-cols-1 gap-4 mt-10">
            <Form.Check // prettier-ignore
              type="checkbox"
              label="Talent Acquisition"
              className="sm:text-[18px] md:md:text-[30px] leading-[36px] font-normal checkbox font-Syne"
              value={"TA"}
              onChange={(e) => {
                setCheckBoxValue(e);
              }}
            />
            <Form.Check // prettier-ignore
              type="checkbox"
              label="Talent Management"
              className="sm:text-[18px] md:text-[30px] leading-[36px] font-normal checkbox font-playfair"
              value={"TM"}
              onChange={(e) => {
                setCheckBoxValue(e);
              }}
            />
            <Form.Check // prettier-ignore
              type="checkbox"
              label="Talent Development"
              className="sm:text-[18px] md:text-[30px] leading-[36px] font-normal checkbox font-playfair"
              value={"TD"}
              onChange={(e) => {
                setCheckBoxValue(e);
              }}
            />
          </div>

          <h3 className="sm:text-[22px] text-[26px] leading-[42.12px] font-medium mt-24 ">
            How did you hear about Rareminds?
          </h3>

          <div className="grid md:grid-cols-3 sm:grid-cols-2 sm:gap-1 gap-4 mt-10">
            <label className="radio-button sm:text-[18px] md:text-[26px]">
              <input
                type="radio"
                onChange={() =>
                  setFormData({ ...formData, ReferralSource: "Website" })
                }
                name="example-radio"
                value="option1"
                className="sm:text-[18px] md:text-[30px] leading-[36px] font-normal radio text-black font-playfair"
              />
              <span className="radio"></span>
              Website
            </label>
            <label className="radio-button sm:text-[18px] md:text-[26px]">
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
            <label className="radio-button sm:text-[18px] md:text-[26px]">
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
            <label className="radio-button sm:text-[18px] md:text-[26px]">
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
            <label className="radio-button sm:text-[18px] md:text-[26px]">
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

          <h3 className="text-[18px] leading-[24px] font-medium mt-24 font-playfair">
            Feel free to share any additional information or questions you have
            for the Rareminds team:
          </h3>

          <Form.Control
            as="textarea"
            className="mt-10 border-2 sm:w-[100%] w-[70%] p-5 rounded-xl"
            rows={5}
            placeholder="Type here"
            onChange={(e) =>
              setFormData({ ...formData, Comment: e.target.value })
            }
          />

          <Form.Check // prettier-ignore
            type="checkbox"
            label="By submitting this form, you agree to be contacted by our team representative to discuss a customised talent solution for your organisation. Rest assured, your information will be kept confidential."
            className="text-[18px] leading-[24px] font-normal md:w-[75%] font-playfair checkbox mt-10"
          />

          <h2 className="md:text-[26px] sm:text-[18px] leading-[29px] md:w-[60%] xl:w-[60%] xxl:w-[75%] sm:w-[100%] mt-24 sm:pr-12 pr-56 font-bold">
            {content[0]?.SubHeading1}
          </h2>

          <h2 className="text-[26px] leading-[42.12px] font-medium mt-12">
            {content[0]?.SubHeading2}
          </h2>

          <div className="grid grid-cols-4 gap-4 mt-8">
            <div>
              <Button
                className=" bg-[#CAF0F8] px-10 py-2 font-bold font-playfair text-xl rounded-md"
                variant="primary"
                size="lg"
                onClick={() => submitQueryForm()}
              >
                Submit
              </Button>
            </div>

            <div></div>
            <div></div>
            <div className="text-[16px] leading-[20px] font-bold font-playfair flex items-center justify-end">
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
      </section>
    </>
  );
};

export default QueryForm;
