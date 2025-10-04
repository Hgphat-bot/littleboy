import { Toaster } from "sonner";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { useLocation } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import Chap1 from "./pages/Chap1";
import Chap2 from "./pages/Chap2";
import Chap3 from "./pages/Chap3";

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
        <Header/>

        <div className="pt-[50px] sm-pt-[56px]">
          <Routes>

            <Route
              path="/"
              element={<HomePage />}
            />

            <Route
              path="/chap1"
              element={<Chap1 />}
            />

            <Route
              path="/chap2"
              element={<Chap2 />}
            />

            <Route
              path="/chap3"
              element={<Chap3 />}
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
