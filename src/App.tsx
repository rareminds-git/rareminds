import LoaderComponent from "@/components/LoaderComponent";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Index from "./pages/Index";
import Name from "./pages/[name]";
import About from "./pages/[name]/about";
import CaseStudies from "./pages/[name]/case-studies";
import CaseStudyDetail from "./pages/[name]/case-studies/[name]";
import ServiceName from "./pages/[name]/services/[name]";
import Services from "./pages/[name]/services/index";
import BlogDetail from "./pages/blogs/[name]";
import CareersWebDev from "./pages/careers/web-developer-intern";
import CourseDetail from "./pages/courses/[name]/6th-sem-20204";
import Events from "./pages/hackathon";
import EventDetail from "./pages/hackathon/[name]";
import ImageGallery from "./pages/hackathon/gallery";
import WallofFame from "./pages/walloffame";

const App = () => {
  return (
    <>
      <DefaultLayout>
        <Suspense fallback={<LoaderComponent />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/:name" element={<Name />} />
            <Route path="/:userType/services" element={<Services />} />
            <Route
              path="/:userType/services/:serviceName"
              element={<ServiceName />}
            />
            <Route path="/:userType/case-studies" element={<CaseStudies />} />
            <Route
              path="/:userType/case-studies/:slug"
              element={<CaseStudyDetail />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/gallery" element={<ImageGallery />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
            <Route
              path="/hackathon/:eventCategory/:slug"
              element={<EventDetail />}
            />
            <Route path="/walloffame/" element={<WallofFame />} />
            <Route
              path="/careers/web-developer-intern"
              element={<CareersWebDev />}
            />
            <Route
              path="courses/:name/6th-sem-2024"
              element={<CourseDetail />}
            />
          </Routes>
        </Suspense>
      </DefaultLayout>
    </>
  );
};

export default App;
