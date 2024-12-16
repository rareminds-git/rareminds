import Banner from "../../assets/images/banner.webp";
import Papa from "papaparse";


const CareerWebDev = () => {
  return (
    <>
      <header
        className={`hero-section bg-[length:100%_100%] mx-8 my-8 mb-4 xxl:mx-28 xl:mx-20 lg:mx-24 md:mx-16 rounded-xl shadow-[0_0px_15px_0px_rgba(0,0,0,0.1)] bg-no-repeat bg-center h-[200px] md:h-[400px] lg:h-[500px] mt-12 object-cover`}
        style={{ backgroundImage: `url(${Banner})` }}
      >
        <div className=""></div>
      </header>
      <section className="intro-section font-Syne">
        <div className="container mx-auto xl:px-28 lg:px-24 md:px-16 px-8 xl:py-16 lg:py-12 md:py-16 py-4 pb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Your First Step to a Web Development Career Starts Here!
          </h2>
          <p className="text-xl mb-6">
            We're hiring passionate, driven students for our web development
            internship program. Gain hands-on experience, mentorship, and skills
            that set you apart.
          </p>
          <a href="https://forms.gle/268zSv6PtMkwx5Lp7">
            <button className="btn font-Syne bg-[#CAF0F8] text-black p-2 mt-3 rounded font-bold">
              Apply Now
            </button>
          </a>
        </div>
      </section>

      <section className="xl:px-28 lg:px-24 md:px-16 px-8 xl:py-16 lg:py-12 md:py-16 py-4 pb-8 bg-black font-Syne">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-white font-bold mb-8 text-center">
            Why Join Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <svg
                className="w-12 h-12 mx-auto mb-4 text-primary"
                fill="none"
                stroke="#ff2c2c"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                ></path>
              </svg>
              <h3 className="text-xl font-semibold mb-2">
                Real-world Projects
              </h3>
              <p>Work on actual client projects and build your portfolio.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <svg
                className="w-12 h-12 mx-auto mb-4 text-primary"
                fill="none"
                stroke="#ff2c2c"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>
              <h3 className="text-xl font-semibold mb-2">Mentor Support</h3>
              <p>
                Get guidance from experienced developers throughout your
                internship.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <svg
                className="w-12 h-12 mx-auto mb-4 text-primary"
                fill="none"
                stroke="#ff2c2c"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                ></path>
              </svg>
              <h3 className="text-xl font-semibold mb-2">Skill-building</h3>
              <p>Learn the latest web technologies and best practices.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <svg
                className="w-12 h-12 mx-auto mb-4 text-primary"
                fill="none"
                stroke="#ff2c2c"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                ></path>
              </svg>
              <h3 className="text-xl font-semibold mb-2">Certification</h3>
              <p>
                Receive a recognized certification upon completion of the
                program.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="xl:px-28 lg:px-24 md:px-16 px-8 xl:py-16 lg:py-12 md:py-16 py-4 pb-8 font-Syne">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Internship Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h3 className="text-2xl font-semibold mb-4">What You'll Learn</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>HTML5, CSS3, and JavaScript fundamentals</li>
                <li>Modern frontend frameworks (React, Vue.js)</li>
                <li>Backend development with Node.js</li>
                <li>Database design and management</li>
                <li>Version control with Git</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Tools and Frameworks
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Visual Studio Code</li>
                <li>React and Next.js</li>
                <li>Node.js and Express</li>
                <li>MongoDB and PostgreSQL</li>
                <li>GitHub and GitLab</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Project Types</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Responsive website development</li>
                <li>E-commerce platforms</li>
                <li>Content management systems</li>
                <li>Progressive web applications</li>
                <li>RESTful API development</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="xl:px-28 lg:px-24 md:px-16 px-8 xl:py-16 lg:py-12 md:py-16 py-4 pb-8 bg-black font-Syne">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            What Our Interns Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="italic mb-4">
                "This internship was a game-changer for my career. The hands-on
                experience and mentorship I received were invaluable."
              </p>
              <p className="font-semibold">Gokul Raj</p>
              <p className="text-sm text-gray-600">Web Developer</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="italic mb-4">
                "I'm amazed at how much I've learned in such a short time. The
                projects are challenging but incredibly rewarding."
              </p>
              <p className="font-semibold">Karthikeyan</p>
              <p className="text-sm text-gray-600">Web Developer</p>
            </div>
          </div>
        </div>
      </section>

      <section className="xl:px-28 lg:px-24 md:px-16 px-8 xl:py-16 lg:py-12 md:py-16 py-4 pb-8 font-Syne">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Application Process
          </h2>
          <div className="max-w-3xl mx-auto md:px-20 xl:px-28">
            <div className="flex items-start mb-8">
              <div className="bg-[#ff2c2c] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Submit Application
                </h3>
                <p>
                  Fill out our online application form with your details and
                  experience.
                </p>
              </div>
            </div>
            <div className="flex items-start mb-8">
              <div className="bg-[#ff2c2c] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Skills Assessment
                </h3>
                <p>
                  Complete a brief coding challenge to showcase your current
                  skills.
                </p>
              </div>
            </div>
            <div className="flex items-start mb-8">
              <div className="bg-[#ff2c2c] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Interview</h3>
                <p>
                  If shortlisted, you'll have a video interview with our team.
                </p>
              </div>
            </div>
            <div className="flex items-start mb-8">
              <div className="bg-[#ff2c2c] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Offer</h3>
                <p>Successful candidates will receive an internship offer.</p>
              </div>
            </div>
            <div className="text-center mt-12">
              <a href="https://forms.gle/268zSv6PtMkwx5Lp7">
                <button className="btn font-Syne bg-[#CAF0F8] text-black p-2 mt-3 rounded font-bold">
                  Apply Now
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CareerWebDev;
