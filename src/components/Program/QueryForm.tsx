import "owl.carousel/dist/assets/owl.carousel.css";
import { useNavigate } from "react-router-dom";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Form from "react-bootstrap/Form";
import { useMediaQuery } from "react-responsive";
import Button from "react-bootstrap/Button";

const QueryForm = ({ pageData, content }) => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  const navigate = useNavigate();

  console.log("content", content);
  return (
    <>
      <section className="md:px-20 px-10 py-10">
        <div className="flex">
          <div className="grid space-y-10 text-center font-Syne">
            <h1 className="mt-20 text-3xl md:text-center text-left font-bold md:text-5xl">
              {content[0]?.Heading1}
            </h1>
            <p className="text-xl mb-20 md:px-44 md:text-center text-left">
              {content[0]?.Heading2}
            </p>
          </div>
        </div>

        <Form className="mt-20 pr-10 md:pl-40">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
            <Form.Group
              className="w-full"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label className="text-3xl text-black-500 font-Syne">
                Full Name*
              </Form.Label>
              <Form.Control
                className="my-6 border-b-2 border-black"
                type="email"
                placeholder="Type your name"
              />
            </Form.Group>

            <Form.Group className="" controlId="exampleForm.ControlInput1">
              <Form.Label className="text-3xl text-black-500 font-Syne">
                Company Name*
              </Form.Label>
              <Form.Control
                className="my-6 border-b-2 border-black"
                type="email"
                placeholder="Type your company"
              />
            </Form.Group>

            <Form.Group className="" controlId="exampleForm.ControlInput1">
              <Form.Label className="text-3xl text-black-500 font-Syne">
                Email address*
              </Form.Label>
              <Form.Control
                className="my-6 border-b-2 border-black"
                type="email"
                placeholder="Type your email"
              />
            </Form.Group>
            <Form.Group
              className="md:mt-16"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label className="text-3xl text-black-500 font-Syne">
                Phone Number*
              </Form.Label>
              <Form.Control
                className="my-6 border-b-2 border-black"
                type="email"
                placeholder="Type your number"
              />
            </Form.Group>
            <Form.Group
              className="md:mt-16"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label className="text-3xl text-black-500 font-Syne">
                Job Title*
              </Form.Label>
              <Form.Control
                className="my-6 border-b-2 border-black"
                type="email"
                placeholder="Type your job title"
              />
            </Form.Group>
          </div>

          <h3 className="text-2xl mt-24 font-Syne">
            Which of Rareminds' services are you most interested in? <br />
            <span className="text-xl font-Syne">(Select all that apply)</span>
          </h3>

          <div className="grid md:grid-cols-3 grid-cols-1 gap-4 mt-10">
            <Form.Check // prettier-ignore
              type="checkbox"
              label="Talent Acquisition"
              className="text-2xl checkbox"
            />
            <Form.Check // prettier-ignore
              type="checkbox"
              label="Talent Management"
              className="text-2xl checkbox"
            />
            <Form.Check // prettier-ignore
              type="checkbox"
              label="Talent Development"
              className="text-2xl checkbox"
            />
          </div>

          <h3 className="text-2xl mt-24 font-Syne">
            How did you hear about Rareminds?
          </h3>

          <div className="grid md:grid-cols-3 grid-cols-1 gap-4 mt-10">
            <Form.Check // prettier-ignore
              type="radio"
              label="Website"
              className="text-2xl radio"
            />
            <Form.Check // prettier-ignore
              type="radio"
              label="Referral"
              className="text-2xl radio"
            />
            <Form.Check // prettier-ignore
              type="radio"
              label="Social Media"
              className="text-2xl radio"
            />
          </div>

          <h3 className="text-xl mt-24 font-Syne">
            Feel free to share any additional information or questions you have
            for the Rareminds team:
          </h3>

          <Form.Control
            as="textarea"
            className="mt-10 border-2 w-full p-5 rounded-xl"
            rows={5}
            placeholder="Type here"
          />

          <Form.Check // prettier-ignore
            type="checkbox"
            label="By submitting this form, you agree to be contacted by our team representative to discuss a customised talent solution for your organisation. Rest assured, your information will be kept confidential."
            className="text-xl font-Syne checkbox mt-10"
          />
          <h2 className="text-2xl mt-20 font-Syne font-bold">
            {content[0]?.SubHeading1}
          </h2>

          <h2 className="text-xl mt-20 pr-56 font-Syne font-bold">
            {content[0]?.SubHeading2}
          </h2>

          <div className="grid grid-cols-4 gap-4 mt-20">
            <div>
              <Button
                className=" bg-blue-100 px-10 py-2 font-Syne text-xl rounded-md"
                variant="primary"
                size="lg"
              >
                Submit
              </Button>
            </div>

            <div></div>
            <div></div>
            <div className="text-2cl font-Syne">Back</div>
          </div>
        </Form>
      </section>
    </>
  );
};

export default QueryForm;
