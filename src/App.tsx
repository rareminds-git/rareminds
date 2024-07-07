import { Suspense } from "react";
import LoaderComponent from "@/components/LoaderComponent";
import DefaultLayout from "./layouts/DefaultLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Name from "./pages/[name]";
import ServiceName from "./pages/services/[name]";
import CaseStudyDetail from "./pages/case-studies/[name]";
import BlogDetail from "./pages/blogs/[name]";
import Services from "./pages/services";

const App = () => {
  return (
    <>
      <DefaultLayout>
        <Suspense fallback={<LoaderComponent />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/:name" element={<Name />} />
            <Route path="services/:userType" element={<Services />} />
            <Route
              path="services/:userType/:serviceName"
              element={<ServiceName />}
            />
            <Route path="case-studies/:slug" element={<CaseStudyDetail />} />
            <Route path="blogs/:slug" element={<BlogDetail />} />
          </Routes>
        </Suspense>
      </DefaultLayout>
    </>
  );
};

export default App;
