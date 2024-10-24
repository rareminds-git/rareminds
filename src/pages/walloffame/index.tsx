import Banner from "../../assets/images/walloffame-banner.jpeg";
import Papa from "papaparse";

const WallofFame = () => {
  const [messages, setMessages] = useState();

  useEffect(() => {
    const load = function () {
      Papa.parse("./teacherfeedback.csv", {
        download: true,
        header: true,
        complete: (result) => {
          console.log(result);
          setMessages(result.data);
        },
      });
    };
    load();
  }, []);

  console.log("messages", messages);

  return (
    <>
      <header
        className={`hero-section bg-[length:100%_100%] mx-8 my-8 mb-4 xxl:mx-28 xl:mx-20 lg:mx-24 md:mx-16 rounded-xl shadow-[0_0px_15px_0px_rgba(0,0,0,0.1)] bg-no-repeat bg-center h-[400px] lg:h-[500px] mt-32`}
        style={{ backgroundImage: `url(${Banner})` }}
      >
        <div className=""></div>
      </header>
      <section className="intro-section font-Syne">
        <div className="container mx-auto xl:px-28 lg:px-24 md:px-16 px-8 xl:py-16 lg:py-12 md:py-16 py-4 pb-8">
          <p className="text-black max-w-[960px] mx-auto">
            At Rareminds, we believe that every great achievement begins with a
            great teacher. Our Wall of Fame honors the educators who have gone
            above and beyond to inspire, educate, and lead the next generation
            of learners.
          </p>
        </div>
      </section>
      <section className="featured-teachers xl:px-28 lg:px-24 md:px-20 px-8 xl:pb-16 lg:pb-12 md:pb-8 pb-4 xl:py-16 lg:py-12 md:py-8 py-8 font-Syne">
        <h2 className="text-3xl mb-10 font-semibold">What Our Students Says</h2>

        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-6 mb-2 font-semibold"></div>
        <div className="message-scroller rounded-[20px]">
          <ul id="messages-list" className="!max-w-[100%]">
            {messages?.map((item) => {
              return (
                <li className="grid px-5 grid-cols-1 lg:grid-cols-6 gap-x-2">
                  <div className="flex-1 flex items-center justify-center py-2 font-semibold">
                    {item.Student}
                  </div>
                  <div className="flex-1 flex items-center justify-center py-2">
                    <div className="min-w-max lg:hidden mr-2">Trainer - </div>
                    <span>{item.Trainer}</span>
                  </div>
                  <div className="flex-1 flex items-center justify-center py-2">
                    {item.Course}
                  </div>
                  <div className="flex-[3] flex items-center justify-center py-2 lg:col-span-3">
                    "{item.Message}"
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <section className="success-stories container mx-auto px-10 lg:px-60 rounded-[20px] mb-10  font-Syne">
        <h2 className="text-2xl mb-5">Inspiring Stories from Our Teachers</h2>
        <div className="story">
          <blockquote>
            "Teaching is about empowering students to believe in themselves.
            Once they do, the sky’s the limit." - Ms. Priya S.
          </blockquote>
        </div>
        <div className="story">
          <blockquote>
            "The greatest satisfaction as a teacher comes when a student tells
            you they’ve achieved something they never thought possible." - Mr.
            Shankar P.
          </blockquote>
        </div>
      </section>
      <section className="testimonials container mx-auto px-10 lg:px-60 rounded-[20px] mb-10 font-Syne">
        <h2 className="text-2xl mb-5">What Students &amp; Colleagues Say</h2>
        <div className="testimonial">
          <p>
            "Mrs. Kavitha’s lessons were not just classes; they were life
            lessons that changed the way I approach challenges."
          </p>
          <p>- Naan Mudhalvan Student</p>
        </div>
        <div className="testimonial">
          <p>
            "Mr. Shankar's mentorship helped me find direction in my career. His
            guidance was invaluable."
          </p>
          <p>- Naan Mudhalvan Graduate</p>
        </div>
      </section>
      <section
        id="nominate"
        className="nominate-section bg-[#000000] font-Syne"
      >
        <div className="container mx-auto xxl:px-10 px-5">
          <h2 className="text-white text-2xl font-semibold mb-2">
            Nominate an Outstanding Teacher!
          </h2>
          <p className="text-white/70">
            Do you know a teacher who deserves to be recognized? Nominate them
            to be featured on our Wall of Fame!
          </p>
          <br />
          <a
            href="#"
            className="btn font-Syne bg-[#CAF0F8] text-black p-2 mt-5 rounded font-bold mr-0"
          >
            Nominate Now
          </a>
        </div>
      </section>
    </>
  );
};

export default WallofFame;
