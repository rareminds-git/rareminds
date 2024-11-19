import React, { useEffect, useState, useRef } from "react";
import FooterIcon from "./FooterIcon"; // Assuming you have a component for icons
import { useMediaQuery } from "react-responsive";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FaceBookIcon from "../../assets/images/fb-icon.svg";
import TwitterIcon from "../../assets/images/twitter-icon.svg";
import LinkedInIcon from "../../assets/images/linkedin-icon.svg";
import YoutubeIcon from "../../assets/images/youtube-icon.svg";
import InstagramIcon from "../../assets/images/instagram-icon.svg";

const socialIcons = [
  { id: 1, icon: FaceBookIcon, link: "https://www.facebook.com/raremindsgroup" },
  { id: 2, icon: TwitterIcon, link: "https://twitter.com/minds_rare" },
  { id: 3, icon: InstagramIcon, link: "https://www.instagram.com/rareminds_eym/" },
  { id: 4, icon: YoutubeIcon, link: "https://www.youtube.com/channel/UClkBtwJsScYxFzNoFdlifeA" },
  { id: 5, icon: LinkedInIcon, link: "https://www.linkedin.com/company/13376601/admin/" },
];

const FooterBar = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 1200px)` });
  const [serviceData, setServiceData] = useState<any>({});
  const [subscriberEmail, setSubscriberEmail] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const navigate = useNavigate();
  const subscribeInput = useRef();

  const userType = localStorage.getItem("currentUserType");

  useEffect(() => {
    async function getData() {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}services/${userType}`);
      setServiceData(res.data);
    }
    getData();
  }, [userType]);

  const submitSubscription = () => {
    if (subscriberEmail) {
      if (!/(.+)@(.+){2,}\.(.+){2,}/.test(subscriberEmail)) {
        setSuccessMessage("Enter a valid email address");
      } else {
        setSuccessMessage(null);
        const config = {
          method: "post",
          maxBodyLength: Infinity,
          url: `${import.meta.env.VITE_API_URL}subscribers`,
          headers: {
            "Content-Type": "application/json",
          },
          data: { SubscriberEmail: subscriberEmail },
        };

        axios.request(config).then((response) => {
          if (response.data.status === 200) {
            setSuccessMessage("Thank you for subscribing");
            subscribeInput.current.value = "";
            setTimeout(() => setSuccessMessage(null), 2000);
          }
        }).catch(console.log);
      }
    } else {
      setSuccessMessage("Please enter an email address");
    }
  };

  return (
    <div className="bg-black text-white font-Syne">
      <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-5'} gap-4 mx-10 py-10`}>
        {/* Links Section */}
        <div>
        <h2 className="font-bold mb-2 uppercase tracking-wider">Quick Links</h2>
          <ul className="text-[16px] leading-[20px]">
            <li className="mb-2"><a href="/">Home</a></li>
            <li className="mb-2"><a href="/about">About</a></li>
            <li className="mb-2"><a href="/contact-us">Contact</a></li>
          </ul>
        </div>

        {/* Corporate Program Section */}
        <div>
          <h2 className="font-bold mb-2 uppercase tracking-wider">Corporate Program</h2>
          <ul className="text-[16px] leading-[20px]">
            <li className="mb-2"><a onClick={() => navigate("/institutions")}>Institutions Program</a></li>
            <li className="mb-2"><a onClick={() => navigate("/government")}>Government Program</a></li>
            <li className="mb-2"><a onClick={() => navigate("/schools")}>School Program</a></li>
          </ul>
        </div>

        {/* Our Services Section [] */}
        <div>
          <h2 className="font-bold mb-2 uppercase tracking-wider">Our Services</h2>
          <ul className="text-[16px] leading-[20px]">
            {serviceData?.serviceData?.map((ele: any) => (
              <li className="mb-2" key={ele.ContentSlug}><a href={`/${ele.ContentSlug}`}>{ele.Heading1}</a></li>
            ))}
          </ul>
        </div>

        {/* Case Study Section */}
        <div>
          <h2 className="font-bold mb-2 uppercase tracking-wider">Case Study</h2>
          <ul className="text-[16px] leading-[20px]">
            <li className="mb-2"><a href="/blogs">Blog</a></li>
            <li className="mb-2"><a href="/walloffame">Wall of Fame</a></li>
            <li className="mb-2"><a href="/events">Events</a></li>
          </ul>
        </div>

        {/* Newsletter Signup Section */}
        <div>
          <h2 className="font-bold mb-2">SIGN UP TO OUR NEWSLETTER</h2>
          <form onSubmit={(e) => { e.preventDefault(); submitSubscription(); }}>
            <input
              type="email"
              placeholder="Email address"
              className="p-2 mb-4 w-full bg-transparent border border-[#CAF0F8] text-white"
              onChange={(e) => {
                setSuccessMessage(null);
                setSubscriberEmail(e.target.value);
              }}
              ref={subscribeInput}
            />
            <button type="submit" className="p-2 w-full bg-[#CAF0F8] text-black font-bold">SUBSCRIBE</button>
          </form>
          {successMessage && <p className="text-white text-center mt-4">{successMessage}</p>}
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-gray-700 py-2 text-center text-gray-500">
        <div className="flex justify-between mx-10">
          <p>@rareminds 2024</p>
          <a href="/privacy-policy" className="underline">Privacy</a>
        </div>
      </div>
    </div>
  );
};

export default FooterBar;

