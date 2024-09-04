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
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
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
        url: "http://13.126.41.32/api/submit-query-form",
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
    <section className="md:px-20 px-10 md:pt-32 md:pb-48">
      <div className="flex">
        <div className="grid space-y-10 text-center font-Syne">
          <h1 className="mt-20 text-3xl md:text-center text-left font-bold md:text-5xl">
            {content[0]?.Heading1}
          </h1>
          <p className="text-xl mb-20 md:px-44 md:text-center text-left">
            {content[0]?.Heading2}
          </p>
          <h3 className="mt-20 text-3xl md:text-center text-left font-bold md:text-5xl">
            {successMessage}
          </h3>
        </div>
      </div>
    </section>
  ) : (
    <>
      <section className="md:px-60 px-10 md:pt-32 md:pb-48">
        <div className="flex">
          <div className="grid space-y-10 text-center font-Syne">
            <h1 className="mt-20 text-3xl md:text-center text-left font-bold md:text-5xl">
              {content[0]?.Heading1}
            </h1>
            <p className="text-xl mb-20 md:px-72 md:text-center text-left">
              {content[0]?.Heading2}
            </p>

            <h3
              className={`text-xl mt-8 px-24 md:text-center text-left text-red-500 font-bold font-Syne fixed ${errorMessage ? "bg-gray-300" : "bg-white"} top-10 left-0 w-full p-5 z-50`}
            >
              {errorMessage}
            </h3>
          </div>
        </div>

        <Form className="mt-20 pr-10 md:px-20">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
            <Form.Group className="w-full grid md:grid-rows-2">
              <Form.Label className="text-[26px] leading-[31.2px] text-black-500 font-medium">
                Full Name*
              </Form.Label>
              <Form.Control
                className={`my-2 w-72 border-b-2 ${errors.FullName ? "border-red-500" : "border-black"}`}
                type="text"
                placeholder="Type your name"
                onChange={(e) =>
                  setFormData({ ...formData, FullName: e.target.value })
                }
              />
              {errors.FullName && (
                <span className="error-message text-red-500 font-bold">
                  {errors.FullName}
                </span>
              )}
            </Form.Group>

            <Form.Group className="grid md:grid-rows-2 w-full">
              <Form.Label className="text-[26px] leading-[31.2px] text-black-500 font-medium">
                Company Name*
              </Form.Label>
              <Form.Control
                className={`my-2 w-72 border-b-2 ${errors.CompanyName ? "border-red-500" : "border-black"}`}
                type="text"
                placeholder="Type your company"
                onChange={(e) =>
                  setFormData({ ...formData, CompanyName: e.target.value })
                }
              />
              {errors.CompanyName && (
                <span className="error-message text-red-500 font-bold">
                  {errors.CompanyName}
                </span>
              )}
            </Form.Group>

            <Form.Group className="grid md:grid-rows-2 w-full">
              <Form.Label className="text-[26px] leading-[31.2px] text-black-500 font-medium">
                Email address*
              </Form.Label>
              <Form.Control
                className={`my-2 w-72 border-b-2 ${errors.Email ? "border-red-500" : "border-black"}`}
                type="text"
                placeholder="Type your email"
                onChange={(e) =>
                  setFormData({ ...formData, Email: e.target.value })
                }
              />
              {errors.Email && (
                <span className="error-message text-red-500 font-bold">
                  {errors.Email}
                </span>
              )}
            </Form.Group>
            <Form.Group className="md:mt-16 grid md:grid-rows-2 w-full">
              <Form.Label className="text-[26px] leading-[31.2px] text-black-500 font-medium">
                Phone Number*
              </Form.Label>
              <Form.Control
                className={`my-2 w-72 border-b-2 ${errors.PhoneNumber ? "border-red-500" : "border-black"}`}
                type="text"
                placeholder="Type your number"
                onChange={(e) =>
                  setFormData({ ...formData, PhoneNumber: e.target.value })
                }
              />
              {errors.PhoneNumber && (
                <span className="error-message text-red-500 font-bold">
                  {errors.PhoneNumber}
                </span>
              )}
            </Form.Group>
            <Form.Group className="md:mt-16 grid md:grid-rows-2 w-full">
              <Form.Label className="text-[26px] leading-[31.2px] text-black-500 font-medium">
                Job Title*
              </Form.Label>
              <Form.Control
                className={`my-2 w-72 border-b-2 ${errors.JobTitle ? "border-red-500" : "border-black"}`}
                type="text"
                placeholder="Type your job title"
                onChange={(e) =>
                  setFormData({ ...formData, JobTitle: e.target.value })
                }
              />
              {errors.JobTitle && (
                <span className="error-message text-red-500 font-bold">
                  {errors.JobTitle}
                </span>
              )}
            </Form.Group>
          </div>

          <h3 className="text-[26px] leading-[42.12px] font-medium mt-24 font-Syne">
            Which of Rareminds' services are you most interested in? <br />
            <span className="text-[20px] leading-[32.4px] font-normal font-Syne">
              (Select all that apply)
            </span>
          </h3>

          <div className="grid md:grid-cols-3 grid-cols-1 gap-4 mt-10">
            <Form.Check // prettier-ignore
              type="checkbox"
              label="Talent Acquisition"
              className="text-[30px] leading-[36px] font-normal checkbox font-Syne"
              value={"TA"}
              onChange={(e) => {
                setCheckBoxValue(e);
              }}
            />
            <Form.Check // prettier-ignore
              type="checkbox"
              label="Talent Management"
              className="text-[30px] leading-[36px] font-normal checkbox font-Syne"
              value={"TM"}
              onChange={(e) => {
                setCheckBoxValue(e);
              }}
            />
            <Form.Check // prettier-ignore
              type="checkbox"
              label="Talent Development"
              className="text-[30px] leading-[36px] font-normal checkbox font-Syne"
              value={"TD"}
              onChange={(e) => {
                setCheckBoxValue(e);
              }}
            />
          </div>

          <h3 className="text-[26px] leading-[42.12px] font-medium mt-24 font-Syne">
            How did you hear about Rareminds?
          </h3>

          <div className="grid md:grid-cols-3 grid-cols-1 gap-4 mt-10">
            <label className="radio-button">
              <input
                type="radio"
                onChange={() =>
                  setFormData({ ...formData, ReferralSource: "Website" })
                }
                name="example-radio"
                value="option1"
                className="text-[30px] leading-[36px] font-normal radio text-black font-Syne"
              />
              <span className="radio"></span>
              Website
            </label>
            <label className="radio-button">
              <input
                type="radio"
                onChange={() =>
                  setFormData({ ...formData, ReferralSource: "Referral" })
                }
                name="example-radio"
                value="option1"
                className="text-[30px] leading-[36px] font-normal radio text-black font-Syne"
              />
              <span className="radio"></span>
              Referral
            </label>
            <label className="radio-button">
              <input
                type="radio"
                onChange={() =>
                  setFormData({ ...formData, ReferralSource: "Social Media" })
                }
                name="example-radio"
                value="option1"
                className="text-[30px] leading-[36px] font-normal radio text-black font-Syne"
              />
              <span className="radio"></span>
              Social Media
            </label>
            <label className="radio-button">
              <input
                type="radio"
                onChange={() =>
                  setFormData({ ...formData, ReferralSource: "Industry Event" })
                }
                name="example-radio"
                value="option1"
                className="text-[30px] leading-[36px] font-normal radio text-black font-Syne"
              />
              <span className="radio"></span>
              Industry Event
            </label>
            <label className="radio-button">
              <input
                type="radio"
                onChange={() =>
                  setFormData({ ...formData, ReferralSource: "Other" })
                }
                name="example-radio"
                value="option1"
                className="text-[30px] leading-[36px] font-normal radio text-black font-Syne"
              />
              <span className="radio"></span>
              Other
            </label>
          </div>

          <h3 className="text-[18px] leading-[24px] font-medium mt-24 font-Syne">
            Feel free to share any additional information or questions you have
            for the Rareminds team:
          </h3>

          <Form.Control
            as="textarea"
            className="mt-10 border-2 w-[70%] p-5 rounded-xl"
            rows={5}
            placeholder="Type here"
            onChange={(e) =>
              setFormData({ ...formData, Comment: e.target.value })
            }
          />

          <Form.Check // prettier-ignore
            type="checkbox"
            label="By submitting this form, you agree to be contacted by our team representative to discuss a customised talent solution for your organisation. Rest assured, your information will be kept confidential."
            className="text-[18px] leading-[24px] font-normal md:w-[75%] font-Syne checkbox mt-10"
          />

          <h2 className="text-[26px] leading-[29px] md:w-[60%] mt-24 pr-56 font-Syne font-bold">
            {content[0]?.SubHeading1}
          </h2>

          <h2 className="text-[26px] leading-[42.12px] font-medium mt-12 font-Syne">
            {content[0]?.SubHeading2}
          </h2>

          <div className="grid grid-cols-4 gap-4 mt-8">
            <div>
              <Button
                className=" bg-[#CAF0F8] px-10 py-2 font-bold font-Syne text-xl rounded-md"
                variant="primary"
                size="lg"
                onClick={() => submitQueryForm()}
              >
                Submit
              </Button>
            </div>

            <div></div>
            <div></div>
            <div className="text-[16px] leading-[20px] font-bold font-Syne flex items-center">
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
