import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Register from "./components/register/Register";
import Error404 from "./components/Errors/Error404";
import Workshops from "./components/workshops/Workshops";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Events from "./components/Events/Events";
import { AuthContextProvider } from "./components/context/AuthContext";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Notification from "./components/Notification/Notification";

function App() {
    return (
        <BrowserRouter>
            <div className="App font-poppins flex flex-col min-h-screen">
                <div className="flex-grow">
                    <AuthContextProvider>
                        <Notification />
                        <Navbar />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="register" element={<Register />} />
                            <Route path="workshops" element={<Workshops />} />
                            <Route path="contact" element={<Contact />} />
                            <Route path="*" element={<Error404 />} />
                            <Route path="events" element={<Events />} />
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
