import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Signup from "./components/signup";
import Profile from "./components/Profile"
import NotFound from "./components/NotFound";
import Home from "./components/Home";

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/home" element={<Home />}/>


        
        {/* Default route */}
        <Route path="/" element={<Login />} /> 

        {/* all other routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;