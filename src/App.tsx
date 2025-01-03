import { Suspense } from "react";
import LoaderComponent from "@/components/LoaderComponent";
import DefaultLayout from "./layouts/DefaultLayout";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Name from "./pages/[name]";
import ServiceName from "./pages/[name]/services/[name]";
import CaseStudyDetail from "./pages/[name]/case-studies/[name]";
import BlogDetail from "./pages/blogs/[name]";
import Services from "./pages/[name]/services/index";
import CaseStudies from "./pages/[name]/case-studies";
import About from "./pages/[name]/about";
import EventDetail from "./pages/hackathon/[name]";
import WallofFame from "./pages/walloffame";
import CourseDetail from "./pages/courses/[name]/6th-sem-20204";
import Events from "./pages/hackathon";
import CareersWebDev from "./pages/careers/web-developer-intern";
import ImageGallery from "./pages/hackathon/gallery";
import EventsGalleryPage from "./pages/events-gallery/events";
import ProjectsPage from "./pages/projects/projectlist";
import Naan from "./pages/projects/[name]";



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
            <Route path="/blogs/:slug" element={<BlogDetail />} />
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
            <Route
              path="events-gallery/events"
              element={<EventsGalleryPage/>}
            />
            
            <Route
              path="/projects/projectlist/"
              element={<ProjectsPage />}
            />

             <Route
              path="/projects/:name"
              element={<Naan />}
            />

          </Routes>
        </Suspense>
      </DefaultLayout>
    </>
  );
};

export default App;
