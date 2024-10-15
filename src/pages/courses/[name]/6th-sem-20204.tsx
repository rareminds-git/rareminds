import React, { useEffect, useState } from "react";
import axios from "axios";
import CourseBanner from "../../../assets/images/course-header.jpg";
import Image1 from "../../../assets/images/img1.jpg";
import TestimonialCarousel from "@/components/Hero/TestimonalCarousel";

const CourseDetail = () => {
  const [testimonials, setTestimonials] = useState();
  useEffect(() => {
    async function getPageData() {
      await axios
        .get(`${import.meta.env.VITE_API_URL}testimonials`)
        .then((res) => {
          setTestimonials(res.data);
        });
    }

    getPageData();
  }, []);

  return (
    <>
      <section className="md:px-20 px-4 py-10 relative font-Syne">
        <div className="flex">
          <div className="grid">
            <h1 className="mt-20 text-3xl text-left font-bold md:text-5xl">
              Transforming Education and Skill Development: A Proven Success
              with TNSDC
            </h1>
            <br />
            <h3 className="xxl:text-2xl text-sm font-bold text-left xxl:mb-20 mb-4">
              Discover how TNSDC's strategic interventions have reshaped
              educational outcomes and empowered thousands of students across
              Tamil Nadu.
            </h3>
            {/* <p className="text-2xl mb-20">{content?.Description}</p> */}
          </div>
        </div>

        <div className="grid grid-cols-1 xxl:mb-20 mb-4">
          <div className="cursor-pointer">
            <img
              src={CourseBanner}
              width={"100%"}
              className="rounded-xl object-cover"
            />
          </div>
        </div>
      </section>

      <section className="xxl:px-44 px-4 font-Syne">
        <div className="container xl:px-[80px] px-5 mx-auto">
          <div className="bg-[#F5F7FA] rounded-[30px] px-5 py-10 lg:py-[50px] lg:px-[80px] grid grid-cols-1 lg:grid-cols-2 gap-[30px] 2xl:gap-[100px] mb-[60px] box-shadow border border-[#959da533]">
            <div className="flex flex-col order-[2] lg:order-[1]">
              <h3 className="text-xl xxl:text-3xl font-semibold mt-5">
                What is Tamil Nadu Skill Development Corporation(TNSDC)?
              </h3>
              <p className="mt-5 text-justify">
                The Tamil Nadu Skill Development Corporation (TNSDC) is a
                government initiative in Tamil Nadu, India, aimed at enhancing
                the employability of youth by providing them with the necessary
                skills and training. TNSDC coordinates and implements various
                skill development programs across the state, working in
                collaboration with educational institutions, training providers,
                and industry partners. Their goal is to bridge the gap between
                the skills available and those required by the job market,
                ultimately promoting employment and entrepreneurship in Tamil
                Nadu.
              </p>
            </div>
            <div className="h-full order-[1] lg:order-[2]">
              <img
                src={Image1}
                alt=""
                width="100%"
                className="object-cover h-full rounded-[20px] img-shadow"
              />
            </div>
          </div>

          <div className="mt-[60px] mb-[100px] lg:my-[140px] grid grid-cols-1 lg:grid-cols-2 gap-[40px] lg:gap-[60px]">
            <div className="h-full order-[2] lg:order-[1]">
              <img
                src={CourseBanner}
                alt=""
                width="100%"
                className="object-cover h-full rounded-[20px] img-shadow"
              />
            </div>
            <div className="flex flex-col justify-center order-[1] lg:order-[2]">
              <h3 className="text-xl xxl:text-3xl font-bold">Why Rareminds?</h3>
              <p className="mt-5 max-w-[600px] text-justify">
                Rareminds' relevance as a training partner for TNSDC is further
                underscored by the specialized courses it offers in food
                analysis, organic food production, EV battery management, and
                agribusiness. These courses address critical sectors that are
                pivotal to both the state's economy and sustainable development.
                By providing training in these areas, Rareminds equips
                individuals with the knowledge and skills needed to thrive in
                emerging industries, such as sustainable agriculture and
                electric vehicle technology. This alignment with key growth
                sectors enhances the employability of trainees and supports
                Tamil Nadu's broader goals of economic and environmental
                sustainability.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="xxl:px-44 px-4 font-Syne">
        <div className="container xl:px-[80px] mx-auto px-5">
          <div className="mt-[60px] mb-[100px] lg:my-[140px] grid grid-cols-1 lg:grid-cols-2 gap-[40px] lg:gap-[60px]">
            <div className="flex flex-col items-center justify-center">
              <div className="">
                <h3 className="text-xl xxl:text-3xl font-bold mb-5">
                  Key Achievements of TNSDC
                </h3>
                <div className="flex mt-3">
                  <p className="max-w-[600px] ml-8">
                    15,000+ students trained across 50 institutions.
                  </p>
                </div>
                <div className="flex mt-3">
                  <p className="max-w-[600px] ml-8">
                    40% increase in employability post-training.
                  </p>
                </div>
                <div className="flex mt-3">
                  <p className="max-w-[600px] ml-8">
                    Partnership with leading universities for scalable impact.
                  </p>
                </div>
                <div className="flex mt-3">
                  <p className="max-w-[600px] ml-8">
                    Awarded ‘Best Skill Development Initiative’ in 2023.
                  </p>
                </div>
              </div>
            </div>
            <div className="h-full">
              <img
                src={CourseBanner}
                alt=""
                width="100%"
                className="object-cover h-full rounded-[20px] img-shadow"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="xxl:px-44 px-4 font-Syne min-h-[300px] bg-gradient-to-r from-[#000] to-[#000] text-white flex items-center">
        <div className="container xl:px-[80px] mx-auto grid grid-cols-1 sm:grid-cols-2 h-full py-[80px] gap-10">
          <div className="flex flex-col justify-center items-center">
            <p className="text-5xl font-bold">15,000+</p>
            <p className="mt-2 text-2xl text-center">students trained</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-5xl font-bold">40%</p>
            <p className="mt-2 text-2xl text-center">
              increase in employability
            </p>
          </div>
        </div>
      </section>
      <section className="xxl:px-44 px-4 font-Syne py-[80px] lg:py-[160px]">
        <div className="container xl:px-[80px] mx-auto px-5 flex flex-col gap-[80px] lg:gap-[140px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] lg:gap-[60px]">
            <div className="h-full order-[2] lg:order-[1]">
              <img
                src={CourseBanner}
                alt=""
                width="100%"
                className="object-cover h-full rounded-[20px] img-shadow"
              />
            </div>
            <div className="flex flex-col justify-center order-[1] lg:order-[2]">
              <h3 className="text-xl xxl:text-3xl font-bold">Agribusiness</h3>
              <p className="mt-5 max-w-[600px] text-justify">
                At Rareminds, our Agri Business Management course equips Naan
                Mudhalvan students with the strategic skills needed to excel in
                the agricultural industry. The course covers everything from
                market analysis to supply chain management, enabling students to
                navigate the complexities of agribusiness and drive sustainable
                growth in this vital sector.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] lg:gap-[60px]">
            <div className="h-full order-[2]">
              <img
                src={CourseBanner}
                alt=""
                width="100%"
                className="object-cover h-full rounded-[20px] img-shadow"
              />
            </div>
            <div className="flex flex-col justify-center order-[1]">
              <h3 className="text-xl xxl:text-3xl font-bold">Food Analysis</h3>
              <p className="mt-5 max-w-[600px] text-justify">
                Our Organic Food Production course is tailored for students
                passionate about sustainable agriculture. This course teaches
                the principles and practices of organic farming, empowering
                students to grow healthy, pesticide-free crops and contribute to
                the expanding organic food market. Through hands-on training,
                they gain the expertise needed to implement eco-friendly farming
                techniques.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] lg:gap-[60px]">
            <div className="h-full order-[2] lg:order-[1]">
              <img
                src={CourseBanner}
                alt=""
                width="100%"
                className="object-cover h-full rounded-[20px] img-shadow"
              />
            </div>
            <div className="flex flex-col justify-center order-[1] lg:order-[2]">
              <h3 className="text-xl xxl:text-3xl font-bold">
                EV Battery Management
              </h3>
              <p className="mt-5 max-w-[600px] text-justify">
                The Electronic Vehicle Battery Management Systems course offers
                students in-depth knowledge of EV technology, with a focus on
                battery systems. As the world shifts towards sustainable
                transportation, this course prepares students to be at the
                forefront of the electric vehicle revolution, equipping them
                with the skills to manage and optimize battery performance for
                the next generation of vehicles.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] lg:gap-[60px]">
            <div className="h-full order-[2]">
              <img
                src={CourseBanner}
                alt=""
                width="100%"
                className="object-cover h-full rounded-[20px] img-shadow"
              />
            </div>
            <div className="flex flex-col justify-center order-[1]">
              <h3 className="text-xl xxl:text-3xl font-bold">
                Organic Food Production
              </h3>
              <p className="mt-5 max-w-[600px] text-justify">
                In the Food Analysis and Quality Control course, students learn
                to ensure the safety and quality of food products. This course
                provides essential skills in testing, analyzing, and maintaining
                food standards, preparing students to play a crucial role in
                protecting public health and ensuring that food products meet
                stringent regulatory requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="xxl:px-44 px-4 font-Syne pt-[120px]">
        <div className="container xl:px-[80px] mx-auto px-5">
          <h2 className="text-4xl text-[#000] text-center font-bold mb-[70px]">
            Benifits of Our Course
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 pb-[50px] lg:pb-[100px]">
            <div className="flex">
              <div className="w-max mx-auto">
                <svg
                  width="102"
                  height="90"
                  viewBox="0 0 102 90"
                  fill="none"
                  className="mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M102 19.5003C102.008 17.3353 101.278 15.2322 99.9301 13.5379C98.5823 11.8436 96.6972 10.6592 94.5859 10.1801L53.1069 0.608031C51.7046 0.292826 50.2494 0.296093 48.8484 0.617593L7.41412 10.1801C3.04725 11.1873 0 15.0187 0 19.5003C0 23.982 3.05044 27.8133 7.41094 28.8206L15.9375 30.7873V57.7503C15.9375 66.21 25.6211 73.6878 51 73.6878C76.3789 73.6878 86.0625 66.21 86.0625 57.7503V30.7873L94.5859 28.8206C96.6972 28.3415 98.5823 27.1571 99.9301 25.4628C101.278 23.7685 102.008 21.6654 102 19.5003ZM79.6875 57.7503C79.6875 61.2725 70.125 67.3128 51 67.3128C31.875 67.3128 22.3125 61.2725 22.3125 57.7503V32.2599L48.8899 38.3927C50.2923 38.7069 51.7473 38.7036 53.1484 38.3831L79.6875 32.2599V57.7503ZM51.7172 32.1707C51.2444 32.2717 50.7556 32.2717 50.2828 32.1707L8.84531 22.6082C8.14109 22.4477 7.51225 22.0527 7.06182 21.4881C6.6114 20.9235 6.36609 20.2226 6.36609 19.5003C6.36609 18.7781 6.6114 18.0772 7.06182 17.5126C7.51225 16.9479 8.14109 16.553 8.84531 16.3925L50.2828 6.83003C50.7555 6.72767 51.2445 6.72767 51.7172 6.83003L93.1547 16.3925C93.8566 16.5557 94.4826 16.9517 94.9308 17.516C95.3789 18.0803 95.6229 18.7797 95.6229 19.5003C95.6229 20.221 95.3789 20.9204 94.9308 21.4847C94.4826 22.049 93.8566 22.445 93.1547 22.6082L51.7172 32.1707Z"
                    fill="#333333"
                  ></path>
                  <path
                    d="M92.4375 35.4375V64.125C92.4375 64.9704 92.7733 65.7811 93.3711 66.3789C93.9689 66.9767 94.7796 67.3125 95.625 67.3125C96.4704 67.3125 97.2811 66.9767 97.8789 66.3789C98.4767 65.7811 98.8125 64.9704 98.8125 64.125V35.4375C98.8125 34.5921 98.4767 33.7814 97.8789 33.1836C97.2811 32.5858 96.4704 32.25 95.625 32.25C94.7796 32.25 93.9689 32.5858 93.3711 33.1836C92.7733 33.7814 92.4375 34.5921 92.4375 35.4375ZM95.625 70.5C92.1028 70.5 89.25 79.731 89.25 83.25C89.25 84.9408 89.9217 86.5623 91.1172 87.7578C92.3127 88.9534 93.9342 89.625 95.625 89.625C97.3158 89.625 98.9373 88.9534 100.133 87.7578C101.328 86.5623 102 84.9408 102 83.25C102 79.731 99.144 70.5 95.625 70.5Z"
                    fill="#333333"
                  ></path>
                </svg>

                <h3 className="max-w-[300px] text-2xl text-center mt-[36px]">
                  Expert Instructors and Networking Opportunities
                </h3>
              </div>
            </div>

            <div className="flex">
              <div className="w-max mx-auto mt-2">
                <svg
                  width="85"
                  height="85"
                  viewBox="0 0 85 85"
                  fill="none"
                  className="mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M74.2288 64.4414C77.2364 66.0766 79.747 68.493 81.496 71.4358C83.245 74.3786 84.1675 77.7389 84.1663 81.1622C84.1663 81.9589 83.8498 82.7231 83.2864 83.2865C82.723 83.8499 81.9589 84.1664 81.1622 84.1664C80.3654 84.1664 79.6013 83.8499 79.0379 83.2865C78.4745 82.7231 78.158 81.9589 78.158 81.1622C78.158 79.4523 77.8212 77.7591 77.1668 76.1793C76.5125 74.5996 75.5534 73.1642 74.3443 71.9551C73.1352 70.746 71.6998 69.7869 70.12 69.1325C68.5403 68.4781 66.8471 68.1414 65.1372 68.1414C63.4272 68.1414 61.7341 68.4781 60.1543 69.1325C58.5745 69.7869 57.1391 70.746 55.93 71.9551C54.7209 73.1642 53.7618 74.5996 53.1075 76.1793C52.4531 77.7591 52.1163 79.4523 52.1163 81.1622C52.1163 81.9595 51.7996 82.7242 51.2358 83.2879C50.672 83.8517 49.9074 84.1684 49.1101 84.1684C48.3128 84.1684 47.5481 83.8517 46.9843 83.2879C46.4206 82.7242 46.1038 81.9595 46.1038 81.1622C46.1038 73.9455 50.1247 67.6622 56.0413 64.4414C54.1885 62.6333 52.9166 60.314 52.3883 57.7796C51.8599 55.2452 52.0991 52.6109 53.0751 50.2131C54.0512 47.8153 55.7199 45.7629 57.868 44.318C60.0161 42.8731 62.5462 42.1014 65.1351 42.1014C67.7239 42.1014 70.254 42.8731 72.4022 44.318C74.5503 45.7629 76.219 47.8153 77.195 50.2131C78.1711 52.6109 78.4102 55.2452 77.8819 57.7796C77.3535 60.314 76.0817 62.6333 74.2288 64.4414ZM65.1372 62.133C66.997 62.133 68.7807 61.3942 70.0957 60.0791C71.4109 58.764 72.1497 56.9804 72.1497 55.1205C72.1497 53.2607 71.4109 51.477 70.0957 50.1619C68.7807 48.8468 66.997 48.108 65.1372 48.108C63.2773 48.108 61.4937 48.8468 60.1786 50.1619C58.8635 51.477 58.1247 53.2607 58.1247 55.1205C58.1247 56.9804 58.8635 58.764 60.1786 60.0791C61.4937 61.3942 63.2773 62.133 65.1372 62.133ZM55.8122 35.1289H16.2288C14.4372 35.1289 13.333 33.9414 13.333 32.0039C13.333 30.0664 14.4372 28.8789 16.233 28.8789H55.8122C57.6038 28.8789 58.708 30.0664 58.708 32.0039C58.708 33.9414 57.6038 35.1289 55.8122 35.1289ZM38.8497 49.1622H16.233C14.4413 49.1622 13.333 47.9747 13.333 46.0372C13.333 44.0997 14.4372 42.9122 16.233 42.9122H38.8497C40.6413 42.9122 41.7455 44.0997 41.7455 46.0372C41.7455 47.9747 40.6413 49.1622 38.8497 49.1622ZM38.333 77.758C38.7675 77.7359 39.202 77.8023 39.6101 77.9533C40.0181 78.1043 40.3912 78.3368 40.7066 78.6365C41.0219 78.9362 41.2731 79.2969 41.4447 79.6967C41.6163 80.0966 41.7048 80.5271 41.7048 80.9622C41.7048 81.3973 41.6163 81.8278 41.4447 82.2276C41.2731 82.6275 41.0219 82.9882 40.7066 83.2879C40.3912 83.5876 40.0181 83.82 39.6101 83.9711C39.202 84.1221 38.7675 84.1885 38.333 84.1664H12.6205C9.49941 84.1708 6.50432 82.9355 4.29386 80.732C2.08339 78.5286 0.838529 75.5375 0.833008 72.4164V12.583C0.838529 9.46193 2.08339 6.47079 4.29386 4.26736C6.50432 2.06393 9.49941 0.828602 12.6205 0.833026H64.0413C65.5871 0.830288 67.1183 1.13204 68.5474 1.72105C69.9766 2.31006 71.2757 3.1748 72.3707 4.26589C73.4656 5.35698 74.335 6.65305 74.929 8.08011C75.5231 9.50716 75.8303 11.0373 75.833 12.583V33.9539C75.833 34.8064 75.4943 35.6241 74.8915 36.2269C74.2886 36.8298 73.471 37.1684 72.6184 37.1684C71.7659 37.1684 70.9482 36.8298 70.3454 36.2269C69.7425 35.6241 69.4038 34.8064 69.4038 33.9539V12.583C69.4038 9.62886 67.008 7.23719 64.0455 7.23719H12.6247C9.66634 7.23719 7.26634 9.62886 7.26634 12.583V72.408C7.26634 75.3622 9.66217 77.7539 12.6247 77.7539H38.333V77.758Z"
                    fill="#333333"
                  ></path>
                </svg>
                <h3 className="max-w-[300px] text-2xl text-center mt-[36px]">
                  Industry-Relevant Skills
                </h3>
              </div>
            </div>

            <div className="flex mt-2">
              <div className="w-max mx-auto">
                <svg
                  width="77"
                  height="77"
                  viewBox="0 0 77 77"
                  fill="none"
                  className="mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.7718 1.42869C8.77778 2.72888 2.72861 8.77805 1.42842 14.7721C-1.06176 26.2975 7.64287 36.4786 18.7385 36.4786H36.4783V35.7293V32.0712V17.9785H36.4563C36.0156 7.25749 26.0438 -1.0064 14.7718 1.42869ZM32.0709 32.0712H18.7385C11.312 32.0712 5.30694 26 5.40611 18.5515C5.50528 11.3674 11.3671 5.50555 18.5512 5.40638C25.9997 5.30721 32.0709 11.3123 32.0709 18.7388V32.0712Z"
                    fill="#333333"
                  ></path>
                  <path
                    d="M75.7647 14.6012C74.4646 8.60713 68.4154 2.55796 62.4213 1.25778C51.1604 -1.17732 41.1776 7.08657 40.7369 17.8186H40.7148V31.9003V35.5584V36.3077H58.4547C69.5393 36.3077 78.2549 26.1266 75.7647 14.6012ZM45.1222 18.5679C45.1222 11.1414 51.1935 5.1363 58.642 5.23546C65.826 5.33463 71.6879 11.1965 71.7871 18.3806C71.8862 25.8291 65.8811 31.9003 58.4547 31.9003H45.1222V18.5679Z"
                    fill="#333333"
                  ></path>
                  <path
                    d="M1.31221 62.4213C2.6124 68.4154 8.66156 74.4646 14.6556 75.7647C25.9166 78.1998 35.8993 69.936 36.3401 59.2039H36.3621V45.1222V41.4641V40.7148H18.6223C7.52666 40.7148 -1.17797 50.896 1.31221 62.4213ZM31.9547 58.4547C31.9547 65.8811 25.8835 71.8862 18.435 71.7871C11.2509 71.6879 5.38906 65.826 5.2899 58.642C5.19073 51.1935 11.1958 45.1222 18.6223 45.1222H31.9547V58.4547Z"
                    fill="#333333"
                  ></path>
                  <path
                    d="M58.4547 40.7148H40.7148V41.4641V45.1222V59.2039H40.7369C41.1886 69.936 51.1604 78.1998 62.4213 75.7647C68.4154 74.4646 74.4646 68.4154 75.7647 62.4213C78.2549 50.896 69.5393 40.7148 58.4547 40.7148ZM71.7871 58.642C71.6879 65.826 65.826 71.6879 58.642 71.7871C51.1935 71.8862 45.1222 65.8811 45.1222 58.4547V45.1222H58.4547C65.8811 45.1222 71.8862 51.1935 71.7871 58.642Z"
                    fill="#333333"
                  ></path>
                </svg>
                <h3 className="max-w-[300px] text-2xl text-center mt-[36px]">
                  Focus on Sustainability and Emerging Sectors
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[50px] lg:h-[100px] bg-gradient-to-t from-[#F5F7FA] to-[#F5F7FA00]"></div>
      </section>
      <section className="xxl:px-44 px-4 font-Syne py-[100px]">
        <div className="container xl:px-[80px] mx-auto px-5">
          <h2 className="text-4xl font-bold mx-auto text-center mb-[60px] lg:mb-[100px]">
            Join Leading Universities in Transforming Education
          </h2>

          <div className="infinity-scroll-container w-full overflow-hidden">
            <div className="infinity-scroll-inner w-max flex flex-nowrap gap-[60px]">
              <div className="flex min-w-max">
                <div className="min-w-[100px]">
                  <img
                    src="https://rareminds.in/courses/TNSDC/images/universities/Annamalai.png"
                    alt="Annamalai University"
                    className="h-[100px] object-cover"
                  />
                </div>
                <div className="flex items-center ml-5">
                  <h4 className="text-2xl">Annamalai University</h4>
                </div>
              </div>

              <div className="flex min-w-max">
                <div className="min-w-[100px]">
                  <img
                    src="https://rareminds.in/courses/TNSDC/images/universities/bharathiar.png"
                    alt="Bharathiar University"
                    className="h-[100px] object-cover"
                  />
                </div>
                <div className="flex items-center ml-5">
                  <h4 className="text-2xl">Bharathiar University</h4>
                </div>
              </div>

              <div className="flex min-w-max">
                <div className="min-w-[100px]">
                  <img
                    src="https://rareminds.in/courses/TNSDC/images/universities/alagappa.png"
                    alt="Alagappa University"
                    className="h-[100px] object-cover"
                  />
                </div>
                <div className="flex items-center ml-5">
                  <h4 className="text-2xl">Alagappa University</h4>
                </div>
              </div>

              <div className="flex min-w-max">
                <div className="min-w-[100px]">
                  <img
                    src="https://rareminds.in/courses/TNSDC/images/universities/Bharathidasan.png"
                    alt="Bharathidasan University"
                    className="h-[100px] object-cover"
                  />
                </div>
                <div className="flex items-center ml-5">
                  <h4 className="text-2xl">Bharathidasan University</h4>
                </div>
              </div>

              <div className="flex min-w-max">
                <div className="min-w-[100px]">
                  <img
                    src="https://rareminds.in/courses/TNSDC/images/universities/MANONMANIAM-SUNDARANAR.png"
                    alt="MANONMANIAM SUNDARANAR University"
                    className="h-[100px] object-cover"
                  />
                </div>
                <div className="flex items-center ml-5">
                  <h4 className="text-2xl">
                    Manonmaniam Sundaranar University
                  </h4>
                </div>
              </div>

              <div className="flex min-w-max">
                <div className="min-w-[100px]">
                  <img
                    src="https://rareminds.in/courses/TNSDC/images/universities/mother-teresa.png"
                    alt="Mother Teresa Women's University"
                    className="h-[100px] object-cover"
                  />
                </div>
                <div className="flex items-center ml-5">
                  <h4 className="text-2xl">Mother Teresa Women's University</h4>
                </div>
              </div>

              <div className="flex min-w-max">
                <div className="min-w-[100px]">
                  <img
                    src="https://rareminds.in/courses/TNSDC/images/universities/periyar.png"
                    alt="Periyar University"
                    className="h-[100px] object-cover"
                  />
                </div>
                <div className="flex items-center ml-5">
                  <h4 className="text-2xl">Periyar University</h4>
                </div>
              </div>

              <div className="flex min-w-max">
                <div className="min-w-[100px]">
                  <img
                    src="https://rareminds.in/courses/TNSDC/images/universities/madurai-kamaraj-university.png"
                    alt="Annamalai University"
                    className="h-[100px] object-cover"
                  />
                </div>
                <div className="flex items-center ml-5">
                  <h4 className="text-2xl">Madurai Kamaraj University</h4>
                </div>
              </div>

              <div className="flex min-w-max">
                <div className="min-w-[100px]">
                  <img
                    src="https://rareminds.in/courses/TNSDC/images/universities/Thiruvalluvar.png"
                    alt="Thiruvalluvar University"
                    className="h-[100px] object-cover"
                  />
                </div>
                <div className="flex items-center ml-5">
                  <h4 className="text-2xl">Thiruvalluvar University</h4>
                </div>
              </div>

              <div className="flex min-w-max">
                <div className="min-w-[100px]">
                  <img
                    src="https://rareminds.in/courses/TNSDC/images/universities/Annamalai.png"
                    alt="Annamalai University"
                    className="h-[100px] object-cover"
                  />
                </div>
                <div className="flex items-center ml-5">
                  <h4 className="text-2xl">Annamalai University</h4>
                </div>
              </div>

              <div className="flex min-w-max">
                <div className="min-w-[100px]">
                  <img
                    src="https://rareminds.in/courses/TNSDC/images/universities/bharathiar.png"
                    alt="Bharathiar University"
                    className="h-[100px] object-cover"
                  />
                </div>
                <div className="flex items-center ml-5">
                  <h4 className="text-2xl">Bharathiar University</h4>
                </div>
              </div>

              <div className="flex min-w-max">
                <div className="min-w-[100px]">
                  <img
                    src="https://rareminds.in/courses/TNSDC/images/universities/alagappa.png"
                    alt="Alagappa University"
                    className="h-[100px] object-cover"
                  />
                </div>
                <div className="flex items-center ml-5">
                  <h4 className="text-2xl">Alagappa University</h4>
                </div>
              </div>

              <div className="flex min-w-max">
                <div className="min-w-[100px]">
                  <img
                    src="https://rareminds.in/courses/TNSDC/images/universities/Bharathidasan.png"
                    alt="Bharathidasan University"
                    className="h-[100px] object-cover"
                  />
                </div>
                <div className="flex items-center ml-5">
                  <h4 className="text-2xl">Bharathidasan University</h4>
                </div>
              </div>

              <div className="flex min-w-max">
                <div className="min-w-[100px]">
                  <img
                    src="https://rareminds.in/courses/TNSDC/images/universities/MANONMANIAM-SUNDARANAR.png"
                    alt="MANONMANIAM SUNDARANAR University"
                    className="h-[100px] object-cover"
                  />
                </div>
                <div className="flex items-center ml-5">
                  <h4 className="text-2xl">
                    Manonmaniam Sundaranar University
                  </h4>
                </div>
              </div>

              <div className="flex min-w-max">
                <div className="min-w-[100px]">
                  <img
                    src="https://rareminds.in/courses/TNSDC/images/universities/mother-teresa.png"
                    alt="Mother Teresa Women's University"
                    className="h-[100px] object-cover"
                  />
                </div>
                <div className="flex items-center ml-5">
                  <h4 className="text-2xl">Mother Teresa Women's University</h4>
                </div>
              </div>

              <div className="flex min-w-max">
                <div className="min-w-[100px]">
                  <img
                    src="https://rareminds.in/courses/TNSDC/images/universities/periyar.png"
                    alt="Periyar University"
                    className="h-[100px] object-cover"
                  />
                </div>
                <div className="flex items-center ml-5">
                  <h4 className="text-2xl">Periyar University</h4>
                </div>
              </div>

              <div className="flex min-w-max">
                <div className="min-w-[100px]">
                  <img
                    src="https://rareminds.in/courses/TNSDC/images/universities/madurai-kamaraj-university.png"
                    alt="Annamalai University"
                    className="h-[100px] object-cover"
                  />
                </div>
                <div className="flex items-center ml-5">
                  <h4 className="text-2xl">Madurai Kamaraj University</h4>
                </div>
              </div>

              <div className="flex min-w-max">
                <div className="min-w-[100px]">
                  <img
                    src="https://rareminds.in/courses/TNSDC/images/universities/Thiruvalluvar.png"
                    alt="Thiruvalluvar University"
                    className="h-[100px] object-cover"
                  />
                </div>
                <div className="flex items-center ml-5">
                  <h4 className="text-2xl">Thiruvalluvar University</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="xxl:px-44 px-4 font-Syne bg-[#F5F7FA] py-[100px]">
        <h3 className="text-[#000] text-center font-bold xxl:text-5xl text-2xl py-10 mx-auto justify-center">
          Testimonials
        </h3>
        <TestimonialCarousel testimonials={testimonials?.testimonialData} />
      </section>
    </>
  );
};

export default CourseDetail;
