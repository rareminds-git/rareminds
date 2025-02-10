import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Pagination from "@/common/Pagination";
import moment from "moment";
import axios from "axios";
import { useState, useEffect } from "react";


const Events = () => {
  const [eventsData, setEventsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Fetch both events and general events
  useEffect(() => {
    async function getData() {
      try {
        // Fetch events data
        const eventsResponse = await axios.get(`${import.meta.env.VITE_API_URL}events`);
        const regularEvents = eventsResponse.data.eventsData.map((event) => ({
          ...event,
          navigateTo: `${event.ContentSlug}`,
        }));

        // Fetch general events data
        const generalEventsResponse = await axios.get(`${import.meta.env.VITE_API_URL}generalEvents`);
        const { generalEventData, generalEventDetails } = generalEventsResponse.data;

        const generalEvents = generalEventData.map((event, index) => ({
          ...event,
          ...generalEventDetails[index],
          navigateTo: `/general-event/${event.ContentSlug}`,
        }));

        // Combine and sort events by date in descending order
        const combinedEvents = [...regularEvents, ...generalEvents].sort((a, b) => {
          const dateA = new Date(a.CreatedOn || a.EventDate);
          const dateB = new Date(b.CreatedOn || b.EventDate);
          return dateB - dateA; // Descending order
        });

        setEventsData(combinedEvents);
      } catch (error) {
        console.error("Error fetching events data:", error);
      }
    }

    getData();
  }, []);

  // Pagination calculations
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = eventsData.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <section className="xl:px-28 lg:px-24 md:px-20 px-8 xl:pb-16 lg:pb-12 md:pb-8 pb-4 xl:py-16 lg:py-12 md:py-8 py-8 relative font-playfair">
      <div className="flex">
        <div className="grid space-y-10">
          <h1 className="mb-20 text-3xl text-left font-bold md:text-5xl">Events</h1>
        </div>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-4 gap-4">
        {/* Displaying Events */}
        {currentPosts.map((event, index) => (
          <div
            key={event.ContentId || index}
            className="cursor-pointer col-span-2"
            onClick={() => (window.location.href = event.navigateTo)}
          >
            <img
              src={`${import.meta.env.VITE_API_URL}uploads/${event.Image1}`}
              width="100%"
              className="rounded-xl object-cover xl:min-h-[300px] xl:max-h-[300px]"
              alt={event.Heading1}
            />
            <h4
              className="font-playfair md:text-[26px] leading-[31.2px] mt-5 my-3 text-sm text-black font-bold"
              dangerouslySetInnerHTML={{ __html: event.Heading1 }}
            />
            <p
              className="text-[16px] leading-[24px] font-playfair my-3 line-clamp-2 font-normal"
              dangerouslySetInnerHTML={{
                __html: event.ContentDescription || "No description available",
              }}
            />
            <p className="text-[16px] leading-[21.76px] my-3 font-playfair">
              {moment(event.CreatedOn || event.EventDate).format("DD MMM YYYY")}
            </p>
          </div>
        ))}
      </div>

      <div className="absolute sm:bottom-0 md:bottom-8 right-10">
        <Pagination
          length={eventsData.length}
          postsPerPage={postsPerPage}
          currentPage={currentPage}
          handlePagination={handlePagination}
        />
      </div>
    </section>
  );
};

export default Events;