import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";

import Home from "./components/home/Home";
import Register from "./components/register/Register";
import Error404 from "./components/Errors/Error404";
import Competitions from "./components/competitions/Competitions";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Events from "./components/Events/Events";

function App() {
    return (
        <HashRouter>
            <div className="App font-poppins flex flex-col min-h-screen">
                <div className="flex-grow">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="register" element={<Register />} />
                        <Route path="competitions" element={<Competitions />} />
                        <Route path="*" element={<Error404 />} />
                        <Route path="events" element={<Events />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </HashRouter>
    );
}

export default App;
