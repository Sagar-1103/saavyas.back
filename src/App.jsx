import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Register from "./components/register/Register";
import Error404 from "./components/Errors/Error404";
import Workshops from "./components/workshops/Workshops";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Events from "./components/Events/Events";
import { AuthContextProvider } from "./components/context/AuthContext";
import EventRegister from "./components/register/EventRegister";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Notification from "./components/Notification/Notification";
import EventDetail from "./components/Events/EventDetail";
import Wrapper from "./components/utils/Wrapper";
import { useState } from "react";

function App() {
    let [text, settext] = useState("Sea Shore Soiree");
    return (
        <BrowserRouter>
            <div className="App font-poppins flex flex-col min-h-screen">
                <div className="flex-grow flex flex-col items-center">
                    <AuthContextProvider>
                        <Notification />
                        <Navbar />
                        <Wrapper text={text} />
                        <Routes>
                            <Route path="/" element={<Home settext={settext} />} />
                            {/* <Route path="register" element={<Register />} /> */}
                            <Route path="workshops" element={<Workshops settext={settext} />} />
                            <Route path="contact" element={<Contact settext={settext} />} />
                            <Route path="*" element={<Error404 settext={settext} />} />
                            <Route path="events" element={<Events settext={settext} />} />
                            {/* <Route path="events/register" element={<EventRegister />} /> */}
                            <Route
                                path="events/:category/:eventId"
                                element={<EventDetail settext={settext} />}
                            />
                            <Route path="about" element={<About />} />
                        </Routes>
                    </AuthContextProvider>
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
