import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import axios from "axios";
import { Helmet } from "react-helmet";

const GeneralEventDetail = () => {
  const { slug } = useParams();
  const [eventData, setEventData] = useState(null);

  // Use useMediaQuery hook unconditionally
  const isMobile = useMediaQuery({ query: `(max-width: 1200px)` });

  useEffect(() => {
    async function fetchEvent() {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}generalEvents/${slug}`,
        );
        setEventData(response.data);
      } catch (error) {
        console.error("Error fetching general event details:", error);
      }
    }

    fetchEvent();
  }, [slug]);

  if (!eventData) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Helmet>
        <title>{eventData?.generalEventData?.MetaTitle}</title>
        <meta
          name="description"
          content={eventData?.generalEventData?.MetaDescription}
        />
        <meta
          name="keywords"
          content={eventData?.generalEventData?.MetaKeywords}
        />
        <meta
          property="og:title"
          content={eventData?.generalEventData?.OGTitle}
        />
        <meta
          property="og:description"
          content={eventData?.generalEventData?.OGDescription}
        />
      </Helmet>
      <div className="grid w-full min-h-screen xl:px-28 lg:px-20 md:px-16 px-8 xl:pb-16 lg:pb-16 md:pb-8 pb-4 xl:py-16 lg:py-20 md:py-16 py-8">
        <section className="font-Syne">
          <h1 className="lg:text-[48px] text-[24px] lg:leading-[62px] text-4xl row-span-1 place-items-start font-bold capitalize">
            {eventData?.generalEventData?.Heading1}
          </h1>

          <div className="rounded-2xl mt-16">
            <img
              src={`${import.meta.env.VITE_API_URL}uploads/${eventData?.generalEventData?.Image1}`}
              className="rounded-lg text-center align-middle justify-center max-h-[430px] w-full object-cover"
              alt={eventData?.generalEventData?.Heading1 || "Event Image"}
            />
          </div>

          <div className="grid grid-cols-1 grid-flow-row gap-4">
            {eventData?.generalEventDetails?.map((ele) => (
              <div className="row-span-1 mt-16" key={ele.ContentDetailId}>
                <p
                  className="mt-4 md:mr-20 mr-4 text-[16px] leading-[21.76px] font-[Syne] font-light BlogDetail"
                  dangerouslySetInnerHTML={{
                    __html: ele.ContentDescription,
                  }}
                ></p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* <CTA content={""} /> */}
    </>
  );
};

export default GeneralEventDetail;
