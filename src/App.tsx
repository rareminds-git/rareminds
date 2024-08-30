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
            <Route path="/:userType/about" element={<About />} />
            <Route path="blogs/:slug" element={<BlogDetail />} />
          </Routes>
        </Suspense>
      </DefaultLayout>
    </>
  );
};

export default App;
