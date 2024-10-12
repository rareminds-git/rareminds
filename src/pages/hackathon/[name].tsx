import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import axios from "axios";
import moment from "moment";

const EventDetail = () => {
  const { eventCategory, slug } = useParams();
  const [eventData, setEventData] = useState<any>({});
  const [duration, setDuration] = useState();

  useEffect(() => {
    async function getData() {
      await axios
        .get(
          `${import.meta.env.VITE_API_URL}events/${"hackathon/" + eventCategory + "/" + slug}`
        )
        .then((res) => {
          setEventData(res.data);
        });
    }

    getData();
  }, []);

  useEffect(() => {
    setInterval(() => {
      if (eventData?.eventData) {
        const now = moment();
        const end = moment(eventData?.eventData[0].EventDate);
        console.log("date", now, end, eventData?.eventData[0].EventDate);
        return setDuration(moment.duration(end.diff(now)));
      }
    }, 1000);
  }, [eventData]);

  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  return (
    <>
      <div className="w-full font-Syne min-h-screen lg:py-12 sm:py-24 md:py-32">
        <section>
          <div
            style={{
              backgroundImage: `url(${import.meta.env.VITE_PUBLIC_URL}uploads/${eventData && eventData.eventData ? eventData.eventData[0].Image1 : ""})`,
            }}
            className={`header bg-cover bg-center`}
          >
            <div className="h-[100vh] w-full header flex flex-col items-center justify-center text-[#ffffff] bg-[#00000066]">
              <h1 className="mt-2 text-5xl lg:text-6xl font-bold">
                {" "}
                {eventData && eventData.eventData
                  ? eventData.eventData[0].Heading1
                  : ""}
              </h1>
              <p className="mt-2 text-xl">
                {eventData && eventData.eventData
                  ? eventData.eventData[0].Heading2
                  : ""}
              </p>
            </div>
          </div>
        </section>

        <section className="py-[30px] lg:py-[30px] lg:px-64 px-5">
          <div className="w-full mb-10 border border-[#4C176B] rounded-[12px]">
            <div className="px-10 py-5 bg-gradient-to-r from-[#4C176B] to-[#134BBB] flex justify-center rounded-[10px]">
              <h3 className="text-2xl font-bold text-[#fff] text-center">
                {eventData && eventData.eventData
                  ? eventData.eventData[0].SubHeading1
                  : ""}
              </h3>
            </div>
            <div className="px-10 py-5 flex justify-center rounded-[10px]">
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4C176B] to-[#134BBB] text-center">
                {eventData && eventData.eventData
                  ? eventData.eventData[0].SubHeading2
                  : ""}
              </h3>
            </div>
          </div>

          <div className="text-center my-10">
            <p>Online event starts in</p>
            <br />
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-[600px] mx-auto">
              <div className="border w-max py-5 px-8 rounded-[20px] border-[#3381d0] mx-auto flex flex-col items-center justify-center min-w-[120px]">
                <p className="text-5xl text-[#014195]" id="timer-day">
                  {Math.floor(duration?.asDays()) > 0
                    ? Math.floor(duration?.asDays())
                    : "00"}
                </p>
                <p>Days</p>
              </div>
              <div className="border w-max py-5 px-8 rounded-[20px] border-[#3381d0] mx-auto flex flex-col items-center justify-center min-w-[120px]">
                <p className="text-5xl" id="timer-hour">
                  {Math.floor(duration?.hours()) > 0
                    ? Math.floor(duration?.hours())
                    : "00"}
                </p>
                <p>Hours</p>
              </div>
              <div className="border w-max py-5 px-8 rounded-[20px] border-[#3381d0] mx-auto flex flex-col items-center justify-center min-w-[120px]">
                <p className="text-5xl" id="timer-min">
                  {Math.floor(duration?.minutes()) > 0
                    ? Math.floor(duration?.minutes())
                    : "00"}
                </p>
                <p>Minutes</p>
              </div>
              <div className="border w-max py-5 px-8 rounded-[20px] border-[#3381d0] mx-auto flex flex-col items-center justify-center min-w-[120px]">
                <p className="text-5xl" id="timer-sec">
                  {Math.floor(duration?.seconds()) > 0
                    ? Math.floor(duration?.seconds())
                    : "00"}
                </p>
                <p>Seconds</p>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 mt-10 gap-5 lg:mx-48">
            <div className="p-5 min-w-[300px] rounded-xl lg:rounded-l-[30px] text-[#fff] flex flex-col items-center md:items-end bg-gradient-to-b md:bg-gradient-to-r from-[#4C176B] to-[#134BBB] shadow-[0_0px_15px_0px_rgba(0,0,0,0.1)]">
              <p className="font-semibold text-2xl">When</p>
              <p className="text-center md:text-right">
                {eventData &&
                  eventData.eventData &&
                  moment(eventData.eventData[0].EventDate).format(
                    "DD MMMM"
                  )}{" "}
                <br />
                {eventData &&
                  eventData.eventData &&
                  moment(eventData.eventData[0].EventDate).format("dddd YYYY")}
              </p>
            </div>
            <div className="p-5 min-w-[300px] rounded-xl lg:rounded-r-[30px] text-[#fff] flex flex-col items-center md:items-start bg-gradient-to-b md:bg-gradient-to-r to-[#4C176B] from-[#134BBB] shadow-[0_0px_15px_0px_rgba(0,0,0,0.1)]">
              <p className="font-semibold text-2xl">Where</p>
              <p className="text-center md:text-left">
                {eventData &&
                  eventData.eventData &&
                  eventData.eventData[0].Address1}
              </p>
              <br />
              <p className="text-xl opacity-0">
                {eventData &&
                  eventData.eventData &&
                  eventData.eventData[0].Address1}
              </p>
            </div>
          </div>

          <div className="text-center py-30 my-10 pb-[20px] lg:pb-[10px]">
            <p className="lg:text-5xl text-2xl font-bold">
              Join as at the{" "}
              {eventData && eventData.eventData
                ? eventData.eventData[0].Heading1
                : ""}{" "}
              {eventData && eventData.eventData
                ? eventData.eventData[0].Heading2
                : ""}
            </p>
            <p className="text-xl font-light mt-5">
              {eventData && eventData.eventData
                ? eventData.eventData[0].Description
                : ""}
            </p>
          </div>
        </section>
        <section className="pb-[30px] lg:pb-[30px] px-40">
          <div className="container lg:px-5 xl:px-[80px] pb-[60px] lg:pb-[100px] flex flex-col items-center lg:mx-12">
            <div className="p-[3px] bg-gradient-to-r from-[#4C176B] to-[#134BBB] rounded-[24px]">
              <div className="py-10 flex flex-col items-center px-[30px] lg:px-[60px] bg-white rounded-[20px]">
                <h2
                  className="text-3xl font-semibold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#4C176B] to-[#134BBB]"
                  id="reg-heading"
                >
                  Registrations{" "}
                  {eventData &&
                  eventData.eventData &&
                  eventData.eventData.Status
                    ? "Open"
                    : "Closed"}
                  !
                </h2>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-[60px] lg:mb-[100px]">
          <div className="container px-5 xl:px-[80px] mx-auto flex flex-col items-center">
            <h2 className="text-4xl font-semibold">Event Schedule</h2>
            <p>A Representstion of Event Planning</p>
            <div className="w-full flex flex-col mt-10 gap-5">
              {eventData?.eventSchedule?.map((row) => {
                return (
                  <>
                    <div className="w-full flex flex-col lg:flex-row gap-2 sm:gap-5 lg:my-2">
                      <div className="schedule-date p-5 bg-gradient-to-r from-[#4C176B] to-[#134BBB] relative text-[#fff] rounded-xl after:hidden sm:after:flex after:absolute after:top-[50%] after:translate-y-[-50%] after:right-[-15px] after:content-[' '] after:bg-[#134BBB] after:w-[15px] after:h-[30px] min-w-[159.5px]">
                        <p className="text-center">
                          <span className="text-2xl font-semibold">
                            {moment(row.Date).format("Do")}
                          </span>
                          <br />
                          {moment(row.Date).format("MMMM YYYY")}
                        </p>
                      </div>
                      <div className="flex-1 rounded-[13px] bg-gradient-to-r from-[#4C176B] to-[#134BBB] p-[1px]">
                        <div className="flex items-center rounded-xl p-5 h-full w-full bg-[#ffffff]">
                          <p className="text-xl">{row.Title}</p>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </section>
        <section className="bg-gradient-to-r from-[#4C176B] to-[#134BBB] py-[100px]">
          <div className="px-5 container xl:px-[80px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="order-[2] lg:order-[1]">
                <h2 className="text-5xl font-semibold text-white text-center">
                  Prize Pool
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-5 mt-10">
                  <div className="lg:col-span-2">
                    <div className="w-max mx-auto text-white">
                      <img
                        src="/src/assets/images/trophy.svg"
                        className="mx-auto drop-shadow-[0px_0px_5px_#ecc440]"
                        width="70"
                        alt="trophy"
                      />
                      <div className="p-3 border-2 rounded-t-lg w-[200px]">
                        <p className="text-center text-2xl">1st Price</p>
                        <p className="text-center">Cash Prize</p>
                        <p className="text-center">Internship Opportunity</p>
                        <p className="text-center">Certificate</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-max mx-auto">
                    <div className="w-max mx-auto text-white">
                      <img
                        src="/src/assets/images/trophy2.svg"
                        className="mx-auto drop-shadow-[0px_0px_5px_#d8d8d8]"
                        width="70"
                        alt="trophy"
                      />
                      <div className="p-3 border-2 rounded-t-lg w-[200px]">
                        <p className="text-center text-2xl">2nd Price</p>
                        <p className="text-center">Internship Opportunity</p>
                        <p className="text-center">Certificate</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-max mx-auto">
                    <div className="w-max mx-auto text-white">
                      <img
                        src="/src/assets/images/trophy-3.svg"
                        className="mx-auto drop-shadow-[0px_0px_5px_#cd7f32]"
                        width="70"
                        alt="trophy"
                      />
                      <div className="p-3 border-2 rounded-t-lg w-[200px]">
                        <p className="text-center text-2xl">3rd Price</p>
                        <p className="text-center">Certificate</p>
                        <p className="text-center">Gift Hamper</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-center mx-auto mt-10 text-xl text-white">
                  Special Mention Awards: For Participation
                </p>
              </div>
              <div className="order-[1] lg:order-[2] relative hidden lg:flex justify-center items-center">
                <img
                  src="/src/assets/images/8741013.png"
                  className="mt-[50px] absolute"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
        <section className="my-[60px] lg:my-[100px]">
          <div className="container mx-auto xl:px-[80px] px-5">
            <h2 className="text-4xl font-semibold text-center mb-10">
              Hackathon Agenda
            </h2>
            {eventData?.eventAgenda?.map((row) => {
              return (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                  <div>
                    <h3 className="text-3xl">{row.Title}</h3>
                  </div>
                  {row.Title.includes("Lunch") ? (
                    <div className="lg:col-span-2 pb-5 mt-0 lg:mt-5 mb-5">
                      <div className="rounded-[10px] bg-gradient-to-r from-[#4C176B] to-[#134BBB] text-white p-5">
                        <p className="text-center text-xl">
                          12:00 PM - 12:45 PM
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="lg:col-span-2 pb-5">
                      <p className="text-xl">{row.Time}</p>
                      <div className="h-[2px] bg-[#D9D9D9] mt-2 mb-5"></div>
                      {row.Description !== "undefined" ? row.Description : ""}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
        <section className="pb-[60px] lg:pb-[100px]">
          <div className="container mx-auto xl:px-[80px] px-5 flex flex-col">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10">
              <div>
                <img
                  src="/src/assets/images/5786206.png"
                  className="mx-auto"
                  alt=""
                />
              </div>
              <div>
                <h4 className="text-4xl font-semibold min-w-max text-center lg:text-left">
                  Judging Criteria
                </h4>
                <div className="mt-8 flex flex-col gap-y-2">
                  <div>
                    <p className="font-semibold text-xl w-max after:content-[' '] after:flex after:h-[3px] after:w-2/4 after:bg-gradient-to-r after:from-[#4C176B] after:to-[#134BBB] after:rounded-xl after:mt-1">
                      Innovation
                    </p>
                    <p className="mt-2">
                      How creative and unique is the solution?
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-xl w-max after:content-[' '] after:flex after:h-[3px] after:w-2/4 after:bg-gradient-to-r after:from-[#4C176B] after:to-[#134BBB] after:rounded-xl after:mt-1">
                      Impact
                    </p>
                    <p className="mt-2">
                      What is the potential social, economic, or environmental
                      impact?
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-xl w-max after:content-[' '] after:flex after:h-[3px] after:w-2/4 after:bg-gradient-to-r after:from-[#4C176B] after:to-[#134BBB] after:rounded-xl after:mt-1">
                      Feasibility
                    </p>
                    <p className="mt-2">
                      How realistic and practical is the solution for
                      implementation?
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-xl w-max after:content-[' '] after:flex after:h-[3px] after:w-2/4 after:bg-gradient-to-r after:from-[#4C176B] after:to-[#134BBB] after:rounded-xl after:mt-1">
                      Technical Execution
                    </p>
                    <p className="mt-2">
                      How well was/can the solution executed, and does it work
                      as intended?
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-xl w-max after:content-[' '] after:flex after:h-[3px] after:w-2/4 after:bg-gradient-to-r after:from-[#4C176B] after:to-[#134BBB] after:rounded-xl after:mt-1">
                      Presentation &amp; Demo
                    </p>
                    <p className="mt-2">
                      How clearly did the team communicate their ideas and
                      demonstrate their prototype?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </section>
      </div>
    </>
  );
};

export default EventDetail;
