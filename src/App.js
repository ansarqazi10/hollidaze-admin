import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/navbar";
import Enquiries from "./Components/enquiries";
import ContactUs from "./Components/contactUs";
import Home from "./Components/home";

function App() {
  return (
    <BrowserRouter>
	  <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/enquiries" element={<Enquiries />} />
        <Route path="/contactUs" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
