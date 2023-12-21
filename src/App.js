import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import AboutMe from "./Components/About Me/AboutMe";
import Certificates from "./Components/Certificates/Certificates";
import Feedback from "./Components/Feedback/Feedback";
import Footer from "./Components/Footer/Footer";
import Feedback1 from "./Components/Feedback/FeedbackData";
// import CarImage from "./Components/Accets/Nat.jpg";
function App() {
  return (
    <div className="m-1">
      <Router>
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ABOUT-ME" element={<AboutMe />} />
          <Route path="/CERTIFICATES" element={<Certificates />} />
          <Route path="/FEEDBACK" element={<Feedback />} />
          <Route path="/FEEDBACKNEW" element={<Feedback1 />} />

          {/* <Route path="/Registration" element={<Registration/>} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
