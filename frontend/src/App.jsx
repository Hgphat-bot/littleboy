import { Toaster } from "sonner";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ChapterStream from "./components/ChapterStream";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { useLocation } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import StoryDetails from "./pages/StoryDetails";

function FooterConditional() {
  const location = useLocation();
  const path = location.pathname.replace(/\/$/, '').toLowerCase();
  if (path.startsWith('/chap')) return <Footer />;
  return null;
}




function App() {
  return (
    <>

      <useMobileRedirect/>

      <Toaster/>
      <BrowserRouter>
        <ScrollToTop /> 
        <Header/>

        <div className="pt-[50px] sm-pt-[56px]">
          <Routes>

            <Route
              path="/"
              element={<HomePage />}
            />

            <Route
              path="/StoryDetails"
              element={<StoryDetails />}
            />

            <Route
              path="/chap1"
              element={<ChapterStream start={1} />}
            />

            <Route
              path="/chap2"
              element={<ChapterStream start={2} />}
            />

            <Route
              path="/chap3"
              element={<ChapterStream start={3} />}
            />

            <Route
              path="/chap4"
              element={<ChapterStream start={4} />}
            />

            <Route
              path="/chap5"
              element={<ChapterStream start={5} />}
            />

            <Route
              path="/chap6"
              element={<ChapterStream start={6} />}
            />

            <Route
              path="/chap7"
              element={<ChapterStream start={7} />}
            />

            <Route
              path="*"
              element={<NotFound />}
            />  
          
          </Routes>
        </div>

        {/* Footer only on chapter pages */}
        <FooterConditional />
      </BrowserRouter>

    </>
  )
}

export default App
